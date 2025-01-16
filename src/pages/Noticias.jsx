import { useEffect, useState } from "react";

const API = "http://localhost/blog/blogback/api/noticias/getNoticias.php"

const Noticias = () => {
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

            {/* Page Title */}
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Blog</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>{/* End Page Title */}

            <div>
                {/* Blog Posts Section */}
                <section id="blog-posts" className="blog-posts section">
                    <div className="container">
                        <div className="row gy-4">
                            {datos && datos.map((item) => (
                                <div key={item.id} className="col-lg-4">
                                    <article className="position-relative h-100">
                                        <div className="post-img position-relative overflow-hidden">
                                            <img src={item.foto} className="img-fluid" alt={item.titulo} />
                                            <span className="post-date">{item.fecha_publicacion}</span>
                                        </div>
                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">{item.titulo}</h3>
                                            <div className="meta d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-person" /> <span className="ps-2">John Doe</span>
                                                </div>
                                                <span className="px-3 text-black-50">/</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-folder2" /> <span className="ps-2">Politics</span>
                                                </div>
                                            </div>
                                            <p>
                                                {item.descripcion}
                                            </p>
                                            <hr />
                                            <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>{/* /Blog Posts Section */}

            </div>

        </>
    )
}

export default Noticias