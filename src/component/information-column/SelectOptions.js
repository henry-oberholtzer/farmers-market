import React from "react";
import PropTypes from "prop-types";

const selectStyling = {
    height: "2.5rem",
    fontSize: "1.25rem",
    paddingLeft: "5px",
    width: "100%"
}

const SelectOptions = (props) => {
    return(
        <select style={selectStyling} onChange={(e) => props.onChangeFunction(e.target.value)}>
            <option selected disabled>Select Option</option>
            {props.array.map((label) => {
                return(
                    <option value={label}>{label}</option>
                )
            })}
        </select>
    )
}

SelectOptions.propTypes = {
    optionLabels: PropTypes.array,
    onChangeFunction: PropTypes.func
}

export default SelectOptions;