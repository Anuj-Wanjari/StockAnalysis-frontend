import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StockPage.css'; 

import nifty50Image from '../images/nifty50.jpg';
import niftyMidcapImage from '../images/niftyMidcap.jpg';
import niftySmallcapImage from '../images/niftySmallcap.jpg';

function StockPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasPopupBeenShown, setHasPopupBeenShown] = useState(false);

    useEffect(() => {
        if (!hasPopupBeenShown) {
            setShowPopup(true);
            setHasPopupBeenShown(true);
        }
    }, [hasPopupBeenShown]);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const handleLearnNow = () => {
        window.location.href = '/learn'; 
    };

    return (
        <div className="stock-page">
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h1 style={{ color: '#ff0000' }}>Alert!!</h1>
                        <h2>Learn how to select Stock from list!</h2>
                        <div className="popup-buttons">
                            <button onClick={handleLearnNow}>Learn Now</button>
                            <button onClick={handlePopupClose}>Ok</button>
                        </div>
                    </div>
                </div>
            )}
            <h2>Sector Specific Stocks</h2>
            <div className="card-container">
                <Link to="/stocks/nifty50" className="stock-card">
                    <img src={nifty50Image} alt="Nifty 50" className="stock-image" />
                    <h3>Nifty 50</h3>
                    <ul>
                        <li>Tracks top 50 companies on the NSE</li>
                        <li>Reflects various sectors of the Indian economy</li>
                        <li>The index is reviewed every six months</li>
                    </ul>
                </Link>

                <Link to="/stocks/niftymidcap" className="stock-card">
                    <img src={niftyMidcapImage} alt="Nifty Midcap" className="stock-image" />
                    <h3>Nifty Midcap</h3>
                    <ul>
                        <li>Tracks 100 mid-sized companies on the NSE</li>
                        <li>Represents diverse sectors within the midcap segment</li>
                        <li>Updated every six months to reflect market changes</li>
                    </ul>
                </Link>

                <Link to="/stocks/niftysmallcap" className="stock-card">
                    <img src={niftySmallcapImage} alt="Nifty Smallcap" className="stock-image" />
                    <h3>Nifty Smallcap</h3>
                    <ul>
                        <li>Tracks 250 smaller companies on the NSE</li>
                        <li>Covers various sectors within the smallcap space</li>
                        <li>Reviewed semi-annually for accuracy</li>
                    </ul>
                </Link>
            </div>
        </div>
    );
}

export default StockPage;
