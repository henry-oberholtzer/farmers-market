import React from "react";
import PropTypes from "prop-types";

const LocationList = (props) => {
    return(
        <React.Fragment>
            <h2>{props.location}</h2>
            <h3>{props.day} - {props.hours}</h3>
            <p><h4>You can locate us at booth:</h4> {props.booth}</p>
        </React.Fragment>
    )
}

LocationList.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
}

export default LocationList;