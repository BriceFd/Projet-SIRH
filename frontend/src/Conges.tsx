import React, { useEffect, useState } from 'react';

type Conge = {
    id: number;
    user_id: number;
    type: string;
    start_date: string;
    end_date: string;
    status: 'en attente' | 'approuvé' | 'refusé';
    created_at: string;
};

const Conges: React.FC = () => {
    const [conges, setConges] = useState<Conge[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchConges = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/conges');
                if (!response.ok) throw new Error('Erreur lors du chargement des congés');
                const data = await response.json();
                setConges(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConges();
    }, []);

    if (loading) return <p>Chargement des congés...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Liste des congés</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow rounded">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Utilisateur</th>
                        <th className="py-2 px-4 border">Type</th>
                        <th className="py-2 px-4 border">Du</th>
                        <th className="py-2 px-4 border">Au</th>
                        <th className="py-2 px-4 border">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {conges.map((conge) => (
                        <tr key={conge.id}>
                            <td className="py-2 px-4 border">{conge.id}</td>
                            <td className="py-2 px-4 border">{conge.user_id}</td>
                            <td className="py-2 px-4 border">{conge.type}</td>
                            <td className="py-2 px-4 border">{conge.start_date}</td>
                            <td className="py-2 px-4 border">{conge.end_date}</td>
                            <td className="py-2 px-4 border capitalize">{conge.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Conges;
