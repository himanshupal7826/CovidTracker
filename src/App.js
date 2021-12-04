import './App.css';

import Map from "./components/Map";
import InfoBox from './components/InfoBox';
import Table from './components/Table';
import LineGraph from './components/LineGraph';
import { sortData, prettyPrintStat } from './components/util';
import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import "leaflet/dist/leaflet.css";
import StateData from './components/StateData';
import VacinationTable from './components/VacinationTable';
import Header from './components/Header';
import { FooterContainer } from './components/Logo/footer';
import PreCautions from './components/PreCautions';
 
function App() {

  const [mapZoom, setMapZoom] = useState(3);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [VtableData, setVTableData] = useState([]);
  const [stateData, setstateData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lng: 89.2966666667,
    lat: 29.8405555556
  });
  const [mapcountries, setMapcountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapcountries(data);
          setCountries(countries);
        });

    };
    getCountriesData();
  }, []);

  useEffect(() => {
    const getVData = async () => {
    await fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries/India?lastdays=30&fullData=true")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = Object.values(data);
          setVTableData(sortedData[1]);
      });
    };
    getVData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;



    const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(5);
      })

  };

  useEffect(() => {
    const getSData = async () => {
      await fetch("https://disease.sh/v3/covid-19/gov/india")
      .then((response) => response.json())
      .then((data) => {
        // const Data = Object.keys(data);
        // setstateData(Data);
         
        const sortedData = Object.values(data);
         
          setstateData(sortedData[2]);
          

      });
    };
    getSData();

  }, []);


  return (
  
  <div>  
    <Header/> 
    <div>
       <div className="App">
        <div className="app_left">
          <div className="app_header">
            <h1>Covid-19 Tracker</h1>
            <FormControl className="app_dropdown">
              <Select
                variant="outlined"
                onChange={onCountryChange}
                value={country} >
                <MenuItem value="worldwide"> Worldwide</MenuItem>
                {
                  countries.map(country => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>

                  ))
                }

              </Select>

            </FormControl>

          </div>
          {/*Header Completed*/}
          <div className="app_stats">
            <InfoBox
              onClick={(e) => setCasesType("cases")}
              active={casesType === "cases"}
              title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
            <InfoBox
              active={casesType === "recovered"}
              onClick={(e) => setCasesType("recovered")}
              title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
            <InfoBox
              active={casesType === "deaths"}
              onClick={(e) => setCasesType("deaths")}
              title="Deaths" total={prettyPrintStat(countryInfo.deaths)} cases={countryInfo.todayDeaths} />

            {/* {infoboxes} */}
          </div>
          {/* {app stats over} */}


          <Map
            casesType={casesType}
            countries={mapcountries}

            center={mapCenter}
            zoom={mapZoom} />
        </div>


        <Card className="app_right">
          <CardContent>
            <h3>Live Cases By Country</h3>
            <Table countries={tableData} />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </CardContent>
        </Card>

      </div >
      <div>
      <div className="app_dropdown1">
      <h3>State wise Active Cases in India</h3>
        <StateData states={stateData} /></div>
        <div className="app_dropdown1"> 
        <h2>Vaccination details All over India</h2>
        <VacinationTable timeline={VtableData} />
        </div></div>
         
    </div>
    <>
    <PreCautions/>
    </>
    <>
    <FooterContainer id="About"/>
    </>
  </div>
     
  );
}

export default App;
