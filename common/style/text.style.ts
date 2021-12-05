import styled from 'styled-components'

interface TextProps {
    color?: string
    textTransform?: string
    uppercase?: boolean
    margin?: string
    padding?: boolean
}

const P = styled.p<TextProps>`
    color: ${(props) => (props.color ? props.color : 'inherit')};
    margin: 0;
    padding: 0;
`
const H1 = styled.h1<TextProps>`
    color: ${(props) => (props.color ? props.color : 'inherit')};
    margin: 0;
    padding: 0;
`
const H2 = styled.h2<TextProps>`
    color: ${(props) => (props.color ? props.color : 'inherit')};
    margin: 0;
    padding: 0;
`

const H3 = styled.h3<TextProps>`
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : null)};
    color: ${(props) => (props.color ? props.color : 'inherit')};
    margin: 0;
    padding: 0;
`

const H4 = styled.h4<TextProps>`
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : null)};
    color: ${(props) => (props.color ? props.color : 'inherit')};
    margin: ${(props) => (props.margin ? props.margin : '0')};
    padding: 0;
`

export { P, H1, H2, H3, H4 }
