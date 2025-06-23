import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import absencesRoutes from './routes/absences.js';
import usersRoutes from './routes/users.js';
import congesRoutes from './routes/conges.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/absences', absencesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/conges', congesRoutes);


// Route racine
app.get('/', (req, res) => {
    res.send(`Routes disponibles :
         /api/absences
         /api/users
         /api/conges
         `);
});

// Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`);
});
