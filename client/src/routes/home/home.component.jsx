import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Posts from '../../components/posts/posts.component';

const Home = () => {
    const [ userPosts, setPosts ] = useState([]);
  const [ filteredPosts, setFilteredPosts] = useState([]);
  const [ clickedPost, setPost] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) =>setPosts(posts));
  }, []);

  useEffect(() => {
    const getFilteredPosts = userPosts.filter((post) => {
      if (clickedPost) {
        if (post.id.toString() === clickedPost) {
          return post;
        } 
      } else {
        return post;
      }
    });
    setFilteredPosts(getFilteredPosts);
  }, [userPosts, clickedPost]);

  const onPostClick = (event) => {
    const clickedPost = event.target.id;
    setPost(clickedPost);
  }

  return (
    <div>
        <Outlet />
        <Posts posts={filteredPosts} clickHandler={onPostClick} />
    </div>
  )
}

export default Home;