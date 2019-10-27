import React from 'react';
import {Link} from "react-router-dom";

 const Menu = () => {

    return(
            <nav className="navbar navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand" href="#">Test task</Link>
                    <Link to={'/login'} className="btn btn-outline-success my-2 my-sm-0">
                        Sign In
                    </Link>

            </nav>
        )
}

export default Menu;