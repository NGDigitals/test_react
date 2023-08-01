import React, {Component} from 'react';

const HOC = (CallbackComponent) => {

    // return class extends Component{
    class HOCComponent extends Component{
        _timer = null;
        state = {
            isLoading: true
        };
        componentDidMount() {
            this._timer = setTimeout(() => {
                this.setState({isLoading: false})
            }, 3000)

            // this._timer = setTimeout(function(){ 
            //     this.setState({isLoading: false})
            // }, 3000)
        }
        
        componentWillUnmount() {
            clearTimeout(this._timer);
        }

        render(){
            return this.state.isLoading ? (<h1>Please wait...</h1>) 
            : (<CallbackComponent {...this.props} />);
        }
    } 
    return HOCComponent;
}

export default HOC;