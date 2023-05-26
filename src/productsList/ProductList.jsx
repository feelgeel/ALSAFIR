import React from 'react';

import Card from '../component/card/Card';
import Popups from '../popups/Popups';

const ProductList = () => {
    let prodDb=[
        {
            id: 1,
            name: "mouniss",
            price:30,
        },
        {
            id: 2,
            name: "mouniss",
            price:30,
        },
        {
            id: 2,
            name: "khobz zitoun",
            price:30,
        },
        {
            id: 3,
            name: "parisien",
            price:30,
        },
        {
            id: 4,
            name: "smid",
            price:30,
        },
    ]
    return (
        <div className="productlist">
            
            {
                prodDb.map(item => { 
                    return <Card data={item} />
                })
            }
            
        </div>
    );
};

export default ProductList;