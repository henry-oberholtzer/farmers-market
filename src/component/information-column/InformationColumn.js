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
        console.log(this.filterData(id))
        this.setState({
            optionToDisplay: id,
            optionData: this.filterData(id)
        });
    }

    filterData = (id) => {
        const filterArray = this.props.data.filter(option => Object.values(option).includes(id))
        if (this.props.dataToRenderIsArrayOrObject) {
            return {
                selection: id,
                array: this.props.data
            }
        } else {
            return filterArray[0]
        }
    }

    render(){
        let currentlyVisibleState = null;
        if (this.state.optionToDisplay && this.state.optionData) {
            currentlyVisibleState = this.props.componentToRender(this.state.optionData)
        }
        return(
            <div>
                <h1>{this.props.categoryTitle}</h1>
                <h2>{this.props.selectLabel}</h2>
                <SelectOptions 
                    array={this.props.selectOptions}
                    onChangeFunction={this.changeDisplayOption}
                />
                {currentlyVisibleState}
            </div>
            
            );
    }
}

InformationColumn.propTypes = {
    data: PropTypes.array,
    selectOptions: PropTypes.array,
    componentToRender: PropTypes.func,
    dataToRenderIsArrayOrObject: PropTypes.bool,
    selectLabel: PropTypes.string,
    categoryTitle: PropTypes.string
}

export default InformationColumn;