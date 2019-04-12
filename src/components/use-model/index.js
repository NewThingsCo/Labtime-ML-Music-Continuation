import React from "react";
import {connect} from "react-redux";
import {Button, Container} from '../style';
import {executeInputOnModel, registerCurrentInput} from "./actions";


const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

class UseModel extends React.Component {
    constructor() {
        super();
        this.handleExecuteInput = this.handleExecuteInput.bind(this);
        this.registerInput = this.registerInput.bind(this);
    }

    handleExecuteInput(event) {
        event.preventDefault();

    }

    registerInput(event) {
        event.preventDefault();

    }

    render() {
        return (
            <Container>
                <input type="text" onChange={this.registerInput} />
                <Button onClick={this.handleExecuteInput}>Test that Tweet</Button>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseModel);
