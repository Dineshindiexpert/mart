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

      <Row className="g-0 mt-3 pt-3">

        {/* LEFT COLUMN */}
        <Col xs={12} md={6} className="pe-md-3 border-md-end">

          {deviceDataLeft.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-3 flex-nowrap"
            >

              {/* LEFT LABEL */}
              <div
                className="d-flex align-items-center gap-2"
                style={{ width: '35%' }}
              >
                <span
                  className="rounded-circle flex-shrink-0"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: item.color
                  }}
                />

                <span
                  className="text-secondary small text-truncate"
                >
                  {item.label}
                </span>
              </div>

              {/* CENTER VALUE */}
              <div
                className="text-center"
                style={{ width: '40%' }}
              >
                <span className="fw-bold text-dark small">
                  $
                  {item.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </span>
              </div>

              {/* RIGHT PERCENTAGE */}
              <div
                className="text-end"
                style={{ width: '25%' }}
              >
                <span
                  className="text-muted"
                  style={{ fontSize: '11px' }}
                >
                  {item.percentage}
                </span>
              </div>

            </div>
          ))}

        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} md={6} className="ps-md-3">

          {deviceDataRight.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-3 flex-nowrap"
            >

              {/* LEFT LABEL */}
              <div
                className="d-flex align-items-center gap-2"
                style={{ width: '35%' }}
              >
                <span
                  className="rounded-circle flex-shrink-0"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: item.color
                  }}
                />

                <span
                  className="text-secondary small text-truncate"
                >
                  {item.label}
                </span>
              </div>

              {/* CENTER VALUE */}
              <div
                className="text-center"
                style={{ width: '40%' }}
              >
                <span className="fw-bold text-dark small">
                  $
                  {item.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </span>
              </div>

              {/* RIGHT PERCENTAGE */}
              <div
                className="text-end"
                style={{ width: '25%' }}
              >
                <span
                  className="text-muted"
                  style={{ fontSize: '11px' }}
                >
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
