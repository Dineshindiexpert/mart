import React, { useEffect, useState } from 'react';
import { initialCardData } from '../data/dashboardData';
import { Card, Col, Row } from 'react-bootstrap';
import { Line, LineChart, ReferenceDot, ResponsiveContainer } from 'recharts';

const Minicards = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    setDashboardData(initialCardData);
  }, []);

  return (
    <div>
      <Row className="g-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4">
        {dashboardData.map((card, index) => {
          
      
          let brandColor = '#FF7A00';      
          let textColor = '#FF7A00';        

          // 1. Orders Card Logic (Negative - Red Theme)
          if (card.title === "Orders" || (!card.isPositive && card.title !== "Conversion")) {
            brandColor = '#FF3B30';       
            textColor = '#FF3B30';        
          } 
          
          // 2. Visitors Card Logic (Positive - Green Theme)
          else if (card.title === "Visitors") {
            brandColor = '#10B981';        
            textColor = '#10B981';        
          }
          
          // 3. Conversion Card Logic card
          else if (card.title === "Conversion") {
            brandColor = '#FF7A00';        
            textColor = '#10B981';         
          }

          return (
            <Col key={index}>
              <Card className="border-0 shadow-sm p-3 rounded-4 bg-white">
                <Card.Body className="p-0">
                  
                 
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      className="small fw-medium" 
                      style={{ color: '#8E95A9', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                    >
                      {card.title}
                    </span>
                    
                  
                    <span 
                      className="fw-bold" 
                      style={{ 
                        color: textColor, 
                        fontSize: '13px',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {card.trend}
                    </span>
                  </div>

                
                  <div className="d-flex justify-content-between align-items-end">
                    <h3 
                      className="mb-0 fw-bold fs-3" 
                      style={{ color: '#1C2A53', letterSpacing: '-0.5px', fontFamily: "'Inter', sans-serif" }}
                    >
                      {card.value}
                    </h3>
                    
                    {/* Micro Sparkline Line Chart */}
                    <div style={{ width: '90px', height: '35px' }}>
                      {card.chartData?.length > 0 && (
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={card.chartData} margin={{ top: 2, right: 4, left: 4, bottom: 2 }}>
                            <Line 
                              type="monotone" 
                              dataKey="v" 
                              stroke={brandColor} 
                              strokeWidth={2} 
                              dot={false} 
                            />
                            {/* Color synced Terminal/End Indicator Dot */}
                            <ReferenceDot 
                              x={card.dotX} 
                              y={card.dotY} 
                              r={3.5} 
                              fill={brandColor} 
                              stroke="#FFFFFF" 
                              strokeWidth={2} 
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Minicards;
