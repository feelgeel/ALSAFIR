import React from 'react'
// import "./card.css"

export default function Card() {
    return (
        <div className='card'>
            <div className="card-side card-side-front">
                <div className="card-pic card-pic-1">
                    &nbsp;
                </div>
                {/* <h4 className="card-heading">
                    <span className="card-heading-span card-heading-span-1">Mounisse</span>
                </h4>
                <h4 className="card-heading">
                    <span className="card-heading-span card-heading-span-1">30DA</span>
                </h4> */}
                <div className="card-details">
                    <ul>
                        <li className="card-list">30 DA</li>
                       
                    </ul>
                </div>
            </div>
           
        </div>
    )
}