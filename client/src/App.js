import { Component } from 'react';

import Posts from './components/posts/posts.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userposts: [],
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

  
  render () {
    const { userposts } = this.state;
    console.log(userposts);
    return (
      <div className="App">
        <h1>Welcome to Our Corner Of the Web</h1>
        <Posts posts={userposts}/>
      </div>
    );
  }
  
}

export default App;
