import React from "react"
import ItemList from "../ItemList/ItemList"
import { withData,withSwapiService } from "../HocHelpers"


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
      return (
        <Wrapped {...props}>
          {fn}
        </Wrapped>
      )
    };
  };
  
  const renderName = ({ name }) => <span>{name}</span>;
  
  const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;
  
  const mapPersonMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllPeople
    };
  };
  
  const mapPlanetMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllPlanets
    };
  };
  
  const mapStarshipMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllStarships
    };
  };
  
  const PersonList = withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderName)),
                      mapPersonMethodsToProps);
  
  const PlanetList =  withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderName)),
                      mapPlanetMethodsToProps);
  
  const StarshipList = withSwapiService(
                          withData(
                            withChildFunction(ItemList, renderModelAndName)),
                       mapStarshipMethodsToProps);
  
  export {
    PersonList,
    PlanetList,
    StarshipList
  };

// const renderName=({name})=><span>{name}</span>
// const renderModelAndName = ({model, name})=><span>{name} ({model})</span>

// const withChildFunction = (Wrapper,fn)=>{
//     return (props)=>{
//         return(
//             <Wrapper {...props}>
//                 {fn}
//             </Wrapper>
//         )
//     }
// }
// //const ListWithChildren=withChildFunction(ItemList,renderName)

// mapPersonMethodsToProps=(swapiSerwice)=>{
//     return{
//         getData: swapiSerwice.getAllPeople
//     }
// }
// mapPlanetMethodsToProps=(swapiSerwice)=>{
//     return{
//         getData: swapiSerwice.getAllPlanets
//     }
// }
// mapStarshipMethodsToProps=(swapiSerwice)=>{
//     return{
//         getData: swapiSerwice.getAllStarships
//     }
// }

// const PersonList =  withSwapiService(withData(withChildFunction(ItemList,renderName)),mapPersonMethodsToProps)
// const PlanetList = withSwapiService(withData(withChildFunction(ItemList,renderName)),mapPlanetMethodsToProps)
// const StarshipList = withSwapiService(withData(withChildFunction(ItemList,renderModelAndName)),mapStarshipMethodsToProps)

// export {
//     PersonList,
//     PlanetList,
//     StarshipList
// }