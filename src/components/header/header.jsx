import './header.css'
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header_logo">
                    <p>nftboss</p>
                </div>
                <div className="header_search">
                    <button>
                        <i className="fa-sharp fa-solid fa-magnifying-glass glass"></i>
                    </button>
                    <input className='header_input' type="text" name="" id="" placeholder="Collection, item or user" />
                </div>
                <nav className="header_nav">
                    <ul>
                        <li className='nav_item'>
                            Explore <i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li className='nav_item'>My Profile</li>
                        <li className='nav_item'>Following</li>
                        <li className='nav_item'>Activity</li>
                        <li className='nav_item'>How it Works</li>
                        <li className='nav_item'>
                            Community <i class="fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>
                </nav>
                <div className="header_user">
                    <i class="fa-solid fa-user-astronaut astronaut"></i>
                    <i class="fa-solid fa-wallet wallet"></i>
                </div>
            </header>
            <div className="underline"></div>
        </>
    );
}

export default Header;