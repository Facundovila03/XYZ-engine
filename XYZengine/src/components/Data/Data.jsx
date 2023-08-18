/* eslint-disable react/prop-types */
import syles from "./Data.module.css";

function Data({ info }) {
  return (
    <div className={syles.container}>
      <h4>Project name</h4>
      <p>{info?.projectName}</p>
      <h4>Project description</h4>
      <p>{info?.projectDescription}</p>
      <h4>Client name</h4>
      <p>{info?.clientName}</p>
      <h4>Contractor</h4>
      <p>{info?.contractor}</p>
      <h4>Max X</h4>
      <p>{info?.X_max}</p>
      <h4>Min X</h4>
      <p>{info?.X_min}</p>
      <h4>Max Y</h4>
      <p>{info?.Y_max}</p>
      <h4>Min Y</h4>
      <p>{info?.Y_min}</p>
      <h4>Max Z</h4>
      <p>{info?.Z_max}</p>
      <h4>Min Z</h4>
      <p>{info?.Z_min}</p>
    </div>
  );
}

export default Data;
