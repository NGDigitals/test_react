import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import HOC from '../components/HOC';
import WithLoader from '../components/WithLoader';
import PropTypes from "prop-types";

const Register = (props/*{ name= "My name" }*/) => {
    let [name, setName] = useState("Ned stark");
    let [email, setEmail] = useState();
    // we declare the input inside the variable
    let nameRef = useRef();
    let emailRef = useRef();

    const navigate = useNavigate();

    // we are referring to input to change the value
    const submitButton = () => {
        let name = nameRef.current.value
        let email = emailRef.current.value
        console.log('Name', name, 'Email', email)
    };

    return (
        <div className="App">
            {/* <p>{name}</p> */}
            <h1>Who is your favorite Games of throne character</h1>
    
            <div>
                <input
                    placehoder="enter your preferred GOT character..."
                    ref={nameRef}
                    type="text"
                />
                <input
                    placehoder="Email address..."
                    ref={emailRef}
                    type="text"
                />
                <button type="button" onClick={() => submitButton() /*props.submitForm()*/}>
                    Submit
                </button>
            </div>
            {/*
            When we click this button the navigate function will change the url to
            `/profile` and render the profile component
            */}
            <button onClick={() => navigate('/profile/10')}>Go To Home </button>
        </div>
    );
}

Register.defaultProps = {
    name: 'No name'
}

Register.propTypes = {
    name: PropTypes.string.isRequired,
    submitForm: PropTypes.func.isRequired,
    option: PropTypes.oneOf([true, false]),
    another: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        // PropTypes.instanceOf(Person)
    ])
};

export default WithLoader(Register);