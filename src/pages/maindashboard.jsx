import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { initialCardData } from '../data/dashboardData';
import RevenueByDevice from '../components/RevenueByDevice';
import TrafficChart from '../components/TrraficChart';
import Bestsellers from '../components/Bestseller';
import SalesForecast from '../components/SalesForecast';
import LatestOrders from '../components/LatestOrders';
import CartGaugeCard from '../components/CartGaugeCard';
import RevenueBarCard from '../components/RevenueBarCard';
import Minicards from '../components/minicards';
import Revenuedata from '../data/Revenuedata';

const Maindashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    setDashboardData(initialCardData);
  }, []);

  return (
    <Container fluid className="p-4 bg-light min-vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* SECTION 1: Mini Cards */}
      <Row className="mb-4">
        <Col xs={12}>
          <Minicards />
        </Col>
      </Row>

      {/* SECTION 2: Revenue Bar & Cart Gauge */}
 
      <Row className="g-4 mb-4 align-items-stretch">
        <Col lg={9} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <RevenueBarCard title="Revenue" actionText="Advanced Report →" data={Revenuedata} />
          </div>
        </Col>
        <Col lg={3} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <CartGaugeCard />
          </div>
        </Col>
      </Row>

      {/* SECTION 3: Revenue by Device & Traffic Chart */}
      <Row className="g-4 mb-4 align-items-stretch">
        <Col lg={6} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <RevenueByDevice />
          </div>
        </Col>
        <Col lg={6} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <TrafficChart />
          </div>
        </Col>
      </Row>

      {/* SECTION 4: Bestsellers & Sales Forecast */}
     
      <Row className="g-4 mb-4 align-items-stretch">
        <Col lg={6} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <Bestsellers />
          </div>
        </Col>
        <Col lg={6} md={12} className="d-flex">
          <div className="w-100 d-flex flex-column h-100">
            <SalesForecast />
          </div>
        </Col>
      </Row>

      {/* SECTION 5: Latest Orders */}
      <Row className="g-4">
        <Col xs={12}>
          <LatestOrders />
        </Col>
      </Row>

    </Container>
  );
};

export default Maindashboard;
