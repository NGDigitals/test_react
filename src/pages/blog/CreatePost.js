//CreatePost.js
import React, { useState } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { 
    addPost 
} from '../../redux/actions/actions';

const CreatePost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        props.addPostAction({
            id: Date.now(),
            title,
            content
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="Title">Title</label>
                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="Content">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Add" />
            </div>


        </form>
    )
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        addPostAction: addPost
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreatePost)