function Dashboard() {
    const stats = [
        {
            title: "Absences en Cours",
            value: "3",
            icon: "📅",
            cardClass: "absences-card"
        },
        {
            title: "Congés Approuvés",
            value: "12",
            icon: "🏖️",
            cardClass: "approved-leaves-card"
        },
        {
            title: "Notes de Frais",
            value: "5",
            icon: "💼",
            cardClass: "expense-notes-card"
        }
    ];

    const activity = [
        {
            action: "Demande de congé",
            user: "Marie Leclerc",
            date: "Aujourd'hui, 10:30"
        },
        {
            action: "Validation note de frais",
            user: "Pierre Martin",
            date: "Hier, 16:45"
        },
        {
            action: "Déclaration d'absence",
            user: "Sophie Dubois",
            date: "2 jours, 09:15"
        }
    ];

    return (
        <>
            <section className="dashboard-stats">
                {stats.map((stat, index) => (
                    <div key={index} className={`dashboard-stat-card ${stat.cardClass}`}>
                        <div className="dashboard-stat-icon">{stat.icon}</div>
                        <div>
                            <p className="dashboard-stat-title">{stat.title}</p>
                            <p className="dashboard-stat-value">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="recent-activity-section">
                <h2 className="recent-activity-title">Activité Récente</h2>
                <div className="recent-activity-list">
                    {activity.map((item, index) => (
                        <div key={index} className="recent-activity-item">
                            <div className="recent-activity-details">
                                <p className="recent-activity-action">{item.action}</p>
                                <p className="recent-activity-user">{item.user}</p>
                            </div>
                            <span className="recent-activity-date">{item.date}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Dashboard;
