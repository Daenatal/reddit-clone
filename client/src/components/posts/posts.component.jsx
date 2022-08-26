import { Component } from 'react'

import PostItem from '../post-item/post-item.component';
import './posts.styles.css';

class Posts extends Component {

    render() {
        const { clickHandler} = this.props;
        return (
            
            <div className='post-list'>
                {this.props.posts.map((post) => {
                    return (
                        <PostItem key={post.id} body={post} clickHandlerTwo={clickHandler}/>
                    )
                })}
            </div>
        )
    }

}

export default Posts;