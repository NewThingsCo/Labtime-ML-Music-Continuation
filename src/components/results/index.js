import React from "react";
import {connect} from "react-redux";
import {BrandText, Container} from '../style';


const mapStateToProps = state => {
    return {
    }
};

class Results extends React.Component {

    render() {

        return (
            <Container>
                <BrandText>{}</BrandText>
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(Results);
