import React,{Component} from 'react'


import ErrorIndacator from '../errorIndicators'

export default class ErrorBoundry extends Component{

    state={
        hasError:false
    }


    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }


    render(){
        if(this.state.hasError){
            return <ErrorIndacator/>
        }

        return this.props.children
    }



}