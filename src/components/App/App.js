import React,{Component} from 'react';

import Header from '../Header';
// import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList'; 
import Row from '../Row';
// import ItemDetails from '../ItemDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import './App.css';
import ErrorIndacator from '../errorIndicators';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import DummySwapiService from '../../services/DummySwapiService'
import { PlanetList } from '../SWComponents';
import { PeoplePage, PlanetPage, StarshipsPage } from '../Pages';
import{
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    //PlanetList,
    StarshipList
} from '../SWComponents'
export default class App extends Component{

  swapiService=new SwapiService();

  state={
    hasError:false,
    swapiService: new SwapiService()
  }
  componentDidCatch(){
    this.setState({hasError:true})
  }
  
  onServiceChange=()=>{
    this.setState(({swapiService})=>{
      const Service = swapiService instanceof SwapiService ?
                    DummySwapiService : SwapiService
      console.log('switched to', Service.name)

      return{
        swapiService: new Service()
      }
    })
  }


  render(){

    if(this.state.hasError){
      return <ErrorIndacator/>
    }

    //const {getPerson,getStarship,getPersonImage,getStarshipImage}=this.swapiService

    // const personDetaild=(
    //   <ItemDetails 
    //   itemId={11} 
    //   getData={getPerson} 
    //   getImageUrl={getPersonImage}
    //   >
    //     <Record field="gender" label="Gender"/>
    //     <Record field="eyeColor" label="Eye Color"/>

    //   </ItemDetails>
    // )
    // const starsipDetaild=(
    //   <ItemDetails 
    //   itemId={5} 
    //   getData={getStarship}
    //   getImageUrl={getStarshipImage}
    //   >
    //     <Record field="model" label="Model"/>
    //     <Record field="length" label="Length"/>
    //     <Record field="constInCredits" label="Cost"/>
    //   </ItemDetails>
    // )
    return(
    <div>
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet/>

          <PeoplePage/>
          <PlanetPage/>
          <StarshipsPage/>
          {/* <Row 
          left={<PersonList/>}
          right={<PersonDetails itemId={11}/>}
          /> */}
          {/* <Row 
          left={<PlanetList/>}
          right={<PlanetDetails itemId={5}/>}
          />
          <Row 
          left={<StarshipList/>}
          right={<StarshipDetails itemId={9}/>}
          /> */}
          {/* <PersonDetails itemId={11}/>
          <PlanetDetails itemId={5}/>
          <StarshipDetails itemId={9}/>

          <PersonList/>
          <StarshipList/> */}
          {/* <PersonList>
            {({name})=><span>{name}</span>}
          </PersonList> */}

          {/* <ItemList 
          getData={this.swapiService.getAllPeople}
          onItemSelected={()=>{}}>
            {({name})=><span>{name}</span>}
          </ItemList> */}
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    </div>
    )
  }
};

