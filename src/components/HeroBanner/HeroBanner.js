import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <Col sm={5}>
        <div className='hero-content'>
            <h1 className='hero-title'>
                <span className='text-br'>Find</span> your fury
            </h1>
            <p className='hero-content'>
                Claim, Own and Manage Fanclubs, choose from 250 clubs spread across 5 Major leagues
            </p>
            <Link to="/connect-wallet" className="btn btn-primary hero-btn">
                Connect Wallet To Begin
            </Link>
        </div>
    </Col>
    
  )
}

export default HeroBanner