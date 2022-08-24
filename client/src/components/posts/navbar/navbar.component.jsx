import React from 'react'
import { Component } from 'react';
import { MenuItems} from './menuitems'
import './navbar.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clciked: !this.state.clicked })
    }

render() {
    return(
        
            <nav classname="NavbarItems">
                <h1 className="Navbar-logo">Navigation</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul>
                {MenuItems.map((item, index) => {
                    return (
                      <li key={index}><a className={ MenuItems.cName } href={item.url}>
                            {item.title}
                      </a>
                      </li>  
                    )
                })}
                    
                </ul>
            </nav>
        
    )
}
}
export default Navbar;