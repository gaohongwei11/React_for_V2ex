import * as home from './action-type';

// 保存列表数据
export const saveList = list => {
  return {
    type: home.SAVELIST,
    list
  }
}


// 请客数据
export const clearData = () => {
  return {
    type: home.CLEARDATA,
  }
}

