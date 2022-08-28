import React from 'react';
import './navbar.styles.css';

function Navbar () {

        return(
            <div className='Navbar'>
                <div className='leftSide'>
                    </div>
                    <div className='middle'>
                        <input type='search' placeholder='Search App'/>
                    </div>
                    <div className='rightSide'>
                        <button className='logIn'>Log In</button>
                        <button className='signUp'>Sign Up</button>
                    </div>
                </div>


        
            )
    }

export default Navbar;