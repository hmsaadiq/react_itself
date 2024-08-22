function OptionsBar() {
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
      options: ['VANILLA', 'CHOCOLATE','RED VELVET'],
    },
  ];

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#697565',
        height: '100vh',
        position: 'fixed',
        top: 100,
        left: 0,
        zIndex: -1,
      }}
    >
      <h3>Cake Size</h3>
<ul>
  {sideBarContent[0].options.map((option, index) => (
    <li key={index}>
      <input
        type="radio"
        name="cakeSize"
        value={option}
      />
      <label>{option}</label>
    </li>
  ))}
</ul>

<h3>Layers</h3>
<ul>
  {sideBarContent[2].options.map((option, index) => (
    <li key={index}>
      <input
        type="radio"
        name="Layers"
        value={option}
      />
      <label>{option}</label>
    </li>
  ))}
</ul>

    </div>
  );
}

export default OptionsBar;
