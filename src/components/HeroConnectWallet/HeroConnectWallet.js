import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroConnectWallet = () => {
  return (
    <Col lg={5}>
        <div className='hero-content'>
            <h1 className='hero-title'>
                Connet Wallet
            </h1>
            <p className='hero-para'>
                Claim, Own and Manage Fanclubs, choose <br /> from 250 clubs spread across 5 Major leagues
            </p>
            <div className='hero-action-box'>
                <Link to="/payment-integration" className='btn btn-primary d-block mb-3'>Option 1</Link>
                <Link to="/" className='btn btn-primary d-block'>Option 2</Link>
            </div>
        </div>
    </Col>
  )
}

export default HeroConnectWallet