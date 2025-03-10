import {CDN_LOGO} from "../utils/constants";
const Header = () => {
    return (
      <header className='header'>
        <div className='logo--container'>
          <img
            src={CDN_LOGO}
            alt='logo'
          />
        </div>
        <nav className='nav'>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
            <li>Order</li>
          </ul>
        </nav>
      </header>
    );
  };
  export default Header;