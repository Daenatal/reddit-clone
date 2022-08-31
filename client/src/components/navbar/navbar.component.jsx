
import React, { useState, useEffect } from "react";
import "./navbar.styles.css";

const Navbar = () => {
  const [searchField, setSearchField] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [, setFilteredPosts] = useState(userPosts)

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((userPosts) => userPosts(setUserPosts));
 },[]);

useEffect(() => {
    const newFilteredPosts = userPosts.filter((posts) => {
        return posts.title.body.toLocaleLowerCase().includes(searchField)
    });
    setFilteredPosts(newFilteredPosts)
},[userPosts, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="Navbar">
      <div className="leftSide"></div>
      <div className="middle">
      <input
        onChangeHandler={onSearchChange}
        placeHolder="Search Posts"
        className="posts-search-box"
      />
      </div>
      <div className="rightSide">
        <button className="logIn">Log In</button>
        <button className="signUp">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
=======
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
