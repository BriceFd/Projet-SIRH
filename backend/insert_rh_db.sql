USE gestion_rh;

-- 1. SERVICES
INSERT INTO services (name, effectif_minimal) VALUES ('Développement', 2);

-- 2. EQUIPES (avec service_id 1)
INSERT INTO equipes (name, service_id) VALUES ('Equipe A', 1);

-- ----------- USERS -----------
INSERT INTO users (role_id, equipe_id, first_name, last_name, email, password_hash) VALUES
(1, 1, 'Alice', 'Martin', 'alice.martin@example.com', 'hashed_pwd_1'),
(2, 1, 'Bob', 'Durand', 'bob.durand@example.com', 'hashed_pwd_2'),
(1, 1, 'Chloe', 'Petit', 'chloe.petit@example.com', 'hashed_pwd_3'),
(3, 1, 'David', 'Moreau', 'david.moreau@example.com', 'hashed_pwd_4');


-- ----------- ABSENCES -----------
INSERT INTO absences (user_id, type, reason, start_date, end_date, status) VALUES
(1, 'Maladie', 'Grippe saisonnière', '2025-04-02', '2025-04-05', 'approuvée'),
(3, 'Personnel', 'Problème familial', '2025-05-10', '2025-05-12', 'en attente'),
(1, 'Maladie', 'Fièvre', '2025-03-22', '2025-03-23', 'refusée'),
(2, 'Autre', 'Journée off exceptionnelle', '2025-04-15', '2025-04-15', 'approuvée');

-- ----------- CONGÉS -----------
INSERT INTO conges (user_id, type, start_date, end_date, status) VALUES
(1, 'Congé payé', '2025-07-01', '2025-07-14', 'en attente'),
(2, 'Congé sans solde', '2025-08-01', '2025-08-10', 'approuvé'),
(3, 'Congé maternité', '2025-06-01', '2025-09-01', 'approuvé'),
(1, 'Congé payé', '2025-12-20', '2026-01-05', 'en attente');

-- ----------- NOTES DE FRAIS -----------
INSERT INTO notes_frais (user_id, description, amount, date_submitted, status, justificatif_url) VALUES
(1, 'Repas client - Paris', 48.50, '2025-04-10', 'validée', 'http://example.com/justif1.pdf'),
(2, 'Transport train Lyon', 125.90, '2025-03-28', 'en attente', 'http://example.com/justif2.pdf'),
(3, 'Fournitures de bureau', 32.10, '2025-04-05', 'refusée', NULL),
(1, 'Hébergement mission Lille', 342.00, '2025-04-20', 'validée', 'http://example.com/justif3.pdf');

-- ----------- NOTIFICATIONS -----------
INSERT INTO notifications (user_id, message, seen, created_at) VALUES
(1, 'Votre demande de congé du 2024-06-01 au 2024-06-10 a été approuvée.', FALSE, '2024-05-10 09:30:00'),
(2, 'Un nouveau justificatif de note de frais a été ajouté.', TRUE, '2024-05-09 14:12:00'),
(3, 'Nouvelle demande d\'absence en attente de validation.', FALSE, '2024-05-13 08:45:00'),
(4, 'Votre mot de passe a été modifié avec succès.', TRUE, '2024-05-01 11:00:00'),
(1, 'Une nouvelle demande de congé a été soumise par un membre de votre équipe.', FALSE, '2024-05-12 17:45:00'),
(2, 'Une absence validée a été enregistrée du 2024-06-15 au 2024-06-20.', FALSE, '2024-05-11 10:05:00'),
(3, 'Vous avez dépassé votre quota de RTT pour l’année 2024.', FALSE, '2024-05-10 16:00:00');

