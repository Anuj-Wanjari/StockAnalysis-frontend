import { Link } from 'react-router-dom';
import './SectorPage.css';

import nifty50Image from '../images/nifty50.jpg';
import niftyMidcapImage from '../images/niftyMidcap.jpg';
import niftySmallcapImage from '../images/niftySmallcap.jpg';

function SectorPage() {
    return (
        <div className="sector-page">
            <h2>Sector Specific Indices</h2>
            <div className="card-container">
                <Link to="/sectors/nifty50" className="sector-card">
                    <img src={nifty50Image} alt="Nifty 50" className="sector-image" />
                    <h3>Nifty 50</h3>
                </Link>

                <Link to="/sectors/niftymidcap" className="sector-card">
                    <img src={niftyMidcapImage} alt="Nifty Midcap" className="sector-image" />
                    <h3>Nifty Midcap 100</h3>
                </Link>

                <Link to="/sectors/niftysmallcap" className="sector-card">
                    <img src={niftySmallcapImage} alt="Nifty Smallcap" className="sector-image" />
                    <h3>Nifty Smallcap 100</h3>
                </Link>
            </div>
        </div>
    );
}

export default SectorPage;
