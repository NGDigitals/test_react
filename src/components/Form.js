import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Text, Select} from '../../src/components/Input';
import HOC from './HOC';

const Form = (props) => {
    const { title = "16" } = props
    const styleObject = {textAlign: 'center', color: 'blue'}
    
    const button = <button type='button' 
    onClick={props.onSubmit}>Submit</button>
    return (
        <form>
            <h1 style={styleObject}>{props.title}</h1>
            {props.children}
            <Text/>
            <Select/>

            {button}
        </form>
    );
}
    
// class Form1 extends Component {
// // const Form = () => {
//     render() {
//         const button = <button>Submit</button>
//         return (
//             <form>
//                 <Text/>
//                 <Select/>

//                 {button}
//             </form>
//         );
//     }
// }

// class Form extends React.Component {
//     render(){
//         let input = <input type="text" placeholder="Name" />;

//         let button = <button>Submit</button>;
//         return (
//             <form>
//                 {input}
//                 {button}
//             </form>
//         );
//     }
// }

// export default Form;
// export default HOC({ title: "Google Form", value: 'header title' })(Form)

// Set default props
Form.defaultProps = {
    // title: "GoMyCode Form"
};

Form.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.oneOf([true, false, 0, 1]),
    isSubmitting: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        // PropType.instanceOf(Person)
    ])
};

const HOCForm = HOC(Form);
export default HOCForm;