import { useState } from 'react';
import OurHeader from './components/Header';
import Main from './components/Main';
import OptionsBar from './components/OptionsBar';

function App() {
  const sideBarContent = [
    {
      name: 'Cake Size',
      options: ['BENTO', '6', '8', '10', '12'],
    },
    {
      name: 'Shape',
      options: ['SQUARE', 'CIRCLE', 'HEART'],
    },
    {
      name: 'Layers',
      options: ['1 LAYER', '2 LAYERS', '3 LAYERS'],
    },
    {
      name: 'FLAVOUR',
      options: ['VANILLA', 'CHOCOLATE', 'RED VELVET'],
    },
  ];

  const [order, setOrder] = useState({
    flavour: '',
    size: 0,
    shape: '',
    layers: 0,
  });

  return (
    <>
      <OurHeader />
      <div style={{ display: 'flex' }}>
        <OptionsBar
          order={order}
          setOrder={setOrder}
          sideBarContent={sideBarContent}
        />
        <Main order={order} />
      </div>
    </>
  );
}

export default App;
