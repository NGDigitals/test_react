//PostList.js
import React from 'react';
import { connect } from 'react-redux'

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => 
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps, null)(PostList);