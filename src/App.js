import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CovidTable from "./Component/CovidTable";
import "./Component/Covid.css";

export default function App() {
  return (
    <div className="App">
      <CovidTable />
    </div>
  );
}
