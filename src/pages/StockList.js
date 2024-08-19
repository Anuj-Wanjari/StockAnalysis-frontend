//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\frontend\src\pages\StockList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockList.css'; 
function StockList() {
    const { category } = useParams();
    const [stocks, setStocks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/stocks/${category}`)
            .then(res => {
                console.log('Fetched stocks:', res.data);
                setStocks(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            });
    }, [category]);

    return (
        <div className="stock-list">
            <h2>{category} Stocks</h2>
            {error && <p>{error}</p>}
            <div className="stock-table">
                <div className="stock-header">
                    <div className="stock-cell">Name</div>
                    <div className="stock-cell">Sub-Sector</div>
                    <div className="stock-cell">Market Cap</div>
                </div>
                {stocks.map(stock => (
                    <div className="stock-row" key={stock._id}>
                        <div className="stock-cell">{stock.name}</div>
                        <div className="stock-cell">{stock.subSector}</div>
                        <div className="stock-cell">{stock.marketCap.toLocaleString()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StockList;
