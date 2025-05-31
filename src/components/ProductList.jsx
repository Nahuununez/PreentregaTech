import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h4>{product.title}</h4>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          <br />
          <Link to={`/product/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;