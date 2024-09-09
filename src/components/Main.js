function Main({ order, prices }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Size</h2>
        <p>{order.size}</p>
        <span style={{ float: 'right' }}>{prices.size.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
        <h2>Shape</h2>
        <p>{order.shape}</p>
        <span style={{ float: 'right' }}>{prices.shape.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
        <h2>Layers</h2>
        <p>{order.layers}</p>
        <span style={{ float: 'right' }}>{prices.layers.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
        <h2>Flavour</h2>
        <p>{order.flavour}</p>
        <span style={{ float: 'right' }}>{prices.flavour.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
      </div>
      <div>
        <button class="button-16" role="button">Proceed</button>
      </div>
      <div style={{ clear: 'both', textAlign: 'right' }}>
        <h2>Total: {prices.total.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</h2>
      </div>
    </div>
  );
}
export default Main;
