import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // let [name, setName] = useState("Ned stark");
    // let [email, setEmail] = useState();
    // we declare the input inside the variable
    let nameRef = useRef();
    let emailRef = useRef();

    const navigate = useNavigate();

    // we are referring to input to change the value
    const submitButton = () => {
        console.log(nameRef.current.value)
        // setName(nameRef.current.value);
        // setEmail(emailRef.current.value);

        let name = nameRef.current.value
        let email = emailRef.current.value
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
                <button type="button" onClick={submitButton}>
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

export default Register;