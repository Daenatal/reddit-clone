import React from 'react';
import { Component } from 'react';
import { MenuItems} from './menuitems';
import './navbar.styles.css';

class Navbar extends Component {
    // state = { clicked: false}

    // handleClick = () => {
    //     this.setState({ clciked: !this.state.clicked })
    // }

    render() {
        return(
            <div className="NavbarItems">
                <h1 className="Navbar-logo">Navigation</h1>
                {/* <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div> */}
                <ul className="Navbar-items">
                {MenuItems.map((item, index) => {
                    return (
                      <li className='Navbar-links' key={index}><a  href={item.url}>
                            {item.title}
                      </a>
                      </li>  
                    )
                })}
                    
                </ul>
            </div>
        
            )
    }
}
export default Navbar;