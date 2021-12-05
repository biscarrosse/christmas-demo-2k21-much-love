// React:
import { useState } from 'react'
// Types
import { Data } from '../../pages'
import { Field, Item, DataObject } from '../../modules/dataService'
// Styled:
import { ButtonList, Head } from '../style/divs.style'
import { H1, P } from '../style/text.style'
// Comps:
import CategoryComponent from '../components/Category'
import { Button } from '../components/Button'

const DataList = ({ dataList }: Data) => {
    const { data, message } = dataList

    const [state, setState] = useState<DataObject>(data)

    const handleAll = () => setState(data)

    const getFiltered = (cmd: string): DataObject => {
        const result = data.data.map((item: Field) => ({
            ...item,
            items: item.items.filter((it: Item) => {
                return it.position === cmd
            }),
        }))
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
            <Head className="list__head">
                <H1>{data.title}</H1>
                <P color="gray">{data.subtitle}</P>
                <ButtonList>
                    <Button callback={handleAll} color="average" text="Vse" />
                    <Button
                        callback={handleAbove}
                        color="above"
                        text="Nadprumer"
                    />
                    <Button
                        callback={handleBelow}
                        color="below"
                        text="Podprumer"
                    />
                </ButtonList>
            </Head>

            <div className="list__categories__wrap">
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
