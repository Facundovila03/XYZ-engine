export const handleFileUpload = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split("\n");
      let xp = [];
      let x = [];
      let y = [];
      let z = [];
      for (let i = 1; i < rows.length - 1; i++) {
        let aux = rows[i].split(",");
        xp.push(parseFloat(aux[0]));
        x.push(parseFloat(aux[1]));
        y.push(parseFloat(aux[2]));
        z.push(parseFloat(aux[3]));
      }

      const numbersToReturn = {
        X_max: Math.max(...x),
        X_min: Math.min(...x),
        Y_max: Math.max(...y),
        Y_min: Math.min(...y),
        Z_max: Math.max(...z),
        Z_min: Math.min(...z),
      };

      resolve(numbersToReturn);
    };

    reader.onerror = (event) => {
      reject(event.target.error);
    };

    reader.readAsText(file);
  });
};
