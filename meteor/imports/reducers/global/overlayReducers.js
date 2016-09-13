import _ from 'lodash'
import actionTypes from '../../actionTypes/global/overlayActionTypes'

const overlays = []

export default function overlaysReducer (state = overlays, action = {}) {
  switch (action.type) {
    case actionTypes.add:
      return [...state, {
        id: action.id,
        blur: action.blur,
        component: action.component
      }]
    case actionTypes.remove:
      return _.filter(state, (entry) => {
        return entry.id !== action.id
      })
    default:
      return state
  }
}
