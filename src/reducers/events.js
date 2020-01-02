import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // console.log(action.response.data)
            // { id = "1" ・・・・
            // change
            // 1 : { id = "1" ・・・・
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}