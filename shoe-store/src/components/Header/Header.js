import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
    const [visibleSearch, setVisibleSearch] = useState(false)

    const handleSearchClick = () => {
        setVisibleSearch(!visibleSearch)
    }


    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light px-2">
                        <Link className="navbar-brand" to={'/'}>
                            <img src="./img/header-logo.png" alt="Bosa Noga" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/catalog'}>Каталог</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>О магазине</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contacts'}>Контакты</Link>
                            </li>
                            </ul>
                            <div className="header-controls">
                                <div className="header-controls-pics">
                                    <div onClick={handleSearchClick} data-id="search-expander" className="header-controls-pic header-controls-search"/>
                                    <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full">1</div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form" className={`header-controls-search-form form-inline ${!visibleSearch && 'invisible'}`}>
                                    <input className="form-control" placeholder="Поиск" />
                                    <div className="header-controls-pics"></div>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header