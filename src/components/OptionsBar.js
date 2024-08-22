import { useState } from 'react';

function OptionsBar({ sideBarContent, order, setOrder }) {
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
      {/* <h3>Cake Size</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {sideBarContent[0].options.map((option, index) => (
          <li key={index}>
            <input
              style={{ marginRight: '8px' }}
              type='radio'
              name='cakeSize'
              value={option}
            />
            <label>{option}</label>
          </li>
        ))}
      </ul> */}

      {/* <h3>Layers</h3>
      <ul>
        {sideBarContent[2].options.map((option, index) => (
          <li key={index}>
            <input type='radio' name='Layers' value={option} />
            <label>{option}</label>
          </li>
        ))}
      </ul> */}

      <div style={{ overFlowY: 'scroll' }}>
        {sideBarContent.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {sideBarContent[index].options.map((option, index) => (
                <li key={index}>
                  <input
                    style={{ marginRight: '8px' }}
                    type='radio'
                    name={item.name}
                    value={option}
                    onChange={(e) => {
                      item.name == 'Cake Size' &&
                        setOrder({ ...order, size: e.target.value });
                      item.name == 'Layers' &&
                        setOrder({ ...order, layers: e.target.value });
                    }}
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
