import React from "react";

const SelectOption = ({ onChangeHandle, optionObj, classAdd, labelVal }) => {
  return (
    <label className={classAdd}>
      {labelVal} &nbsp;
      <select onChange={onChangeHandle}>
        {optionObj.map(keyItem => {
          return (
            <option key={keyItem} value={keyItem}>
              {keyItem}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default SelectOption;
