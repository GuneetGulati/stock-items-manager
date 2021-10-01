import React from 'react'
import "./Pricecards.css";


function PriceCards() {
    return (
        <div className="pricecards">
            <div className="price-card">
                <h6>Silver Plan</h6>
                <h6>₹ 1299 ₹799/year</h6>
            </div>  
            <div className="price-card">
                <h6>Gold Plan</h6>
                <h6>₹ 2599 ₹1799/year</h6>
            </div>
            <div className="price-card">
                <h6>Diamond Plan</h6>
                <h6>₹ 4599 ₹3500/year</h6>
            </div>
        </div>
    )
}

export default PriceCards;
