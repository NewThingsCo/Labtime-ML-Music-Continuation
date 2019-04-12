import React from "react";
import {connect} from "react-redux";
import {Button, Container} from '../style';
import {fireStartTraining} from "./actions";


const mapDispatchToProps = dispatch => {
    return {
        fireStartTraining: () => dispatch(fireStartTraining())
    };
};

class TrainModel extends React.Component {
    constructor() {
        super();
        this.handleStartTrainingClick = this.handleStartTrainingClick.bind(this);
    }

    handleStartTrainingClick(event) {
        if(event !== undefined) event.preventDefault();
        this.props.fireStartTraining();
    }

    render() {
        return (
            <Container>
                <Button onClick={this.handleStartTrainingClick}>Train model</Button>
            </Container>
        );
    }
}

export default connect(null, mapDispatchToProps)(TrainModel);
