import OurHeader from './components/Header';
import Cake from './components/Cake';
import { useState } from 'react';

function App() {
  //   const sizes = [100, 200, 400];
  const [size, setSize] = useState(200);

  return (
    <>
      <OurHeader />
      {/* {sizes.map((size) => (
        <Cake size={size} />
      ))} */}
      <Cake size={size} />
      {'The cake is now size' + size}
      <button onClick={() => setSize(100)}>Make me 100</button>
      <button onClick={() => setSize(200)}>Make me 200</button>
      <button onClick={() => setSize(400)}>Make me 400</button>
    </>
  );
}

export default App;
