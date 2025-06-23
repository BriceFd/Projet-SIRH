import { db } from '../config/db.js';

export const getAllAbsences = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM absences');
        res.json(rows);
    } catch (err) {
        console.error('Erreur lors de la récupération des absences :', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
