import React, {useState, useEffect} from 'react';

function useCurrentTime (interval, currentTime) {
    const [value, setValue] = useState(currentTime);

    useEffect(() => {
        const intervalID = setInterval(update, interval);

        return () => { 
            clearInterval(intervalID);
        }
    }, []);

    const update = () => {
        setValue(currentTime)
    }

    return value;
}

const Welcome = () => {
    let _timer = null;
    const v = 'dhhddh';

    // setting the state hooks
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Apple TV");
    const [quantity, setQuantity] = useState(0);

    const getCurrentTime = () => new Date()

    const date = useCurrentTime(1000, getCurrentTime);

    useEffect(() => {
        _timer = setInterval(ticking, 1000);

        return () => {
            setQuantity(0)
            clearInterval(_timer);
        };

    }, [])

    useEffect(() => {
        if(quantity > 0){
            alert(`Quantity chnaged`)
        }
    }, [quantity])

    const ticking = () => {
        setCounter((counter) => counter + 1);
    }

    const handleIncrease = () => {
        setQuantity((quantity) => quantity + 1)
    }
    
    const handleDecrease = () => {
        setQuantity((quantity) => quantity - 1)
    }

    return (
        <div>
            <span>
                <h1>{name}</h1>
                <h1>{quantity}</h1>
                <h1>Counting: {counter}</h1>
                <p>Current Time : {date.toLocaleString("en-NG")}</p>
            </span>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

// class Welcome extends React.Component {
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

export default Welcome;