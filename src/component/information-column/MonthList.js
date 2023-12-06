import React from "react";
import PropTypes from "prop-types";

const MonthList = (props) => {
    return(
        <React.Fragment>
            <h2>{props.selection}</h2>
            <ul>{props.array.map((object) => {
                if(object.selection.includes(props.selection)) {
                    return (
                    <li>{object.month}</li>
                    );
                } else {
                    return null;
                }
            })}
            </ul>
        </React.Fragment>
    )
}

MonthList.propTypes = {
    array: PropTypes.array,
    selection: PropTypes.string,
}

export default MonthList;