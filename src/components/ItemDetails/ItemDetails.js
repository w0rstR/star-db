import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './ItemDetails.css';

const Record = ({item,field,label})=>{
  return(
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export{
  Record
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService
  
  state={
    item:null,
    loading:false,
    image:null
  }

  componentDidMount(){
    this.updateItem()
  }


  updateItem(){
    const {itemId,getData,getImageUrl}=this.props
    if(!itemId){
      return
    }

      
      getData(itemId)
      .then((item)=>{
          this.setState({
            item,
            loading:false,
            image:getImageUrl(item)
          })
      })
  }

  componentDidUpdate(prevProps){
    if(this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl){
      this.updateItem();
      this.setState({
        loading:true
      })
    }
  }
  render() {

    const {item}=this.state
    const {loading} = this.state
    // if(!this.state.item){
    //   return <span>Select a person from a list</span>
    // }

    if(!this.state.item){
      return <Spinner/>
    }

    if(loading){
      return <Spinner/>
    }




    const {name}=item
    return (
      <div className="person-details card">
        <img className="person-image"
          src={this.state.image} alt="item"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children,(child)=>{
                return React.cloneElement(child,{item })
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}