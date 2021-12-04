import { useState } from 'react'
import { Data } from '../../pages'
import { ButtonList } from '../style/divs.style'
import { ButtonFilter } from '../style/buttons.style'
import CategoryComponent from '../components/Category'
import { Field, Item, DataObject } from '../../modules/dataService'

const DataList = ({ dataList }: Data) => {
    const { data, message } = dataList

    const [state, setState] = useState<DataObject>(data)

    const handleAll = () => setState(data)

    const getFiltered = (cmd: string): DataObject => {
        const result = data.data.map((item: Field) => {
            return {
                ...item,
                items: item.items.filter((it: Item) => {
                    return it.position === cmd
                }),
            }
        })
        return { ...data, data: result }
    }

    const handleAbove = (): void => {
        const filtered = getFiltered('above')
        setState(filtered)
    }

    const handleBelow = (): void => {
        const filtered = getFiltered('below')
        setState(filtered)
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <ButtonList>
                <ButtonFilter color="average" onClick={handleAll}>
                    Vse
                </ButtonFilter>
                <ButtonFilter color="above" onClick={handleAbove}>
                    Nadprumer
                </ButtonFilter>
                <ButtonFilter color="below" onClick={handleBelow}>
                    Podprumer
                </ButtonFilter>
            </ButtonList>

            <div>
                {state.data.map((item, idx) => {
                    return (
                        <CategoryComponent
                            key={`${item.label}-${idx}`}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DataList
