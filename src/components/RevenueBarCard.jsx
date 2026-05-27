import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import Revenuedata from '../data/Revenuedata';

const RevenueBarCard = ({
    title = "Revenue",
    actionText = "Advanced Report →",
    actionLink = "#report",
    categories = ['20', '22', '24', '26', '28', '30', '02', '04', '06', '08', '10', '12', '14', '16'],
    data = Revenuedata
}) => {

    const barChartSeries = [{
        name: 'Revenue',
        data: data
    }];

    const barChartOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
            events: {
               
                dataPointSelection: function (event, chartContext, config) {
                    const seriesIndex = config.seriesIndex;
                    const dataPointIndex = config.dataPointIndex;
                    
                   
                    let newColors = chartContext.w.config.series[seriesIndex].data.map(() => '#FF7A00');
                    
                   
                    newColors[dataPointIndex] = '#DC3545';
                    
                    
                    chartContext.updateOptions({
                        fill: {
                            colors: newColors
                        },
                        plotOptions: {
                            bar: {
                                colors: {
                                    backgroundBarColors: [],
                                    backgroundBarOpacity: 1,
                                    backgroundBarRadius: 0,
                                }
                            }
                        }
                    }, false, false);
                }
            }
        },
        states: {
            hover: {
                filter: { type: 'lighten', value: 0.1 }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: { type: 'none' }
            }
        },
        fill: {
            colors: ['#FF7A00'] 
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '28%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: { enabled: false },
        grid: {
            borderColor: '#F3F4F6',
            strokeDashArray: 4
        },
        xaxis: {
            categories: categories,
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: { colors: '#9CA3AF', fontSize: '12px' }
            }
        },
        yaxis: {
            labels: {
                formatter: (value) => value === 0 ? '$0' : `$${value}`,
                style: { colors: '#9CA3AF', fontSize: '12px' }
            }
        },
        tooltip: {
            theme: 'light',
            y: { formatter: (val) => `$${val}` }
        }
    };

    return (
        <Card className="border-0 shadow-sm p-3 rounded-4 h-100">
            <Card.Body className="p-2">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0 fw-bold text-dark fs-5">{title}</h5>
                    <a href={actionLink} className="text-muted small text-decoration-none fw-medium">
                        {actionText}
                    </a>
                </div>
                <Chart options={barChartOptions} series={barChartSeries} type="bar" height={280} />
            </Card.Body>
        </Card>
    );
};

export default RevenueBarCard;
