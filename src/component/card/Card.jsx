import React from 'react'
// import "./card.css"

export default function Card() {
    return (
        <div className='card'>
            <div className="card-side card-side-front">
                <div className="card-pic card-pic-1">
                    &nbsp;
                </div>
                <h4 className="card-heading">
                    <span className="card-heading-span card-heading-span-1">Mounisse</span>
                </h4>
                <div className="card-details">
                    <ul>
                        <li className="card-list">30 DA</li>
                       
                    </ul>
                </div>
            </div>
            <div className="card-side card-side-back">
                <div className="card-cta">
                    <div className="card-price-box">
                        <p className="card-price-only">Only</p>
                        <p className="card-price-value">$897</p>
                    </div>
                    <a href="#popup" className="btn btn-white">Book now!</a>
                </div>
            </div>
        </div>
    )
}
