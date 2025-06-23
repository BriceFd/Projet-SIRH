import { db } from '../config/db.js';

// 🔹 GET /api/users
export const getAllUsers = async (req, res) => {
    try {
        const [users] = await db.query(`
            SELECT u.id, u.first_name, u.last_name, u.email, r.name AS role, e.name AS equipe, u.created_at
            FROM users u
            LEFT JOIN roles r ON u.role_id = r.id
            LEFT JOIN equipes e ON u.equipe_id = e.id
        `);
        res.json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// 🔹 GET /api/users/:id
export const getUserById = async (req, res) => {
    try {
        const [user] = await db.query(`
            SELECT u.id, u.first_name, u.last_name, u.email, r.name AS role, e.name AS equipe, u.created_at
            FROM users u
            LEFT JOIN roles r ON u.role_id = r.id
            LEFT JOIN equipes e ON u.equipe_id = e.id
            WHERE u.id = ?
        `, [req.params.id]);

        if (user.length === 0) return res.status(404).json({ error: 'Utilisateur non trouvé' });
        res.json(user[0]);
    } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// 🔹 POST /api/users
export const createUser = async (req, res) => {
    const { first_name, last_name, email, password_hash, role_name, equipe_id } = req.body;

    if (!first_name || !last_name || !email || !password_hash || !role_name) {
        return res.status(400).json({ error: 'Champs requis manquants' });
    }

    try {
        // Récupérer l'ID du rôle à partir de son nom
        const [roleResult] = await db.query('SELECT id FROM roles WHERE name = ?', [role_name]);
        if (roleResult.length === 0) {
            return res.status(400).json({ error: 'Rôle invalide' });
        }

        const role_id = roleResult[0].id;

        const [result] = await db.query(
            'INSERT INTO users (first_name, last_name, email, password_hash, role_id, equipe_id) VALUES (?, ?, ?, ?, ?, ?)',
            [first_name, last_name, email, password_hash, role_id, equipe_id || null]
        );

        res.status(201).json({ message: 'Utilisateur créé', user_id: result.insertId });
    } catch (error) {
        console.error('Erreur lors de la création de l’utilisateur :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// 🔹 DELETE /api/users/:id
export const deleteUser = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Utilisateur non trouvé' });
        res.json({ message: 'Utilisateur supprimé' });
    } catch (error) {
        console.error('Erreur suppression utilisateur :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
