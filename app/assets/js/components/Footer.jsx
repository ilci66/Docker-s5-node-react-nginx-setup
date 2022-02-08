import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="page-footer ">
            <div className="container center-align ">
                <Link to="https://github.com/ilci66"><span className="grey-text text-lighten-4" >Ilker AKBIYIK</span></Link>
            </div>

        </footer>
    )
}

export default Footer