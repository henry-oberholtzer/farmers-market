import React from "react";
import InformationColumn from "./information-column/InformationColumn";
import marketSchedule from "../data/market-schedule";
import availableProduce from "../data/produce-data";
import LocationList from "./information-column/LocationList";
import ProduceList from "./information-column/ProduceList";

const optionsArray = (objectArray) => {
    return (keyToFind) => {
        const array = []
        objectArray.forEach((object) => {
            array.push(object[keyToFind]);
        });
        return array
    }
}

const Body = () => {
    return( 
        <React.Fragment>
            <InformationColumn
                data={marketSchedule}
                categoryTitle="Farmer's Markets"
                selectLabel="Days we're at a market"
                selectOptions={optionsArray(marketSchedule)("day")}
                componentToRender={LocationList}
            />
            <InformationColumn
                data={availableProduce}
                categoryTitle="Produce Selection"
                selectLabel="Produce availability by month"
                selectOptions={optionsArray(availableProduce)("month")}
                componentToRender={ProduceList}
            />
        </React.Fragment>
    )
}

export default Body;