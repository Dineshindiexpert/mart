import React, { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { Button } from 'react-bootstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ArrowDown, ChevronBarDown, ChevronDown, ThreeDots } from 'react-bootstrap-icons';
import Maindashboard from './maindashboard';

const Dashboard = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(new Date().setDate(new Date().getDate() - 27)),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <>
      <div className='d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 position-relative gap-3'>

        {/* Left Side: Title */}
        <div>
          <h1 className="fw-medium text-dark mb-0" style={{ fontSize: '24px', color: '#1C2A53' }}>
            Dashboard
          </h1>
        </div>

        
        <div className='d-flex align-items-center justify-content-between justify-content-sm-end gap-2 w-100 w-sm-auto' ref={calendarRef}>

          {/* Date Selector Button Container */}
          <div className="position-relative border-0 flex-grow-1 flex-sm-grow-0">
            <button
              className="btn btn-light bg-white border text-muted btn-sm px-3 d-flex align-items-center justify-content-between justify-content-sm-center gap-2 w-100 w-sm-auto"
              style={{ height: '38px' }}
              type="button"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              <span>
                {`${format(state[0].startDate, "MMM dd")} - ${format(state[0].endDate, "MMM dd")}`}
              </span>
              <span style={{ fontSize: '10px' }}><ChevronDown /></span>
            </button>

            {/* Actual Popup Calendar */}
            {openCalendar && (
             
              <div className="position-absolute end-0 mt-2 shadow border rounded bg-white responsive-cal" style={{ zIndex: 1050 }}>
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  months={1}
                  direction="horizontal"
                  rangeColors={['#FE480B']}
                />
              </div>
            )}
          </div>

          {/* Three Dots Action Button */}
          <Button
            className="border-0 bg-white shadow-sm d-flex align-items-center justify-content-center"
            style={{ width: '38px', height: '38px', minWidth: '38px' }}
          >
            <ThreeDots className="text-secondary" style={{ fontSize: '18px' }} />
          </Button>
        </div>


         
       
      </div>
      <div>
        <Maindashboard />
      </div>
    </>
  );
};

export default Dashboard;
