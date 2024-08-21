const title = "customer A"
function Header() {
  return (
    <>
    <h1>Hello, {title.toUpperCase()}</h1>
      <h1>Welcome to CakeOrder.com</h1>
      
      <button type="button" className="primary"> I want to place an order!</button>
    </>
  );
}

export default Header;
