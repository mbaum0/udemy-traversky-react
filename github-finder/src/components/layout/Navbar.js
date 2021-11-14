import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 style={navbarTitleStyle}>
        <FaGithub style={navbarIconStyle} />
        {title}
      </h1>
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
