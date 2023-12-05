import React from "react";
import SelectOptions from "./select-options";
import marketSchedule from "../../data/market-schedule";

class InformationColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionToDisplay: ""
        }
    }

    changeDisplayOption(id) {
        console.log(id)
    }

    render(){
        return(
            <React.Fragment>
                <SelectOptions 
                    array={["Monday", "Tuesday", "Wednesday"]}
                    onChangeFunction={this.changeDisplayOption}
                    />
                <div>
                    <h2>Pioneer Courhouse Square</h2>
                    <h3>Monday - 10:00am - 2:00pm</h3>
                    <p>Booth 7C</p>
                </div>
            </React.Fragment>
            );
    }
}

export default InformationColumn;