import styled from 'styled-components'

export const Button = styled.button`
    background-color: #efa6ff; // cool pink
    border: none;
    color: #000;
    padding: 1rem 1.5rem;
    text-align: center;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`
interface Props {
    color?: string
}
export const ButtonFilter = styled(Button)<Props>`
    background-color: ${(p) => {
        return p.color === 'above'
            ? '#4df78b'
            : p.color === 'below'
            ? '#ff4e45'
            : '#cccccc'
    }};
    padding: 0.5rem;
    margin-right: 0.5rem;
`
