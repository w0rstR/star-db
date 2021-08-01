import Raact,{Component} from 'react'

import './PeoplePage.css'
import ItemList from '../ItemList/ItemList'
import ItemDetails from '../ItemDetails'
//import ErrorIndacator from '../errorIndicators'
import SwapiService from '../../services/swapi-service'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state={
        selectedPerson:3,
    }
    
    onPersonSelected=(id)=>{
        this.setState({
          selectedPerson:id
        })
    }

    render(){

        const itemList=(
            <ItemList OnItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                    // renderItem={(item)=>`${item.name} (${item.gender}, ${item.birthYear})`}  
                    >
                    {(i)=>(
                        `${i.name} (${i.birthYear})`
                    )}
            </ItemList>
        )

        const personDetails=(
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        )


        return(
            <Row left={itemList} right={personDetails}/>
        )
    }
}