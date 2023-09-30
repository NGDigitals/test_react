import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../redux/features/userSlice';

const Account = () => {
    const first_name = useSelector((state) => state.user.user.first_name)
    const last_name = useSelector((state) => state.user.user.last_name)
    const age = useSelector((state) => state.user.user.age)

    const dispatch = useDispatch()

    useEffect(() =>{
        let data = {
            first_name: 'Wale',
            last_name: 'Thompson',
            age: 33
        }
        dispatch(updateUser(data))
    }, [])

    return (
        <div>
            <h1>Welcome to Account Page</h1>
            <h1>First Name: {first_name}</h1>
            <h1>Last Name: {last_name}</h1>
            <h1>Name: {age}</h1>
        </div>
    );
};

export default Account;

// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../features/userSlice";

// const store = configureStore({
//     reducer: {
//         user: userSlice,
//     },
// });

// export default store;

// import './App.css';
// import Home from './pages/Home';
// import Account from './pages/user/Account';
// import Profile from './pages/user/Profile';
// import Register from './pages/Register';
// import {Routes, Route, Link } from "react-router-dom";

// function App() {

//     return (
//         <div className="App">
//             <header>
//                 <nav className="navbar navbar-light">
//                     <ul className="nav navbar-nav">
//                         {/*  Link components are used for linking to other views */}
//                         <li>
//                             {" "}
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/register">Register</Link>
//                         </li>
//                         <li>
//                             <Link to="/user">Account</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
            
//             <main>
//                 {/*  Route components are rendered if the path prop matches the current URL  */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                    <Route path='/profile/:id' element={<Profile />}/>
                </Routes>
//             </main>

//             <footer>
//                 <h3>Copyright GoMyCode</h3>
//             </footer>
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// /* import BrowserRouter from 'react-router-dom' */
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );


// reportWebVitals();

// import React, {useState, useEffect} from 'react';

// const useCurrentTime = (interval, currentTime) => {

//     const [time, setTime] = useState(currentTime);

//     useEffect(() => {
//         const intervalID = setInterval(() => {
//             setTime(currentTime)
//         }, interval);

//         return () => { 
//             clearInterval(intervalID);
//         }
//     }, []);

//     return time;
// }

// const Home = () => {

//     const getCurrentTime = () => new Date()

//     const date = useCurrentTime(1000, getCurrentTime);

//     return (
//             <>
//                 <p>Current Time : {date.toLocaleString("en-NG")}</p>
//             </>
//     );
// };

// export default Home;

// import React, {useState, useRef} from 'react';

// const Register = () => {
//     let nameRef = useRef();
//     let emailRef = useRef();

//     // we are referring to input to change the value
//     const submitButton = () => {
//         let name = nameRef.current.value
//         let email = emailRef.current.value
//         console.log('Name', name, 'Email', email)
//     };

//     return (
//         <div className="App">
//             <h1>Who is your favorite Games of throne character</h1>
    
//             <div>
//                 <input
//                     placehoder="enter your preferred GOT character..."
//                     ref={nameRef}
//                     type="text"
//                 />
//                 <input
//                     placehoder="Email address..."
//                     ref={emailRef}
//                     type="text"
//                 />
//                 <button type="button" onClick={() => submitButton()}>
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Register;

// import React, {useState} from 'react';

// const Home = () => {
//     const [name, setName] = useState("Apple TV");
//     const [quantity, setQuantity] = useState(0);

//     const handleIncrease = () => {
//         setQuantity((qty) => {
//             return qty + 1
//         })
//     }
    
//     const handleDecrease = () => {
//         setQuantity((quantity) => quantity - 1)
//     }

//     return (
//         <>
//             <span>
//                 <h1>{name}</h1>
//                 <h1>{quantity}</h1>
//             </span>
//             <button onClick={handleDecrease}>Decrease</button>
//             <button onClick={handleIncrease}>Increase</button>
//         </>
//     );
// };

// export default Home;

// // class Home extends React.Component {
// //     state = {
// //         name: "Apple Watch",
// //         quantity: 0
// //     };
    
// //     handleIncrease = () => {
// //         let quantity = this.state.quantity;
// //         this.setState({quantity: ++quantity})
// //     }
    
// //     handleDecrease = () => {
// //         let quantity = this.state.quantity;
// //         this.setState({quantity: --quantity})
// //     }

// //     render() {
// //         return(
// //             <>
// //                 <span>
// //                     <h1>{this.state.name}</h1>
// //                     <h1>{this.state.quantity}</h1>
// //                 </span>
// //                 <button onClick={this.handleDecrease}>Decrease</button>
// //                 <button onClick={this.handleIncrease}>Increase</button>
// //             </>
// //         )
// //     }
// // }

// // export default Home;