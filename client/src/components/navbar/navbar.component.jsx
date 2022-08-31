
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'

import React, { useState, useEffect } from "react";

import { ReactComponent as Logo } from '../../assets/Logo_peng.svg';
import "./navbar.styles.css";

const Navbar = () => {
  const [searchField, setSearchField] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [, setFilteredPosts] = useState(userPosts)

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  //update this line setUserPosts(userPosts);
  .then((userPosts) => userPosts(setUserPosts));
 },[]);

 //some notes on why this isn't working, you need to pass this to Posts component so it can detect the change 
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
    <Fragment>
      <div className="Navbar">
        <div className="leftSide">
          <Link className="logo-container" to="/">
            <Logo className="logo" /> <p className="website-name">ICE PICKS</p>
          </Link>
        </div>
        <div className="middle">
        <input
          onChangeHandler={onSearchChange}
          placeHolder="Search Posts"
          className="posts-search-box"
        />
        </div>
        <div className="rightSide">
          <button className="logIn">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
          </button>
          <button className="signUp">
              <Link className="nav-link" to="/sign-in">
                Sign In
              </Link>
          </button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
