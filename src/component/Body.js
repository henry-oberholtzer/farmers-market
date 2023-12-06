import React from "react";
import InformationColumn from "./information-column/InformationColumn";
import marketSchedule from "../data/market-schedule";
import availableProduce from "../data/produce-data";
import LocationList from "./information-column/LocationList";
import ProduceList from "./information-column/ProduceList";
import MonthList from "./information-column/MonthList";


const dimensions = {
    width: '100vw',
    height: '80vh',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
}

const td = {
    border: '2px solid black',
    borderRadius: '10px',
    width: "100%",
    margin: "10px",
    padding: "10px",
    height: "100%",
    backgroundColor: 'white'
}
const optionsArray = (objectArray) => {
    return (keyToFind) => {
        const array = []
        objectArray.forEach((object) => {
            array.push(object[keyToFind]);
        });
        return array
    }
}

const removeDuplicates = (array) => {
    console.log(array)
    return [...new Set(array)]
}
const Body = () => {
    return( 
        <React.Fragment>
            <tr style={dimensions}>
                <td style={td}>
                    <InformationColumn
                        data={marketSchedule}
                        categoryTitle="Farmer's Markets"
                        selectLabel="Days we're at a market"
                        selectOptions={optionsArray(marketSchedule)("day")}
                        componentToRender={LocationList}
                        dataToRenderIsArrayOrObject={false}
                    />
                </td>
                <td style={td}>
                    <InformationColumn
                        data={availableProduce}
                        categoryTitle="Produce Selection"
                        selectLabel="Produce availability by month"
                        selectOptions={optionsArray(availableProduce)("month")}
                        componentToRender={ProduceList}
                        dataToRenderIsArrayOrObject={false}
                    />
                </td>
                <td style={td}>
                    <InformationColumn
                        data={availableProduce}
                        categoryTitle="Produce by Month"
                        selectLabel="List of months where items are available"
                        selectOptions={removeDuplicates(optionsArray(availableProduce)("selection").flat())}
                        componentToRender={MonthList}
                        dataToRenderIsArrayOrObject={true}
                    />
                </td>
            </tr>
        </React.Fragment>
    )
}

export default Body;