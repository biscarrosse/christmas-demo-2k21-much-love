import React, { useState, useCallback } from 'react'
import { Catg, CatgItem } from '../style/divs.style'
import { P, H3 } from '../style/text.style'
import { Button } from '../style/buttons.style'
import { Item, Field } from '../../modules/dataService'

interface CategoryItemProps {
    it: Item
}
const CategoryItem = ({ it }: CategoryItemProps) => (
    <CatgItem>
        <P className={`${it.position ? it.position : 'average'}`}>{`${Math.ceil(
            it.percent
        )}%`}</P>
        <P>{it.label}</P>
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
        <div>
            <H3>{item.label}</H3>
            <Catg>
                {item.items.map((it, index) => {
                    if (index > 9 && !isOpen) return null

                    return <CategoryItem key={`${it.label}-${index}`} it={it} />
                })}
                {!isOpen && item.items.length > 10 && (
                    <Button onClick={toggleClose}>open all</Button>
                )}
                {isOpen && item.items.length > 10 && (
                    <Button onClick={toggleClose}>Close ... almost all</Button>
                )}
            </Catg>
        </div>
    )
}

export default Category
