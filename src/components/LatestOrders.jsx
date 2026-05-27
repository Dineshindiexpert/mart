import React from 'react';
import { Card, Table } from 'react-bootstrap';
import Orders from '../data/orders';
import { ArrowRight, CaretDownFill, ChevronDown, ThreeDots, Trash } from 'react-bootstrap-icons';


const getStatusBadgeClasses = (status) => {
  switch (status) {
    case 'Completed': return ' text-success';
    case 'Shipping': return ' text-primary';
    case 'Pending': return ' text-warning';
    case 'Refund': return ' text-danger';
    default: return ' text-secondary';
  }
};

const LatestOrders = () => {
  return (
    <Card 
      className="border-0 p-4 bg-white w-100" 
      style={{ 
        borderRadius: '24px', 
        boxShadow: '0px 10px 30px rgba(226, 232, 240, 0.4)' 
      }}
    >
      {/* Component Header Metadata Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold text-dark m-0" style={{ fontSize: '18px', letterSpacing: '-0.5px' }}>
          Latest Orders
        </h4>
        <a href="#orders" className="text-muted text-decoration-none fw-semibold small d-flex align-items-center gap-1">
          More <span><img src='/assets/icons/arrow-right.svg' alt='edit pen'/></span> 
        </a>
      </div>

      {/* Responsive Wrapper Container */}
      <div className="table-responsive w-100">
        <Table className="table-borderless align-middle mb-0" style={{ minWidth: '800px' }}>
          
          {/* 1. FIXED: Added 'table-light' for exact solid gray horizontal subheader background bar */}
          <thead className="table-light text-secondary " style={{ fontSize: '13px' }}>
            <tr >
              <th scope="col" className="py-3 text-secondary ps-3">Products<CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary">QTY <CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary">Date <CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary">Revenue <CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary">Net Profit <CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary">Status <CaretDownFill className='text-secondary opacity-50'/></th>
              <th scope="col" className="py-3 text-secondary text-end pe-4"  >Actions</th>
            </tr>
          </thead>

          <tbody>
            {Orders.map((order, index) => (
              <tr key={index} className="border-bottom border-light-subtle" style={{ fontSize: '14px' }}>
                
                {/* Product Image Avatar and Label Name */}
                <td className="py-3 ps-3">
                  <div className="d-flex align-items-center gap-3">
                    {order.img && (
                      <div 
                        className="bg-light rounded-3 d-flex justify-content-center align-items-center overflow-hidden flex-shrink-0"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <img 
                          src={order.img} 
                          alt={order.name} 
                          className="w-100 h-100 object-fit-cover" 
                        />
                      </div>
                    )}
                    <span className="text-dark fw-semibold" style={{ letterSpacing: '-0.2px' }}>{order.name}</span>
                  </div>
                </td>

                {/* Quantity */}
                <td className="py-3 text-secondary">x{order.quantity}</td>

                {/* Date */}
                <td className="py-3 text-secondary" style={{ fontSize: '13px' }}>{order.date}</td>

                {/* Revenue */}
                <td className="py-3 text-dark fw-medium">
                  {order.revenue.toString().includes('$') ? order.revenue : `$${order.revenue}`}
                </td>

                {/* Net Profit */}
                <td className="py-3 text-secondary">
                  {order.net_profit.toString().includes('$') ? order.net_profit : `$${order.net_profit}`}
                </td>

                {/* 2. FIXED: Pure Bootstrap pill style text metrics soft background color badges */}
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-pill small fw-bold text-xs ${getStatusBadgeClasses(order.status)}`} style={{ fontSize: '12px', display: 'inline-block' }}>
                    {order.status}
                  </span>
                </td>

                {/* Action Icons Panel Grid Layer */}
                <td className="py-3 text-end pe-3">
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <button className="btn btn-link p-0 text-muted border-0 shadow-none" title="Edit">
                      <img src='/assets/icons/editpen.svg' alt='edit pen'/>
                    </button>
                    <button className="btn btn-link p-0 text-muted border-0 shadow-none" title="Delete">
                     <img src='/assets/icons/trash.svg' alt='trash'/>
                    </button>
                    <button className="btn btn-link p-0 text-muted border-0 shadow-none" title="More">
                      <ThreeDots className='text-secondary'/>
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default LatestOrders;
 