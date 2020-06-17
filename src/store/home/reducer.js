import * as home from './action-type';

let defaultState = {
  list: ['1','2','3'], //主题列表
}
// 首页表单数据
export const list = (state = defaultState , action = {}) => {
  switch(action.type){
    case home.SAVELIST:
      console.log(action)
      return {...state, ...{list: action.list}};
    case home.CLEARDATA:
      return {...state, ...defaultState};
    default:
      return state;
  }
}

