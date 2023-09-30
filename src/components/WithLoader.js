import React, {useState, useEffect} from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const WithLoader = (WrappedComponent) => {

    const WithLoggerComponent = (props) => {
        let _timer = null;
        const [name, setName] = useState('Janet');
        const [isLoading, setIsLoading] = useState(true);

        // useEffect(() => {
        //     _timer = setTimeout(() => {
        //         setIsLoading(false)
        //     }, 3000)
    
        //     return () => {
        //         // _timer =  null;
        //         clearTimeout(_timer)
        //     }
        // });

        useEffect(() => {
            _timer = setTimeout(() => {
                setIsLoading(false)
            }, 3000)
    
            return () => {
                // _timer =  null;
                clearTimeout(_timer)
            }
        }, []);

        // useEffect(() => {
        //     _timer = setTimeout(() => {
        //         setIsLoading(false)
        //     }, 3000)
    
        //     return () => {
        //         // _timer =  null;
        //         clearTimeout(_timer)
        //     }
        // }, []);
    
        return isLoading ? /*(<h1>Please wait...</h1>)*/
        (<BeatLoader
            size={30}
            color={'#36d7b7'}
        />) : 
                (<WrappedComponent {...props} />);
    };
    return WithLoggerComponent;
} 

export default WithLoader;