import React from 'react'
import { Container, Row } from 'react-bootstrap';
import heroGraphic from "../../assets/hero-graphic.svg";
import Header from './Header';

const HeroGraphic = (props) => {
  return (
    <div className='hero-wrapper'>
        <Header />
        <img src={heroGraphic} alt="image" className='hero-image img-fluid' />
        <div className='hero-banner'>
            <Container>
                <Row className='justify-content-end align-items-center hero-row'>
                    {props.children}
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default HeroGraphic