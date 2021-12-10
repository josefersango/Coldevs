import React from 'react';
import {Link,NavLink} from 'react-router-dom'

const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link "  to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuarios</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink  exact to="/usuarios" className="nav-link dropdown-toggle"  >Listar</NavLink></li>
                        </ul>
                    </li>
                        <li className="nav-item dropdown">
                        <NavLink  to="/" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Proyectos</NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Listar</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink  to="/" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inscripciones</NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Listar</a></li>
                            
                        </ul>
                    </li>
                    
                </ul>
                <div className="d-flex">
                      
                    <a className="nav-link disabled">Disabled</a>
            
                </div>
                </div>
            </div>
        </nav>
    );


}
export default Navbar;