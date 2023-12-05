import React from "react";
import SelectOptions from "./SelectOptions";
import PropTypes from "prop-types";

class InformationColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionToDisplay: ""
        }
    }
    
    changeDisplayOption = (id) => {
        console.log(id)
        this.setState({
            optionToDisplay: id,
            optionData: this.filterData(id)
        });
    }

    filterData = (id) => {
        return this.props.data.filter(option => Object.values(option).includes(id))[0]
    }

    render(){
        let currentlyVisibleState = null;
        if (this.state.optionToDisplay && this.state.optionData) {
            currentlyVisibleState = this.props.componentToRender(this.state.optionData)
        }
        return(
            <React.Fragment>
                <h1>{this.props.categoryTitle}</h1>
                <h2>{this.props.selectLabel}</h2>
                <SelectOptions 
                    array={this.props.selectOptions}
                    onChangeFunction={this.changeDisplayOption}
                />
                {currentlyVisibleState}
            </React.Fragment>
            );
    }
}

InformationColumn.propTypes = {
    data: PropTypes.array,
    selectOptions: PropTypes.array,
    componentToRender: PropTypes.func,
    selectLabel: PropTypes.string,
    categoryTitle: PropTypes.string

}

export default InformationColumn;