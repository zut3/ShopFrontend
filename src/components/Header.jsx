import "./style.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <Link className = "logo" to="/">Logo</Link>
                <div className="btn__group">
                    <button className="btn btn-outline-primary">Sign up</button>
                    <button className="btn btn-primary">Log in</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;