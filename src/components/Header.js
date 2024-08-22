function Header() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0px 30px',
        backgroundColor: '#697565',
      }}
    >
      <img src='/images/cake.webp' width={100} />
      <div
        style={{
          flexGrow: 1,
          // border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h2>Hello Sadiq, Welcome to CakeOrder.com</h2>
      </div>
    </div>
  );
}

export default Header;
