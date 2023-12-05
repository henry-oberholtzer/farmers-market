import React from "react";
import PropTypes from "prop-types";

const ProduceList = (props) => {
    return(
        <React.Fragment>
            <h2>{props.month}</h2>
            <ul>{props.selection.map((produceItem) => {
                return (
                <li>{produceItem}</li>
                );
            })}
            </ul>
        </React.Fragment>
    )
}

ProduceList.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array,
}

export default ProduceList;