/* eslint-disable react/prop-types */
import styles from "./Table.module.css";

function Table({ info }) {
  return (
    <table className={styles.tableContainer}>
      <tr>
        <th></th>
        <th>Min</th>
        <th>Max</th>
      </tr>
      <tr>
        <td>X values</td>
        <td>{info?.X_min}</td>
        <td>{info?.X_max}</td>
      </tr>
      <tr>
        <td>Y values</td>
        <td>{info?.Y_min}</td>
        <td>{info?.Y_max}</td>
      </tr>
      <tr>
        <td>Z values</td>
        <td>{info?.Z_min}</td>
        <td>{info?.Z_max}</td>
      </tr>
    </table>
  );
}

export default Table;
