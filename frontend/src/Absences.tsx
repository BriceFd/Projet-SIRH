import React, { useEffect, useState } from 'react';

type Absence = {
    id: number;
    user_id: number;
    type: string;
    reason: string;
    start_date: string;
    end_date: string;
    status: 'en attente' | 'approuvée' | 'refusée';
    created_at: string;
};

const Absences: React.FC = () => {
    const [absences, setAbsences] = useState<Absence[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAbsences = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/absences');
                if (!response.ok) throw new Error('Erreur lors du chargement des absences');
                const data = await response.json();
                setAbsences(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAbsences();
    }, []);

    if (loading) return <p>Chargement des absences...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Liste des absences</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow rounded">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Utilisateur</th>
                        <th className="py-2 px-4 border">Type</th>
                        <th className="py-2 px-4 border">Raison</th>
                        <th className="py-2 px-4 border">Du</th>
                        <th className="py-2 px-4 border">Au</th>
                        <th className="py-2 px-4 border">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {absences.map((absence) => (
                        <tr key={absence.id}>
                            <td className="py-2 px-4 border">{absence.id}</td>
                            <td className="py-2 px-4 border">{absence.user_id}</td>
                            <td className="py-2 px-4 border">{absence.type}</td>
                            <td className="py-2 px-4 border">{absence.reason}</td>
                            <td className="py-2 px-4 border">{absence.start_date}</td>
                            <td className="py-2 px-4 border">{absence.end_date}</td>
                            <td className="py-2 px-4 border capitalize">{absence.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Absences;
