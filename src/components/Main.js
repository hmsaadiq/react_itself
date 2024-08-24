function Main({ number, order }) {
  return (
    <div>
      <h2>Size</h2>
      <p>{order.size}</p>
      <h2>Shape</h2>
      <p>{order.shape == 0 ? '' : order.shape}</p>
      <h2>Layers</h2>
      <p>{order.layers == 0 ? '' : order.layers}</p>
      
      <h2>Flavour</h2>
      <p>{order.flavour == 0 ? '' : order.flavour}</p>
    </div>
  );
}

export default Main;
