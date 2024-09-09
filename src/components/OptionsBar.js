import { useState } from 'react';

function OptionsBar({ sideBarContent, order, setOrder, handleOptionChange }) {
  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#697565',
        height: '100vh',
        // position: 'fixed',
        // top: 100,
        left: 0,
        // zIndex: -1,
      }}
    >
      <div style={{ overFlowY: 'scroll' }}>
        {sideBarContent.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {item.options.map((option, index) => (
                <li key={index}>
                  <input
                    style={{ marginRight: '8px' }}
                    type='radio'
                    name={item.name}
                    value={option}
                    checked={order[item.name] === option}
                    onChange={() => handleOptionChange(item.name, option, item.prices[index])}
                  />
                  <label>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OptionsBar;
