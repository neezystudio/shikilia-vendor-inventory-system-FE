import React, { useState } from 'react'
import './productImage.css'

const subImages = [
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810075/Shikilia/ryan-hoffman-A7f7XRKgUWc-unsplash_wk29tc.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-Cs4GVbMqKGY-unsplash_r0jtis.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg'
]

function ProductImage() {
    const [mainImage, setMainImage] = useState(subImages[0]);

    return (
        <div className="product__image">
            <div className="product__image-main">
                <img src={mainImage} alt="" />
            </div>

            <div className="product__image-subimage">
                {
                    subImages.map((item, index) => (
                        <img 
                            src={item} 
                            alt="product" 
                            key={index} 
                            onClick={() => setMainImage(item)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImage
