import OurHeader from './components/Header';
import Cake from './components/Cake';
import { useState } from 'react';
//this code defines a simple app that renders a header, a cake component with a dynamic size, and three buttons to update the cake size.
function App() { //The App component is a functional component that returns JSX elements.
  //   const sizes = [100, 200, 400];
  const [size, setSize] = useState(200); //The useState hook is used to create a state variable size and an setSize function to update it. 

  return (
    <> 
     {/* this is a fragment, its needed to keep html type code in place*/}
      <OurHeader />
      {/* {sizes.map((size) => ( //would render multiple Cake components with different sizes using the sizes array.
        <Cake size={size} />
      ))} */}
      <Cake size={size} /> 
      {/* A single Cake component is rendered with the current size value as a prop. */}
      {'The cake is now size ' + size} 
      <button onClick={() => setSize(100)}>Make me 100</button>
      <button onClick={() => setSize(200)}>Make me 200</button>
      <button onClick={() => setSize(400)}>Make me 400</button>
    </>
  );
}

export default App;
