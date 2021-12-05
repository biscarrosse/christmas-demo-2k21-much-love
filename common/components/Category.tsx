import React, { useState, useCallback } from 'react'
import { Catg, CatgItem, CatgWrap, PercentWrap } from '../style/divs.style'
import { P, H4 } from '../style/text.style'
import { Button as ButtonStyle, TextWrap } from '../style/buttons.style'
import { Item, Field } from '../../modules/dataService'
// Comps:
import { Button } from '../components/Button'

interface CategoryItemProps {
    it: Item
}
const CategoryItem = ({ it }: CategoryItemProps) => (
    <CatgItem className="category__item">
        <PercentWrap position={it.position ? it.position : 'average'}>
            <P
                className={`${it.position ? it.position : 'average'}`}
            >{`${Math.ceil(it.percent)}%`}</P>
        </PercentWrap>
        <TextWrap>
            <P>{it.label}</P>
        </TextWrap>
    </CatgItem>
)

interface CategoryProps {
    item: Field
}
export const Category = ({ item }: CategoryProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleClose = useCallback((): void => {
        isOpen && setIsOpen(false)
        !isOpen && setIsOpen(true)
    }, [isOpen])
    // or could be separate functions:
    // const handleOpen = (): void => setIsOpen(true)
    // const handleClose = (): void => setIsOpen(false)

    return (
        <CatgWrap className="categories__category">
            <H4 color="gray" margin="0 0 0.5rem 0">
                {item.label}
            </H4>
            <Catg>
                {item.items.map((it, index) => {
                    if (index > 9 && !isOpen) return null

                    return <CategoryItem key={`${it.label}-${index}`} it={it} />
                })}
                {!isOpen && item.items.length > 10 && (
                    <Button
                        callback={toggleClose}
                        color="arrow"
                        text="Open all"
                    />
                )}
                {isOpen && item.items.length > 10 && (
                    <Button
                        callback={toggleClose}
                        color="close"
                        text="Close ... almost all"
                    />
                )}
            </Catg>
        </CatgWrap>
    )
}

export default Category
