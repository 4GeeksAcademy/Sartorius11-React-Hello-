//1 importar react
import React from "react";

//2 crear el componente
const Navbar = () =>{

//3 crear el Js
    console.log("Soy el Navbar");

//4 retonar un solo elemento html
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{45 * 2}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;

//5 exportar mi componente

//6 y 7 importar y utilizar en otro componente