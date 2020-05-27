import React from 'react';

const Header = () => {
  return (
    <header id='header' className='fixed-top header-inner-pages'>
      <div className='container d-flex align-items-center'>
        <h1 className='logo mr-auto'>
          <a href='index.html'>Tempo</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo  */}
        {/* <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

        <nav className='nav-menu d-none d-lg-block'>
          <ul>
            <li className='active'>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Recipes</a>
            </li>
            <li>
              <a href='/'>Cookbook</a>
            </li>
            <li>
              <a href='/'>Subscribe</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
