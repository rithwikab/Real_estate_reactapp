import logo from '../logo.svg';
import { useEffect, useState,useMemo } from 'react';
import './App.css';
import Header from "./header"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../searchresults';

function App() {
  const [allHouses,setAllHouses] =useState([]);

useEffect( () => {
                const fetchHouses = async () => { 
                  const rsp = await fetch('houses.json');
                  const houses = await rsp.json();
                  console.log(houses);
                  setAllHouses(houses);
                  };  
                fetchHouses();}
, []);
console.log(allHouses);
let featuredhouse;


//useMemo 
//memoisation

useMemo( () => { 
  if(allHouses.length){
    const randomIndex= Math.floor(Math.random()*allHouses.length);
    featuredhouse =  allHouses[randomIndex];
  }}
,
[allHouses]);




  return (
    <Router> 
    <div className="container">
       <Header subtitle='Buy a house from us, and get 20% cash back.No rush!!! ' anotherTitle='I am the twin'/>
        <HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredhouse}></FeaturedHouse>
          </Route>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>            
          </Route>
        </Switch>
    
    
    
    
    </div>
   </Router>
  );
}

export default App;
