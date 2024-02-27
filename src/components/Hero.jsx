import { Container, Card, Button } from 'react-bootstrap';

const StockMarketSimulator = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Stock Market Simulator</h1>
          <p className='text-center mb-4'>
            Welcome to the Stock Market Sim. Start trading virtual stocks
            and learn about the market!
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default StockMarketSimulator;
