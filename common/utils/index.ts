import { Item } from '../../modules/dataService'

const getPosition = (it: Item) => {
    const { percent, percent_avg } = it

    const diff = Math.abs(percent - percent_avg)

    if (diff <= 3) {
        return 'average'
    } else {
        if (percent > percent_avg + 3) return 'above'
        if (percent_avg > percent + 3) return 'below'
    }
}

export { getPosition }
