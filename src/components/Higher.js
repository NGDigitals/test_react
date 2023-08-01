import React, {useState, useEffect} from 'react';

const Higher = (props) => (WrappedComponent) => {
    let _timer = null;

    // useEffect(() => {
    //     this._timer = setTimeout(() => {
    //         this.setState({isLoading: false})
    //     }, 3000)

    //     return () => {
    //         this._timer =  null;
    //     }
    // }, [])

    return //isLoading ? (<h1>Please wait...</h1>) 
        /*:*/ (<WrappedComponent />);
} 

export default Higher;