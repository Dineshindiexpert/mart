// src/data/dashboardData.js

export const Saleforecast= [
  { 
    title: "Revenue", 
    value: "$7,825", 
    trend: "+ 22%", 
    isPositive: true,
    chartData: [{ x: 0, v: 25 }, { x: 1, v: 45 }, { x: 2, v: 35 }, { x: 3, v: 65 }, { x: 4, v: 50 }],
    dotX: 3, 
    dotY: 65  
  },
  { 
    title: "Orders", 
    value: "920", 
    trend: "- 25%", 
    isPositive: false,
    chartData: [{ x: 0, v: 30 }, { x: 1, v: 40 }, { x: 2, v: 60 }, { x: 3, v: 45 }, { x: 4, v: 30 }],
    dotX: 2, 
    dotY: 60
  },
  { 
    title: "Visitors", 
    value: "15.5K", 
    trend: "+ 49%", 
    isPositive: true,
    chartData: [{ x: 0, v: 20 }, { x: 1, v: 35 }, { x: 2, v: 30 }, { x: 3, v: 65 }, { x: 4, v: 55 }],
    dotX: 3,
    dotY: 65
  },
  { 
    title: "Conversion", 
    value: "28%", 
    trend: "+ 1.9%", 
    isPositive: true,
    chartData: [{ x: 0, v: 30 }, { x: 1, v: 35 }, { x: 2, v: 55 }, { x: 3, v: 40 }, { x: 4, v: 48 }],
    dotX: 2,
    dotY: 55
  }
];
