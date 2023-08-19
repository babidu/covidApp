import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
// import table from "../../node_modules/react-bootstrap/Table";
import Table from "react-bootstrap/Table";

const CovidTable = () => {
  const [apData, setData] = useState([]);

  // const getCovidData = async () => {
  //   try {
  //     const res = await axios.get("https://disease.sh/v3/covid-19/states");
  //     const apiData = res.data; // Corrected property name
  //     setData(apiData);
  //     console.log(apiData);
  //   } catch (err) {
  //     console.error("API call error:", err); // Corrected console.error
  //   }
  // };
  // useEffect(() => {
  //   getCovidData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://disease.sh/v3/covid-19/states");
        const apiData = res.data;
        console.log(apiData);
        setData(apiData);
      } catch (er) {
        console.er("api call error");
      }
    };
    getData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }} className="covidTable">
        <Table responsive="sm md lg">
          <thead className="">
            <tr className="tHead">
              <th>State</th>
              <th>Updated</th>
              <th>Cases</th>
              <th>Today Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {apData.map((currentData, ind) => {
              return (
                <tr key={ind}>
                  <td className="state"> {currentData.state} </td>
                  <td className="updated">{currentData.updated} </td>
                  <td className="cases"> {currentData.cases}</td>
                  <td className="todayCases">{currentData.todayCases} </td>
                  <td className="deaths">{currentData.todayDeaths}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CovidTable;
