import { useParams } from 'react-router-dom';
import './SectorDetail.css';

const sectorDetails = {
    nifty50: {
        title: "Nifty 50",
        description: [
            "What is Nifty50:What is Nifty50: It’s an index of the 50 largest and most liquid companies listed on the NSE of India.",
            "Type of Stocks Included: It features top companies from diverse sectors like finance, IT, and healthcare.",
            "How Nifty50 Works: It’s calculated based on free-float market capitalization and updated regularly; stocks are reviewed and can be changed every 6 months.",
            "Who Should Invest: Ideal for investors seeking diversified exposure to the Indian market with a long-term perspective."
        ]
    },
    niftymidcap: {
        title: "Nifty Midcap 100",
        description: [
            "What is Nifty Midcap: An index of 100 mid-sized companies listed on the NSE.",
            "Type of Stocks Included: Midcap companies across various sectors like manufacturing and consumer goods.",
            "How Nifty Midcap Works: Calculated based on free-float market capitalization, reviewed every 6 months.",
            "Who Should Invest: Ideal for investors seeking growth with a higher risk tolerance."
        ]
    },
    niftysmallcap: {
        title: "Nifty Smallcap 100",
        description: [
            "What is Nifty Smallcap: An index of 100 small-sized companies on the NSE.",
            "Type of Stocks Included: Emerging small-cap companies with high growth potential.",
            "How Nifty Smallcap Works: Calculated using free-float market capitalization, rebalanced every 6 months.",
            "Who Should Invest: Suited for investors willing to take higher risks for potentially significant returns."
        ]
    }
};

function SectorDetail() {
    const { sector } = useParams();
    const details = sectorDetails[sector];

    if (!details) {
        return <p>Sector not found</p>;
    }

    return (
        <div className="sector-detail">
            <h2>{details.title}</h2>
            <ul>
                {details.description.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}

export default SectorDetail;
