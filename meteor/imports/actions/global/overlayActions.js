import actionTypes from '../../actionTypes/global'

export function add(id, component, blur = true, route = null) {
  //Would be good place to handle routing
  return {
    type: actionTypes.overlays.add,
    id,
    blur,
    component
  }
}

export function remove(id) {
  return {
    type: actionTypes.overlays.remove,
    id
  }
}
