/* eslint-disable react/prop-types */
import styles from "./Form.module.css";

function Form({ info, setInfo }) {
  const handleChange = (e) => {
    e.preventDefault();
    let property = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [property]: value });
  };

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
      <div className={styles.aux}>
        <span>Min value</span>
        <span>Max value</span>
      </div>
      <label className={styles.valueInputs}>
        <strong>X</strong>
        <input
          disabled={info.mod}
          type="number"
          name="X_min"
          value={info?.X_min}
          onChange={(e) => handleChange(e)}
        />
        <input
          disabled={info.mod}
          type="number"
          name="X_max"
          value={info?.X_max}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className={styles.valueInputs}>
        <strong>Y</strong>
        <input
          disabled={info.mod}
          type="number"
          name="Y_min"
          value={info?.Y_min}
          onChange={(e) => handleChange(e)}
        />
        <input
          disabled={info.mod}
          type="number"
          name="Y_max"
          value={info?.Y_max}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className={styles.valueInputs}>
        <strong>Z</strong>
        <input
          disabled={info.mod}
          type="number"
          name="Z_min"
          value={info?.Z_min}
          onChange={(e) => handleChange(e)}
        />
        <input
          disabled={info.mod}
          type="number"
          name="Z_max"
          value={info?.Z_max}
          onChange={(e) => handleChange(e)}
        />
      </label>
    </form>
  );
}

export default Form;
