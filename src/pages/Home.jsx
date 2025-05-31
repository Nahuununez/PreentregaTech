import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos.</p>;

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;