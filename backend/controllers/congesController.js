// controllers/congesController.js
import db from '../config/db.js'; // Connexion MySQL

// GET : Tous les congés
export const getAllConges = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM conges');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des congés' });
    }
};

// POST : Ajouter un congé
export const createConge = async (req, res) => {
    const { user_id, type, start_date, end_date, status } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO conges (user_id, type, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)',
            [user_id, type, start_date, end_date, status || 'en attente']
        );
        res.status(201).json({ id: result.insertId, message: 'Congé ajouté' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l’ajout du congé' });
    }
};

// PUT : Modifier un congé
export const updateConge = async (req, res) => {
    const { id } = req.params;
    const { type, start_date, end_date, status } = req.body;
    try {
        await db.query(
            'UPDATE conges SET type = ?, start_date = ?, end_date = ?, status = ? WHERE id = ?',
            [type, start_date, end_date, status, id]
        );
        res.json({ message: 'Congé mis à jour' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du congé' });
    }
};

// DELETE : Supprimer un congé
export const deleteConge = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM conges WHERE id = ?', [id]);
        res.json({ message: 'Congé supprimé' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du congé' });
    }
};
