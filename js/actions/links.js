import * as types from '../constants/ActionTypes';

export function addLink(url, name) {
  return { type: types.ADD_LINK, url, name };
}
