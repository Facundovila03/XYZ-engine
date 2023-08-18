/* eslint-disable react/prop-types */
import styles from "./FormValues.module.css";

function FormValue({ numbers, setNumbers }) {
  const handleChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    setNumbers({ ...numbers, [property]: Number(value) });
  };

  return (
    <form className={styles.formValueContainer}>
      <input
        type="number"
        name="X_max"
        value={numbers?.X_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="X_min"
        value={numbers?.X_min}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="Y_max"
        value={numbers?.Y_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="Y_max"
        value={numbers?.Y_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="Z_max"
        value={numbers?.Z_max}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="Z_min"
        value={numbers?.Z_min}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default FormValue;
