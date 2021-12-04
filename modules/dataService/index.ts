import jsondata from './data.json'

export interface Item {
    label: string
    percent: number
    percent_avg: number
    position?: string
}
export interface Field {
    label: string
    items: Array<Item>
}
export interface DataObject {
    title: string
    subtitle: string
    data: Array<Field>
}
export interface APIData {
    message: string
    data: DataObject
}
export const getData = (): Promise<APIData | any> => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve({
                message: 'all good',
                data: jsondata,
            })
        }, 1000)
    })
}
