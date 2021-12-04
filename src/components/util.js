import React  from "react";
import "./Map.css";
import {Circle,Popup } from "react-leaflet";
 
import numeral from "numeral";
const casesTypeColors={
  cases:{
  hexa: "#CC1034",
  multiplier:200,
  },
  recovered:{
  hexa:"#00ff00",
  multiplier:200,
  },
  deaths:{
  hexa:"#FF4500",
      // rgb:"rgb(251,68,67)",
      // half_op:"rgba(251,68,67,0.5)",
  multiplier:1000,
  }
};

export const sortData=(data)=>{
 const sortedData=[...data];
   sortedData.sort((a,b)=>(a.cases > b.cases ? -1 : 1 ));
   return sortedData;
};

export const prettyPrintStat=(stat)=>{
  return (stat ? `+${numeral(stat).format("0.0a")}`:"+0");
};

export const showDataOnMap=(data,casesType)  =>(
  data.map(country=>(
  <Circle
    center={[country.countryInfo.lat,country.countryInfo.long]}
    fillOpacity={0.4}
    color={casesTypeColors[casesType].hexa}
    fillColor={casesTypeColors[casesType].hexa}
    radius={
      Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
    }
    
    >
      <Popup>
        <div className="info-container">
        <div className="info-flag" style={{backgroundImage: `url(${country.countryInfo.flag})`}}/>
        <div className="info-name">{country.country}</div>
        <div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
        <div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
        <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  )));
  