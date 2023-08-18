/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Form.module.css";

function Form({ info, setInfo }) {
  const handleChange = (e) => {
    e.preventDefault();
    let property = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [property]: value });
  };

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (info.X_max !== 0) {
      setToggle(true);
    }
  }, [info.X_max]);

  return (
    <form className={styles.FormContainer}>
      <input
        placeholder={"Enter Project Name"}
        name="projectName"
        value={info?.projectName}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        placeholder={"Project Description"}
        name="projectDescription"
        value={info?.projectDescription}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="clientName"
        value={info?.clientName}
        placeholder={"Client name"}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="contractor"
        value={info?.contractor}
        placeholder={"Contractor"}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="X_max"
        value={info?.X_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="X_min"
        value={info?.X_min}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="Y_max"
        value={info?.Y_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="Y_min"
        value={info?.Y_min}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="Z_max"
        value={info?.Z_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        disabled={toggle}
        type="number"
        name="Z_min"
        value={info?.Z_min}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default Form;
