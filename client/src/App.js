import { Component } from 'react';

import Navbar from './components/posts/navbar/navbar.component';
import Posts from './components/posts/posts.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userposts: [],
      clickedPost: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) =>
        this.setState(
          () => {
            return {userposts : posts}
          }
        )
      )
  }

  onPostClick = (event) => {
    const clickedPost = event.target.id;
    this.setState(
      () => {
        return {clickedPost}
      }
    )
  }
  // whenever a component updates we can call this and do something, right now I am just tracking previous State variables
  componentDidUpdate(prevProp, prevState) {
    console.log(prevProp, prevState);
  }
  
  render () {
    const { userposts, clickedPost } = this.state;
    const { onPostClick } = this;
    
    //returns all posts, when one post is clicked it filters all other posts out of the array
    const filteredPosts = userposts.filter((post) => {
      if (clickedPost) {
        if (post.id.toString() === clickedPost) {
          return post;
        } 
      } else {
        return post;
      }
    });

    //I used this line below to check what the return type was, it was a strong, so I had to cast post.id.toString()
    //console.log(typeof clickedPost);
    
    return (
      <div className="App">
        <h1>Welcome to Our Corner Of the Web</h1>
        <Navbar />
        <Posts posts={filteredPosts} clickHandler={onPostClick} />
      </div>
    );
  }
  
}

export default App;
