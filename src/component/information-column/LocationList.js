import React from "react";
import PropTypes from "prop-types";

const LocationList = (props) => {
    return(
        <React.Fragment>
            <h2>{props.location}</h2>
            <h3>{props.day} - {props.time}</h3>
            <p>{props.booth}</p>
        </React.Fragment>
    )
}

LocationList.propTypes = {
    location: PropTypes.string,
    day: PropTypes.string,
    time: PropTypes.string,
    booth: PropTypes.string
}

export default LocationList;