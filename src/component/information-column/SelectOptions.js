import React from "react";
import PropTypes from "prop-types";

const SelectOptions = (props) => {
    return(
        <select onChange={(e) => props.onChangeFunction(e.target.value)}>
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