import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import menuOptions from '../data/menuoption'; 

const Sidebar = () => {
  return (
    <>
      {/* DESKTOP  VIEW */}
      <div 
        className="fixed-top min-vh-100 bg-warning d-none d-md-flex flex-column align-items-center py-4" 
        style={{ width: '90px', zIndex: 1060 }}
      >
        {/* Top Logo Frame */}
        <div className="mb-4 text-center select-none mb-5">
          <h2 className="fw-bold text-white tracking-tight m-0" style={{ fontSize: '24px' }}>mart</h2>
        </div>

        {/* Core Links Loop Panel Grid */}
        <Nav className="flex-column gap-3 align-items-center w-100 px-2 border-0 d-flex overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          {menuOptions.map((option, index) => (
            <NavLink
              key={index}
              to={option.path}
              title={option.label}
               
              className={({ isActive }) => 
                `rounded-4 d-flex justify-content-center align-items-center side-link-box border-0 text-decoration-none ${
                  isActive ? 'bg-white shadow-sm active-pill' : 'bg-white bg-opacity-15 non-active-pill'
                }`
              }
            >
              <img 
                src={option.img} 
                alt={option.label} 
                className="sidebar-svg-icon"
                style={{ width: '22px', height: '22px' }}
              />
            </NavLink>
          ))}
        </Nav>
      </div>

      {/* MOBILE RESPONSIVE NAVIGATION BOTTOM OVERLAY TRAIL BAR */}
      <div 
        className="fixed-bottom bg-warning d-flex d-md-none justify-content-around align-items-center py-2 px-1 border-top border-white-10 overflow-x-auto"
        style={{ height: '68px', zIndex: 1060 }}
      >
        {menuOptions.map((option, index) => (
          <NavLink
            key={index}
            to={option.path}
            title={option.label}
            
            className={({ isActive }) => 
              `rounded-4 d-flex justify-content-center align-items-center side-link-box border-0 text-decoration-none ${
                isActive ? 'bg-white  shadow-sm active-pill' : 'bg-white bg-opacity-15 non-active-pill'
              }`
            }
          >
            <img 
              src={option.img} 
              alt={option.label} 
              className="sidebar-svg-icon"
              style={{ width: '22px', height: '22px' }}
            />
          </NavLink>
        ))}
      </div>

       
    </>
  );
};

export default Sidebar;
