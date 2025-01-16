import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API = "http://localhost/blog/blogback/api/noticias/getNoticias.php"

const Header = () => {
     const [datos, setDatos] = useState([]);
    
        const getDatos = async () => {
            try {
                const response = await fetch(API);
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error(error);
            }
        };
    
        useEffect(() => {
            getDatos();
        }, []);
    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center">
                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename">NotiFest</h1><span></span>
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link to="/inicio" href="#" className="active">Home</Link></li>
                            <li className="dropdown"><Link to='/noticias' href="#"><span>Noticias</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                {datos && datos.map((item) => (
                                    
                                    <li key={item.id}><a href="#">{item.titulo}</a></li>
                                   
))}
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    <div className="header-social-links">
                        <a href="#" className="github"><i className="bi bi-github" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="discord"><i className="bi bi-discord" /></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header