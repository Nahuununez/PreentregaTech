import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando detalle...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '150px' }} />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
};

export default ProductDetail;