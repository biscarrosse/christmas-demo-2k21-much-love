import styled from 'styled-components'

interface ButtonProps {
    btnSize?: string
}
const Button = styled.button<ButtonProps>`
    border: none;
    color: #000;
    height: 1.5rem;
    text-align: center;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`
interface Props {
    color?: string
}
const ButtonFilter = styled(Button)<Props>`
    height: 1.5rem;
    border-bottom-right-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    position: relative;
    display: flex;
    background-color: ${(props) =>
        props.color === 'average' ? '#4ecdff' : '#d9f6ff'};
    padding: 0;
    margin-right: 2rem;
`

interface TextWrapProps {
    color?: string
}
const TextWrap = styled.div<TextWrapProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.75rem;
    color: ${(props) => (props.color ? props.color : 'inherit')};
`

const IconWrap = styled.div`
    position: relative;
    left: -0.5rem;
    background-color: #4ecdff;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3rem;
`

export { Button, ButtonFilter, TextWrap, IconWrap }
