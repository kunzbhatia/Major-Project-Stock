import React from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';

const StockMarketSimulatorLandingPage = () => {
  return (
    <div className='py-5'>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Image
              src="your-image.jpg" // Replace with your actual image path
              alt="Stock Market Simulator Image"
              fluid
              rounded
            />
          </Col>
          <Col xs={12} md={6} className="overflow-auto scroll-content">
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light'>
              <h1 className='text-center mb-4'>Welcome to the Stock Market Simulator</h1>
              <p className='text-center mb-4'>
                Hello I am Abhi
              </p>
              <div className='d-flex justify-content-center'>
                <Button variant='primary' href='/login' className='me-3'>
                  Start Trading
                </Button>
                <Button variant='secondary' href='/about'>
                  Learn More
                </Button>
              </div>
            </Card>
            {/* Add five additional cards here */}
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light mt-3'>
              {/* Card content for the first additional card */}
              <h2 className='text-center mb-4'>Card Title 1</h2>
              <p className='text-center mb-4'>
                Card description for the first additional card.
              </p>
              <Button variant='primary' href='/'>
                Learn More
              </Button>
            </Card>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light mt-3'>
              {/* Card content for the second additional card */}
              <h2 className='text-center mb-4'>Card Title 2</h2>
              <p className='text-center mb-4'>
                Card description for the second additional card.
              </p>
              <Button variant='primary' href='/'>
                Learn More
              </Button>
            </Card>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light mt-3'>
              {/* Card content for the third additional card */}
              <h2 className='text-center mb-4'>Card Title 3</h2>
              <p className='text-center mb-4'>
                Card description for the third additional card.
              </p>
              <Button variant='primary' href='/'>
                Learn More
              </Button>
            </Card>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light mt-3'>
              {/* Card content for the fourth additional card */}
              <h2 className='text-center mb-4'>Card Title 4</h2>
              <p className='text-center mb-4'>
                Card description for the fourth additional card.
              </p>
              <Button variant='primary' href='/'>
                Learn More
              </Button>
            </Card>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light mt-3'>
              {/* Card content for the fifth additional card */}
              <h2 className='text-center mb-4'>Card Title 5</h2>
              <p className='text-center mb-4'>
                Card description for the fifth additional card.
              </p>
              <Button variant='primary' href='/'>
                Learn More
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StockMarketSimulatorLandingPage;
