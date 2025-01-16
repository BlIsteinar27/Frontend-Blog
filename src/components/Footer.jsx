import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <footer id="footer" className="footer dark-background mb-0">
                    <div className="container footer-top">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4  footer-about">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <span className="sitename">NotiFest</span>
                                </a>
                                <div className="footer-contact pt-3">
                                    <p>San Diego</p>
                                    <p>Carabobo, Venezuela</p>
                                    <p className="mt-3"><strong>Phone:</strong> <span>+58 123-45-67</span></p>
                                    <p><strong>Email:</strong> <span>info@example.com</span></p>
                                </div>
                                <div className="social-links d-flex mt-4">
                                    <a href="#"><i className="bi bi-github" /></a>
                                    <a href="#"><i className="bi bi-linkedin" /></a>
                                    <a href="#"><i className="bi bi-instagram" /></a>
                                    <a href="#"><i className="bi bi-discord" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="container copyright text-center mt-4">
                        <p>© <span>Desarrollador : Jose Roman ||</span> <strong className="px-1 sitename">NotiFest</strong></p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer