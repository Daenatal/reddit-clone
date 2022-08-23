import { Component } from 'react'

import './posts.styles.css';

class Posts extends Component {

    render() {
        return (
            <div className='post-list'>
                {this.props.posts.map((post) => {
                    return (
                        <div className='post-container'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Posts;