import EditableCell from "./EditableCell";
import { useState, useEffect } from "react";
import { randomNumber } from "../utils";

function Matrix({ size }) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    setValues(
      [...Array(size)].map((_item) =>
        [...Array(size)].map((_elem) => randomNumber())
      )
    );
  }, [size]);

  const handleValueChange = (newValue, idx, idx2) => {
    setValues((prevValues) =>
      prevValues.map((row, index) => {
        if (index === idx) {
          const newRow = [...row];
          newRow.splice(idx2, 1, +newValue);
          return newRow;
        } else {
          return row;
        }
      })
    );
  };
  return (
    <table>
      {values.map((row, idx) => (
        <tr key={idx}>
          {row.map((item, idx2) => (
            <EditableCell
              value={item}
              key={idx2}
              onChange={(newValue) => handleValueChange(newValue, idx, idx2)}
            />
          ))}
          <th>{row.reduce((partialSum, value) => partialSum + value, 0)}</th>
        </tr>
      ))}
      <tr>
        <th colspan={size}>
          {[]
            .concat(...values)
            .reduce((partialSum, value) => partialSum + value, 0)}
        </th>
      </tr>
    </table>
  );
}

export default Matrix;
