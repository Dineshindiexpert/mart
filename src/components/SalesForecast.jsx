import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, Line, ReferenceDot } from 'recharts';
 
import { Saleforecast} from '../data/saleforecast';
import { ArrowRight } from 'react-bootstrap-icons';

const SalesForecast = () => {
  // Safe-side fallback 
  const cardsToRender = Saleforecast || [];

  return (
    <Card className='border-0 shadow-sm p-3 pb-5  rounded-4 px-4'>
      <div className="d-flex flex-column gap-3 h-100">

        {/*  1. Top Section: Main Sales Forecast Box */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className=" small fw-medium fs-4">Sales forecast</span>
            <span className="text-muted fw-semibold cursor-pointer " title="Info">More <span><img src='./src/assets/icons/arrow-right.svg' alt='edit pen'/></span>  </span>
          </div>
        </div>
      
        <Row className="g-4 row-cols-1 row-cols-sm-2">
          {cardsToRender.map((card, index) => {
            
            const isVisitors = card.title === "Visitors";
            const brandColor = isVisitors ? "#10B981" : card.isPositive ? '#FF7A00' : '#FF3B30';

            return (
              <Col key={index}>
                <Card className="border-0 shadow-sm p-3" style={{ borderRadius: '14px' }}>
                  <Card.Body className="p-0">

                    {/* Top Meta Line: Title & Percentage Pill */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-secondary small fw-medium" style={{ fontSize: '13px' }}>
                        {card.title}
                      </span>
                      <span
                        className="p-1 px-2 rounded-pill small fw-bold"
                        style={{
                          backgroundColor: isVisitors ? '#E6F4EA' : card.isPositive ? '#FFF3E0' : '#FFEBEE',
                          color: isVisitors ? '#10B981' : card.isPositive ? '#E65100' : '#C62828',
                          fontSize: '11px'
                        }}
                      >
                        {card.trend}
                      </span>
                    </div>

                    {/* Bottom Line: Metric Digits & Sparkline Mini Graph */}
                    <div className="d-flex justify-content-between align-items-center align-items-end">
                      <h3 className="mb-0 fw-bold text-dark fs-4">{card.value}</h3>

                      {/* Sparkline Canvas Area */}
                      <div style={{ width: '70px', height: '32px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={card.chartData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                            <Line
                              type="monotone"
                              dataKey="v"
                              stroke={brandColor}
                              strokeWidth={2.2}
                              dot={false}
                            />
                            {card.dotX !== undefined && card.dotY !== undefined && (
                              <ReferenceDot
                                x={card.dotX}
                                y={card.dotY}
                                r={3.5}
                                fill={brandColor}
                                stroke="#FFF"
                                strokeWidth={1.5}
                              />
                            )}
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

      </div>
    </Card>

  );
};

export default SalesForecast;
