import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { 
    increaseCounter, 
    decreaseCounter 
} from '../redux/actions/actions';
import { isEmpty } from 'lodash';

const useCurrentTime = (interval, currentTime) => {

    const [time, setTime] = useState(currentTime);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(currentTime)
        }, interval);

        return () => { 
            clearInterval(intervalID);
        }
    }, []);

    // const update = () => {
    //     setTime(currentTime)
    // }

    return time;
}

const Home = (props) => {

//     const [user, setUser] = useState();
//     const [data, setData] = useState([]);// where to store the returned data
//     const [error, setError] = useState(null);// where to store the coming errors

//     const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
//     const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
//     const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

//     useEffect(() => {
//         function fetchData() {// the function to fetch data from the api

//             axios
//             .all([requestOne, requestTwo, requestThree])
//             .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//                 console.log(firstResponse.data)
//                 console.log(secondResponse.data)
//                 console.log(thirdResponse.data);
//             }))
//             .catch(errors => {
//                 console.error(errors);
//             });

//             // axios.get('https://hn.algolia.com/api/v1/search?query=redux')
//             // .then((response) => {
//             //     // handle success
//             //     // console.log(response);
//             //     // let json = response.json()
//             //     // console.log(response.data);
//             //     setData(response.data.hits)
//             // })
//             // .catch((error) => {
//             //     // handle error
//             //     // console.log(error);
//             //     setError(error)
//             // })
//             // fetch("https://hn.algolia.com/api/v1/search?query=redux")
//             //     .then((res) => {
//             //         return res.json()
//             //     })
//             //     .then(json => setData(json.hits))
//             //     .catch(err => setError(err));
//         }
//         fetchData();
//     }, []);

//     const handleChange = e => {
//         setUser(
//             { 
//                 id: Date.now(), 
//                 // [e.target.name]: e.target.value
//                 name: e.target.value
//             }
//         );
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(user)
//         }).then(res => res.json())
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     };
//     // let _timer = null;
    
//     // setting the state hooks
//     // const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Apple TV");
    const [quantity, setQuantity] = useState(0);

    // useEffect(() =>{
    //     alert('Starting')
    //     return () => {
    //         alert('Closing')
    //     }
    // })
    const getCurrentTime = () => new Date()

    const date = useCurrentTime(1000, getCurrentTime);

//     // useEffect(() => {
//     //     _timer = setInterval(ticking, 1000);

//     //     return () => {
//     //         // setQuantity(0)
//     //         clearInterval(_timer);
//     //     };

//     // }, [])

//     // useEffect(() => {
//     //     if(quantity > 0){
//     //         alert(`Quantity chnaged`)
//     //     }
//     // }, [quantity])

//     // const ticking = () => {
//     //     setCounter((counter) => counter + 1);
//     // }

    // const handleIncrease = () => {
    //     setQuantity((quantity) => quantity + 1)
    // }
    
    // const handleDecrease = () => {
    //     setQuantity((quantity) => quantity - 1)
    // }

    return (
//         <div>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Person Name:
//                         <input type="text" name="name" onChange={handleChange} />
//                     </label>
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//             <ul>
//                 {
//                     !isEmpty(data) && data.map((item, index) => 
//                         <li key={index}>
//                             <a href={item.url}>{item.title}</a>
//                         </li>
//                     )
//                 }
//             </ul>
//             <div>Error: {error}</div>
//             {/* <span>
//                 <h1>{props.name}</h1>
//                 <h1>{props.counter}</h1> */}
                // {/* <h1>Counting: {counter}</h1>
//                 <p>Current Time : {date.toLocaleString("en-NG")}</p> */}
//             {/* </span>
//             <button onClick={props.decreaseCounterAction}>Decrease</button>
//             <button onClick={props.increaseCounterAction}>Increase</button> */}
//         </div>
            <>
                <p>Current Time : {date.toLocaleString("en-NG")}</p>
                <span>
                    <h1>{name}</h1>
                    <h1>{quantity}</h1>
                </span>
                {/* <button onClick={handleDecrease}>Decrease</button>
                <button onClick={handleIncrease}>Increase</button> */}
            </>
    );
};

// class Home extends React.Component {
//     state = {
//         name: "Apple Watch",
//         quantity: 0
//     };

//     handleIncrease = () => {
//         let quantity = this.state.quantity;
//         this.setState({quantity: ++quantity})
//     }
    
//     handleDecrease = () => {
//         let quantity = this.state.quantity;
//         this.setState({quantity: --quantity})
//     }

//     render() {
//         return(
//             <>
//                 <span>
//                     <h1>{this.state.name}</h1>
//                     <h1>{this.state.quantity}</h1>
//                 </span>
//                 <button onClick={this.handleDecrease}>Decrease</button>
//                 <button onClick={this.handleIncrease}>Increase</button>
//             </>
//         )
//     }
// }

const mapStateToProps = state => {
    return {
        name: state.root.first_name,
        counter: state.root.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounterAction: () => dispatch(increaseCounter()),
        decreaseCounterAction: () => dispatch(decreaseCounter())
    }
}

// const mapStateToProps = state => {
//     return {
//         name: state.root.first_name,
//         counter: state.root.counter
//     }
// }


//     return {
//         increaseCounterAction: () => dispatch(increaseCounter()),
//         decreaseCounterAction: () => dispatch(decreaseCounter())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);