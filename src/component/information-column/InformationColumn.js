import React from "react";
import SelectOptions from "./SelectOptions";
import LocationList from "./LocationList";
import marketSchedule from "../../data/market-schedule";

class InformationColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionToDisplay: ""
        }
    }

    changeDisplayOption = (id) => {
        this.setState({
            optionToDisplay: id,
            optionData: this.filterData(id)
        });
    }

    filterData = (id) => {
        const data = marketSchedule.filter(option => Object.values(option).includes(id))[0]
        return data
    }

    render(){
        let currentlyVisibleState = null;
        if (this.state.optionToDisplay && this.state.optionData) {
            currentlyVisibleState = <LocationList
            location={this.state.optionData.location}
            day={this.state.optionData.day}
            time={this.state.optionData.hours}
            booth={this.state.optionData.booth}
        />
        } else if (this.state.optionToDisplay && !this.state.optionData) {
            currentlyVisibleState = <LocationList
            location="No Market Today"
            day={this.state.optionToDisplay}
            time="Closed"
            booth=""
            />
        }
        return(
            <React.Fragment>
                <SelectOptions 
                    array={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                    onChangeFunction={this.changeDisplayOption}
                    />
                {currentlyVisibleState}
            </React.Fragment>
            );
    }
}

export default InformationColumn;