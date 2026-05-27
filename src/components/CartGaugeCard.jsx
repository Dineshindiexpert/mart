import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';

const CartGaugeCard = ({ 
  title = "Cart", 
  percentage = 38, 
  mainCount = "720", 
  mainLabel = "Abandoned Cart", 
  subCount = "$5,900", 
  subLabel = "Abandoned Revenue" 
}) => {
  const radialChartSeries = [percentage];
  
 
  const dotRotation = (percentage / 100) * 360;

  const radialChartOptions = {
    chart: {
      type: 'radialBar',
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '90%', 
          background: 'transparent'
        },
        track: {
          background: '#f8fafc', 
          strokeWidth: '100%',
          margin: 0,
        },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            offsetY: 8, 
            fontSize: '26px', 
            fontWeight: '700',
            color: '#1a202c', 
            formatter: function (val) {
              return val + '%';
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          { offset: 0, color: "#6366f1", opacity: 0.3 }, 
          { offset: 50, color: "#4f46e5", opacity: 0.8 }, 
          { offset: 100, color: "#4338ca", opacity: 1 }  
        ]
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  return (
    <Card className="border-0 bg-white p-3 rounded-4" style={{ maxWidth: '300px', fontFamily: 'Inter, sans-serif' }}>
      <Card.Body className="p-2 d-flex flex-column justify-content-between">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-bold" style={{ color: '#1a202c', fontSize: '18px' }}>
            {title}
          </h5>
          <InfoCircle style={{ color: '#cbd5e1', fontSize: '16px', cursor: 'pointer' }} />
        </div>

        {/* Gauge Chart Section */}
        <div className="my-3 d-flex justify-content-center align-items-center position-relative" style={{ height: '160px' }}>
          
          {/* Custom Background Inner Circle Layer */}
          <div 
            style={{
              position: 'absolute',
              width: '110px',  
              height: '110px', 
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0px 8px 20px rgba(148, 163, 184, 0.16), 0px 3px 8px rgba(148, 163, 184, 0.08)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />

          {/* DYNAMIC END INDICATOR DOT LAYER */}
          <div
            style={{
              position: 'absolute',
              width: '136px', // Chart ring ke barabar path diameter
              height: '136px',
              zIndex: 3,
              pointerEvents: 'none',
              transform: `rotate(${dotRotation}deg)`,  
              transition: 'transform 0.5s ease-in-out'  
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',  
                left: 'calc(50% - 5px)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#4f46e5',  
                boxShadow: '0 0 6px rgba(79, 70, 229, 0.6)'  
              }}
            />
          </div>

          {/* Chart Wrapper Container */}
          <div style={{ zIndex: 2, width: '100%' }}>
            <Chart 
              options={radialChartOptions} 
              series={radialChartSeries} 
              type="radialBar" 
              height={170} 
            />
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-5" style={{ fontSize: '13px' }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span style={{ color: '#1e293b', fontWeight: '500' }}>{mainLabel}</span>
            <span style={{ color: '#0f172a', fontWeight: '600' }}>{mainCount}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span style={{ color: '#94a3b8', fontWeight: '400' }}>{subLabel}</span>
            <span style={{ color: '#94a3b8', fontWeight: '400' }}>{subCount}</span>
          </div>
        </div>

      </Card.Body>
    </Card>
  );
};

export default CartGaugeCard;
