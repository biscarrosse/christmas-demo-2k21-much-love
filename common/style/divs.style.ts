import styled from 'styled-components'

export const ButtonList = styled.div`
    display: flex;
`

export const Catg = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CatgItem = styled.div`
    display: flex;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid gray;
    .average {
        color: gray;
    }
    .above {
        color: green;
    }
    .below {
        color: red;
    }
`
