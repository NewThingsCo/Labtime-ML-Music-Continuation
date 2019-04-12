import React from "react";
import {connect} from "react-redux";
import {Button, Container} from '../style';


const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.handleCorrectClick = this.handleCorrectClick.bind(this);
        this.handleIncorrectClick = this.handleIncorrectClick.bind(this);
    }


    handleCorrectClick( event ){
        event.preventDefault();

    }

    handleIncorrectClick( event ){
        event.preventDefault();

    }

    render() {
        const {currentOutput} = this.props;

        if(!currentOutput || !currentOutput.output){
            return null;
        }

        return (
            <Container>
                <Button onClick={this.handleCorrectClick}>Correct!</Button>
                <Button onClick={this.handleIncorrectClick}>Fake News!</Button>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);