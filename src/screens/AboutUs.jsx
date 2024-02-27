import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const AboutUsScreen = () => {
  return (
    <FormContainer>
      <h1>About Us</h1>

      <p>
        Stock Market Simulator is a platform designed to provide individuals
        with a risk-free environment to learn about stock market trading.
      </p>

      <p>
        Our platform allows users to create virtual portfolios, track their
        performance, and practice trading stocks, ETFs, and other securities
        using virtual money.
      </p>

      <p>
        Whether you're a beginner looking to learn the basics of investing or
        an experienced trader wanting to test new strategies, Stock Market
        Simulator offers a user-friendly interface and real-time market data to
        help you improve your trading skills.
      </p>

      <Row className='py-3'>
        <Col>
          <Link to='/'>Go Back</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default AboutUsScreen;
