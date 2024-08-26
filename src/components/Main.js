function Main({ number, order }) {
  return (
    <div style={{display:'flex'}}>
      <div>
      <h2>Size</h2>
      <p>{order.size == 0 ? '' : order.size}</p>
      <h2>Shape</h2>
      <p>{order.shape == 0 ? '' : order.shape}</p>
      <h2>Layers</h2>
      <p>{order.layers == 0 ? '' : order.layers}</p>
      <h2>Flavour</h2>
      <p>{order.flavour == 0 ? '' : order.flavour}</p>

      </div>
      <div >
      <button class="button-16" role="button">Proceed</button>
      </div>
    </div>
    
  );
  
}

export default Main;
