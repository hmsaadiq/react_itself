function OptionsBar() {
  const sideBarContent = [
    {
      name: 'Cake Size',
      options: ['BENTO', '6', '8', '10', '12'],
      name: 'Shape',
      options: ['SQUARE', 'CIRCLE', 'HEART'],
      name: 'Layers',
      options: ['1 LAYER', '2 LAYERS', '3 LAYERS'],
      name: 'FLAVOUR',
      options: ['VANILLA', 'CHOCOLATE','RED VELVET']
    },
  ];

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: 'red',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
}

export default OptionsBar;
