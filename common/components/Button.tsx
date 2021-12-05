// Styled:
import { ButtonFilter, IconWrap, TextWrap } from '../style/buttons.style'
import { P } from '../style/text.style'
// Icons:
import { FiUsers } from 'react-icons/fi'
import { BsGraphUp } from 'react-icons/bs'
import { BsGraphDown } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlineClose } from 'react-icons/ai'

interface ButtonProps {
    color: string
    text: string
    callback: () => void
}

const getIcon = (color: string) => {
    switch (color) {
        case 'above':
            return <BsGraphUp size="1em" />
        case 'arrow':
            return <AiOutlineArrowDown size="1em" />
        case 'close':
            return <AiOutlineClose size="1em" />
        case 'below':
            return <BsGraphDown size="1em" />
        default:
            return <FiUsers size="1em" /> // 'average'
    }
}

export const Button = ({ callback, color, text }: ButtonProps) => (
    <ButtonFilter color={color} onClick={callback}>
        <IconWrap>{getIcon(color)}</IconWrap>
        <TextWrap>
            <P>{text}</P>
        </TextWrap>
    </ButtonFilter>
)
