import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
  );
};

export default Navbar;