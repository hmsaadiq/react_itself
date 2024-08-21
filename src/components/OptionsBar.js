function OptionsBar() {
  const sideBarContent = [
    {
      name: 'Cake Size',
      options: ['BENTO', '6'],
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
