import { Component } from 'react';

import './post-item.style.css';

class PostItem extends Component {
    render() {
        // const { clickHandlerTwo } = this.props.clickHandlerTwo;
        const { title, body, id } = this.props.body;
        return (
            <div 
                className='post-container' 
                id={id}
                onClick={this.props.clickHandlerTwo}
            >
                <p id=''>X</p>
                <h2 id={id}>{title}</h2>
                <p id={id}>{body}</p>
            </div>
        )
    }
}

export default PostItem