import React from 'react';
import { Card, Table } from 'react-bootstrap';
import Orders from '../data/orders';
import { CaretDown, CaretDownFill } from 'react-bootstrap-icons';

const Bestsellers = () => {
  // for only the 5 elements
  const topFiveProducts = Orders.slice(0, 5);

  return (
    <Card
      className="border-0 p-4 bg-white w-100"
      style={{
        borderRadius: '24px',
        boxShadow: '0px 10px 30px rgba(226, 232, 240, 0.4)'
      }}
    >
      {/* Component Header Block */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold text-dark m-0" style={{ fontSize: '18px', letterSpacing: '-0.5px' }}>
          Bestsellers
        </h4>
        <a href="#more" className="text-muted text-decoration-none fw-medium small d-flex align-items-center gap-1">
          More <span><img src='/assets/icons/arrow-right.svg' alt='edit pen' /></span>
        </a>
      </div>

      {/* Table Responsive Wrapper */}
      <div className="table-responsive w-100">
        <Table className="table-borderless align-middle mb-0" style={{ minWidth: '450px' }}>

          {/* Header row with solid light secondary background */}
          <thead className="table-light text-secondary" style={{ fontSize: '13px' }}>
            <tr>
              <th scope="col" className="py-2 fw-bold ps-3 text-secondary" style={{ borderRadius: '8px 0 0 8px' }}>Product</th>
              <th scope="col" className="py-2 fw-bold text-secondary">Price <CaretDownFill className='text-secondary opacity-50' /></th>
              <th scope="col" className="py-2 fw-bold text-secondary">Sold <CaretDownFill className='text-secondary opacity-50' /></th>
              <th scope="col" className="py-2 fw-bold text-end pe-3 text-secondary" style={{ borderRadius: '0 8px 8px 0' }}>Profit <CaretDownFill className='text-secondary opacity-50' /></th>
            </tr>
          </thead>

          <tbody>

            {topFiveProducts.map((prod, index) => (
              <tr key={index} className="border-bottom border-light-subtle" style={{ fontSize: '14px' }}>

                {/* Product details column with avatars */}
                <td className="py-2 ps-3">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="rounded bg-light object-fit-cover"
                      style={{ width: '32px', height: '32px' }}
                    />
                    <span className="text-dark " style={{ letterSpacing: '-0.2px' }}>
                      {prod.name}
                    </span>
                  </div>
                </td>

                <td className="py-2 text-secondary">${prod.price}</td>
                <td className="py-2 text-secondary">{prod.sold}</td>

                <td className="py-2 text-secondary  text-end pe-3">
                  ${prod.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default Bestsellers;
