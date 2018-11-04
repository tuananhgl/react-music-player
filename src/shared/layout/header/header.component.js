import React, { Component } from 'react';
import './header.component.scss';
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMinus, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="App-header" >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className='col-12 col-sm-4 text-left header-col'>
                        <span><FontAwesomeIcon icon={ faHeadphones } className='fa-lg' /></span>
                        <span className='title-menu'>Menu</span>
                    </div>
                    <div className='col-12 col-sm-4 text-center header-col'>
                        <h3 className='title-app'>React Music Player</h3>
                    </div>
                    <div className='col-12 col-sm-4 text-right actions header-col'>
                        <span><FontAwesomeIcon icon={ faMinus } className='fa-md' /></span>
                        <span><FontAwesomeIcon icon={ faSquare } className='fa-md' /></span>
                        <span><FontAwesomeIcon icon={ faTimes } className='fa-md' /></span>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;