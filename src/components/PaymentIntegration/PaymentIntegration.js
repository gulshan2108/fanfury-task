import React from 'react'
import { Button, Col} from 'react-bootstrap';
import barCode from "../../assets/barcode.png";

const PaymentIntegration = () => {
  return (
    <Col sm={5}>
        <div className='hero-content'>
            <div className='hero-action-box'>
                <div className='bar-code-box'>
                    <img src={barCode} alt="bar-code" className='img-fluid' />
                </div>
            </div>
        </div>
    </Col>
  )
}

export default PaymentIntegration