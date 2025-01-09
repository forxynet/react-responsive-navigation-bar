const Navbar = () => {

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    console.log(sidebar);
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  return (
    <>
      <nav>
        <ul className="sidebar">
          <li onClick={hideSidebar}><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Product</a></li>
          <li><a href="/#">About</a></li>
          <li><a href="/#">Forum</a></li>
          <li><a href="/#">Login</a></li>
        </ul>
        <ul>
          <li><a href="/#">Dynamicq</a></li>
          <li className="hideOnMobile"><a href="/#">Blog</a></li>
          <li className="hideOnMobile"><a href="/#">Product</a></li>
          <li className="hideOnMobile"><a href="/#">About</a></li>
          <li className="hideOnMobile"><a href="/#">Forum</a></li>
          <li className="hideOnMobile"><a href="/#">Login</a></li>
          <li className="menu-button" onClick={showSidebar}><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
