import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Home from './pages/Home';
import Register from './pages/Register';
import ActionLink from './components/ActionLink';
import {Text, Select} from '../src/components/Input';
import Children from './components/Children';

function App() {

    let isAllowed = false;
    let firstName = "Will";
    let lastName = "Smith";

    const styleObject = { color: "red", fontSize: 60, textAlign: 'right' }
    let products = [
                    {name: 'Apple Watch', price: 10}, 
                    {name: 'Nike Sneaker', price: 25},
                    {name: 'Samsung TV', price: 210}
                ];

  // const firstName = prompt("type your first name");

    // const Greeting = ({name, age}) => <h1>Greetings to you {name}, age {age}!</h1>;

    const Greeting = (props) => <h1>Greetings to you {props.name}, age {props.age}!</h1>;

    const submitForm = (event) => {
        alert("Form submit")
        console.log('Form' + event)
    }

    function createForm() {
        let input = <input type="text" placeholder="Name" />;

        let button = <button>Submit</button>;

        return (
            <form>
                {input}
                {button}
            </form>
        );
    }

    let content = '';
    if (isAllowed === true) {
        content = createForm()
    }else{
        content = <p>We are closed!</p>
    }

    return (
        <div className="App">
            {/* <Greeting name='Anthizzy' age='9' /> */}
            {/* <Register name='Wallex' submitForm={() => submitForm}/> */}
            {/* <Children>
                <h1>These are the children</h1>
                <Greeting name='Anthizzy' age='9' />
                <Register name="Nathan" submitForm={() => submitForm}/>
            </Children> */}
            <header>
                {/* <img src={logo} className="App-logo" alt="logo" />
                <img src="/logo192.png" className="App-logo" alt="logo" /> */}
                {/* <h1 className='title' 
                style={{ color: "red", fontSize: 60, textAlign: 'right' }}>
                    Welcome {firstName + ' ' + lastName}
                </h1> */}
                
            </header>
            <main>
                {/* <ActionLink/> */}
                
                {/* <Home /> */}

                {/* <Greeting name='Anthizzy' age='9' /> */}

                {/* <Form title={'Google Form'} value={"hdbdhbdhd"} onSubmit={submitForm} isLoading={true}>
                Welcome Home Roscoe
                <h4>No way out</h4>
                <Text/>
                <Select/>
                </Form> */}

                {/*<div> */}  
                {content}
                {/* {createForm()} */}
                {/* { isSunday ? <p>We are closed!</p> : createForm() } */}
                {/* </div> */}

                {/* <div>
                { products.map(item => (
                        <div>
                            <div>Name: {item.name}</div>
                            <div>Price: {item.price}</div>
                        </div>
                    ))
                }
                </div> */}
                
                <p>Welcome {firstName}</p>
                {/* <div>
                <p> Hello {firstName || "User"} </p>

                <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
                
                {!firstName && (
                    <form>
                    <p> Type your name here </p>
                    <input type="text" />
                    </form>
                )}
                </div> */}
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
