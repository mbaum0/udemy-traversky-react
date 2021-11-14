import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 style={navbarTitleStyle}>
        <FaGithub style={navbarIconStyle} />
        {title}
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

const navbarTitleStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navbarIconStyle = {
  margin: '0 0.25rem',
};

Navbar.defaultProps = {
  title: 'Generic Title',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
