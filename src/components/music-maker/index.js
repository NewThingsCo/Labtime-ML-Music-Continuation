import React from "react";
import {connect} from "react-redux";
import {BrandText, Button, Container} from '../style';

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

class MusicMaker extends React.Component {
    constructor(props) {
        super(props);

        this.playWithRnn = this.playWithRnn.bind(this);
        this.playWithVae = this.playWithVae.bind(this)
    }

    playWithRnn(event){
        event.preventDefault();
    }

    playWithVae(event) {
        event.preventDefault();

    }

    render() {
        const {currentOutput} = this.props;

        if(!currentOutput.output){
            return null;
        }

        return (
            <Container>
                <BrandText>Turn it into sweet sweet music</BrandText>
                <Button onClick={this.playWithRnn}>Play with RNN</Button>
                <Button onClick={this.playWithVae}>Play with Vae</Button>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicMaker);