/* eslint-disable react/prop-types */
import styles from "./FileUpload.module.css";
import { handleFileUpload } from "../../handlers/handleFileRead";

function FileUpload({ info, setInfo }) {
  const handleChange = async (e) => {
    const numbers = await handleFileUpload(e.target.files[0]);
    setInfo({ ...info, ...numbers });
  };

  return (
    <div className={styles.containerFileUpload}>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default FileUpload;
