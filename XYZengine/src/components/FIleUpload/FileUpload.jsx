/* eslint-disable react/prop-types */
import styles from "./FileUpload.module.css";
import { handleFileUpload } from "../../handlers/handleFileRead";

function FileUpload({ info, setInfo }) {
  const handleChange = async (e) => {
    const numbers = await handleFileUpload(e.target.files[0]);
    setInfo({ ...info, ...numbers, ["mod"]: true });
  };

  return (
    <div className={styles.containerFileUpload}>
      <label className={styles.fileUploadLabel}>
        <strong>Upload a file</strong>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => handleChange(e)}
          className={styles.customFileInput}
        />
      </label>
    </div>
  );
}

export default FileUpload;
