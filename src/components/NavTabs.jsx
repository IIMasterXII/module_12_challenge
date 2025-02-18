import { Link, useLocation } from 'react-router-dom';

import '../styles/Nav.css';


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="bg-primary">
    <div className="p-5 row">
      <h1 className="col-md-6 col-lg-6 text-light text-pretty text-uppercase">Erich Showalter</h1>
      <ul className="col-md-6 col-lg-6 nav text-pretty">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            <h3>About</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Portfolio</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Contact</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            <h3>Resume</h3>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default NavTabs;

