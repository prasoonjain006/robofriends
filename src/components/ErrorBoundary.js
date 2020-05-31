import React , { Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError:false
        }
    }

    render(){
        if(this.state.hasError)
            return <h1>ooops, looking bad </h1>
        return this.props.children;
    }
}
export default ErrorBoundary;