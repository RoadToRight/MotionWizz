import React from 'react'
import styled from 'styled-components'

const Testimonial = () => {
    return (
        <TestimonialSec>
            <h3>Testimonials</h3>
            <h2>Discover What Other Brands Are Saying About us</h2>

            <div className="reviews_card_wrapper">
                <div className="reviews_card">
                    <div className="quote_icon">“</div>
                    <div className="stars">★★★★★</div>
                    <div className="image"><img src="" alt="" /></div>
                    <div className="name"></div>
                    <div className="designation"></div>
                    <p className="review">

                    </p>
                </div>
            </div>
        </TestimonialSec>
    )
}

export default Testimonial


const TestimonialSec = styled.div`
    .reviews_card{
            background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 20px;
    width: 300px;
    min-height: 180px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
`