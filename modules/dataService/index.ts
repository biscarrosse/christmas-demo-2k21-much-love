import data from './data.json'

export interface APIData {
    message: string
    data: object // ¯\_(ツ)_/¯ I know
}
export const getData = (): Promise<APIData> => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve({
                message: 'all good',
                data,
            })
        }, 1000)
    })
}
