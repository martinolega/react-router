import { NavLink, Link } from "react-router-dom";

function Header() {
    const links = [
        {
            name: "Homepage",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Products",
            path: "/products"
        },
    ];

    const logo = "https://fakestoreapi.com/icons/logo.png";

    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex justify-content-center container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="height-50" src={logo} alt="Logo" />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            {links.map((link, index) => {
                                return (
                                    <NavLink
                                        key={index}
                                        className="nav-link"
                                        aria-current="page"
                                        to={link.path}
                                    >
                                        {link.name}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;