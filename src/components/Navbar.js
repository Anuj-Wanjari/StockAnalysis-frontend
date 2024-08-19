//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\frontend\src\components\Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="nav-left">Stock Analysis Platform</div>
            <div className="nav-right">
                <Link to="/">Home</Link>
                <Link to="/stocks">Stock</Link>
                <Link to="/sectors">Sector</Link>
            </div>
        </nav>
    );
}

export default Navbar;
