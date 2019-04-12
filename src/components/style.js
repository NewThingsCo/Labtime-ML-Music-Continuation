import styled from 'styled-components'



export const Colors = {
    main: '#2e2e2e',
    background: {
        primary: '#ffffff',
        secondary: '#f3f3f3',
        smoke: 'rgba(0, 0, 0, 0.3)',
        printHeader: '#2e2e2e',
        printDescription: '#f5f5f5'
    },
    text: {
        secondary: '#708090',
        empty: '#A3B3C3',
        print: '#2e2e2e',
        printLight: '#4a4a4a',
        printLink: '#4a90e2',
        printBlack: '#000000',
        accent: '#fffd91'
    },
    tags: {
        background: '#000000',
        text: '#ffffff'
    }
};

export const Font = {
    family: '"Maison Neue", sans-serif',
    weight: {
        light: '300',
        book: '400',
        medium: '500',
        demi: '600'
    }
};

export const Breakpoints = {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px'
};


export const Container = styled.div`
  align-content: center;
  align-items: center;
  background: ${Colors.background.primary};
  display: inline-block;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  padding-top: 10%;
  padding-left: 33%;
`;

export const Wrapper = styled.div`
    padding-top: ${props => props.topPadding ? props.topPadding : "0em"};
    width: 100%;
`;


export const BrandText = styled.span`
    width : 100%;
    padding-left: ${props => props.indent ? props.indent === 'small' ? "0.8em" : "1.5em" :  "0em" };
    font-size: 5rem;
    text-transform: uppercase;
    font-family: ${Font.family};
    font-weight : bold;
    `;

export const BrandRow = styled.div`
    width : 100%;
    padding-bottom: 1 em;
        
    `

export const VerticalText = styled.span`
    writing-mode: vertical-rl;
    // Disabled the transform as it means a padding-left actually pads the right side which is a bit confusing 
    //transform: rotate(-180deg);
    color: ${Colors.text.secondary};
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight:bold;
    `;

export const OutputText = styled.span`
    color: ${Colors.text.secondary};
    font-size: 5rem;
    padding-left: 0.2em;
    `;

export const Button = styled.button`
    width: 5rem`

export default Colors




