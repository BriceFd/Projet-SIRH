import { Link } from 'react-router-dom';
import './App.css';

function Header() {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <img src="/logo-eurecia-like.svg" alt="Company Logo" />
                <nav className="nav-links">
                    <Link to="/">Tableau de bord</Link>
                    <Link to="/absences">Absences</Link>
                    <Link to="/conges">Congés</Link>
                    <Link to="/notes-frais">Notes de Frais</Link>
                </nav>
            </div>
            <div className="navbar-right">
                <div className="user-info">
                    <span>Jean Dupont</span>
                    <p>Responsable RH</p>
                </div>
                <button className="logout-button">Déconnexion</button>
            </div>
        </header>
    );
}

export default Header;
