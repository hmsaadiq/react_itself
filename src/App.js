import { useState } from 'react';
import OurHeader from './components/Header';
import Main from './components/Main';
import OptionsBar from './components/OptionsBar';

function App() {
  const sideBarContent = [
    {
      name: 'Cake Size',
      options: ['BENTO', '6', '8', '10', '12'],
      prices: [1000, 2000, 3000, 4000, 5000], // prices for each option
    },
    {
      name: 'Shape',
      options: ['SQUARE', 'CIRCLE', 'HEART'],
      prices: [500, 700, 1000], // prices for each option
    },
    {
      name: 'Layers',
      options: ['1 LAYER', '2 LAYERS', '3 LAYERS'],
      prices: [1000, 2000, 3000], // prices for each option
    },
    {
      name: 'FLAVOUR',
      options: ['VANILLA', 'CHOCOLATE', 'RED VELVET'],
      prices: [500, 700, 1000], // prices for each option
    },
  ];

  const [order, setOrder] = useState({
    flavour: '',
    size: 0,
    shape: '',
    layers: 0,
  });

  const [prices, setPrices] = useState({
    size: 0,
    shape: 0,
    layers: 0,
    flavour: 0,
    total: 0,
  });

  const handleOptionChange = (name, value, price) => {
    setOrder({ ...order, [name]: value });
    setPrices({ ...prices, [name]: price, total: calculateTotal(prices, price, name) });
  };

  const calculateTotal = (prices, price, name) => {
    let total = prices.total;
    if (name === 'size') {
      total -= prices.size;
    } else if (name === 'shape') {
      total -= prices.shape;
    } else if (name === 'layers') {
      total -= prices.layers;
    } else if (name === 'flavour') {
      total -= prices.flavour;
    }
    total += price;
    return total;
  };
<OptionsBar
  order={order}
  setOrder={setOrder}
  sideBarContent={sideBarContent}
  handleOptionChange={handleOptionChange}
/>
  return (
    <>
      <OurHeader />
      <div style={{ display: 'flex' }}>
        <OptionsBar
          order={order}
          setOrder={setOrder}
          sideBarContent={sideBarContent}
          handleOptionChange={handleOptionChange}
        />
        <Main order={order} prices={prices} />

      </div>

    </>
  );
}

export default App;