import React from 'react'
import ItemDetails from '../ItemDetails'
import { Record } from '../ItemDetails'
import { withSwapiService } from '../HocHelpers'
const StarshipDetails = (props)=>{
        return(
             <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="constInCredits" label="Cost"/>
        </ItemDetails>
         )
}
const mapMethodsToProps = (swapiService)=>{
    return{
        getData:swapiService.getStarship,
        getImageUrl:swapiService.getStarshipImage
    }
}
export default withSwapiService(StarshipDetails,mapMethodsToProps)