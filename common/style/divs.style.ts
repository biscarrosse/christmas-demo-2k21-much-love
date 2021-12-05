import styled from 'styled-components'

const ButtonList = styled.div`
    display: flex;
`

const Head = styled.div`
    display: flex;
    min-height: 7rem;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Catg = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CatgWrap = styled.div`
    margin: 1rem 0;
    h4 {
        text-transform: uppercase;
    }
`

const CatgItem = styled.div`
    display: flex;
    height: 1.5rem;

    border-bottom-left-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    background-color: #ebebeb;

    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0;

    font-size: 0.8rem;
`

interface PercentWrapProps {
    position: string
}
const PercentWrap = styled.div<PercentWrapProps>`
    position: relative;
    left: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: ${(props) => {
        switch (props.position) {
            case 'above':
                return '#0ae778' // would be imported from e.g. colors.style.ts
            case 'below':
                return 'red'
            default:
                return 'gray'
        }
    }};

    width: 3rem;
    height: 1.5rem;

    border-bottom-left-radius: 0.75rem;
    border-top-left-radius: 0.75rem;

    padding: 0.3rem;
    padding-left: 0.75rem;
    margin-left: 1rem;
`

export { ButtonList, Head, Catg, CatgWrap, CatgItem, PercentWrap }
