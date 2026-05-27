import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Row, Col } from 'react-bootstrap';
import { deviceDataLeft, deviceDataRight } from '../data/devicedata';
import { ArrowRight } from 'react-bootstrap-icons';

const RevenueByDeviceApex = () => {
  const combinedData = [...deviceDataLeft, ...deviceDataRight];
  const seriesData = combinedData.map(item => item.value);
  const chartColors = combinedData.map(item => item.color);
  const chartLabels = combinedData.map(item => item.label);

  const chartOptions = {
    chart: {
      type: 'donut',
      fontFamily: "'Inter', sans-serif",
      animations: { enabled: true },
      
      offsetX: 0,
      offsetY: 0
    },
    colors: chartColors,
    labels: chartLabels,
    dataLabels: { enabled: false },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    states: {
      hover: {
        filter: { type: 'lighten', value: 0.05 }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: { type: 'none' } 
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        customScale: 1,
        donut: {
          size: '70%', 
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              color: '#8E8E93',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '32px', 
              fontFamily: "'Inter', sans-serif",
              fontWeight: '700',
              // color: '#1C1C1E',
              offsetY: 12,
              formatter: () => '64%'
            },
            total: {
              show: true,
              label: '',
              formatter: () => '64%'
            }
          }
        }
      }
    },
    legend: { show: false },
    tooltip: {
      theme: 'light',
      y: { formatter: (val) => `$${val.toLocaleString()}` }
    }
  };



  return (
    <Card
      className="border-0 p-4 bg-white w-100 h-100 rounded-4"

    >
      {/* Header Panel */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold text-dark m-0" style={{ fontSize: '18px', letterSpacing: '-0.4px', color: '#1C1C1E' }}>
          Revenue by device
        </h4>
        <a href="/" className=" text-decoration-none text-secondary fw-semibold small d-flex align-items-center gap-1">
          More <span><img src='/assets/icons/arrow-right.svg' alt='edit pen' /></span>
        </a>
      </div>

      {/* Scaled Responsive Canvas Block */}
      <div className="d-flex justify-content-center align-items-center my-4" style={{ minHeight: '260px' }}>
        <div style={{ width: '250px', height: '250px' }}>
          <Chart options={chartOptions} series={seriesData} type="donut" width="100%" height="100%" />
        </div>
      </div>

      {/* Figma Dual Column Grid Section with Normalized Margins */}
      <Row className="g-0 mt-3 pt-3   position-relative">

        {/* Left Section (Desktop & Mobile) */}
        <Col xs={6} className="pe-3 d-flex flex-column gap-2 border-end">
          {deviceDataLeft.map((item, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between w-100">

              {/* Label and Indicator Dot */}
              <div className="d-flex align-items-center gap-2">
                <span
                  className="rounded-circle d-inline-block flex-shrink-0"
                  style={{ width: '6px', height: '6px', backgroundColor: item.color }}
                ></span>
                <span className="text-secondary small">
                  {item.label}
                </span>
              </div>

              {/* Figma Decimals Values & Percentage Layout */}
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-dark small me-5">
                  ${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-muted text-opacity-50 extra-small" style={{ fontSize: '11px' }}>
                  {item.percentage}
                </span>
              </div>

            </div>
          ))}
        </Col>

        {/* Center Vertical Border Divider Line}
        

        {/* Right Section (Tablet & Unknown) */}
        <Col xs={6} className="ps-3 d-flex flex-column gap-2">
          {deviceDataRight.map((item, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between w-100">

              {/* Label and Indicator Dot */}
              <div className="d-flex align-items-center gap-2">
                <span
                  className="rounded-circle d-inline-block flex-shrink-0 "
                  style={{ width: '6px', height: '6px', backgroundColor: item.color }}
                ></span>
                <span className="text-secondary small ">
                  {item.label}
                </span>
              </div>

            
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-dark small me-5">${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-muted text-opacity-50 extra-small" style={{ fontSize: '11px' }}>
                  {item.percentage}
                </span>
              </div>

            </div>
          ))}
        </Col>

      </Row>

    </Card>
  );
};

export default RevenueByDeviceApex;
