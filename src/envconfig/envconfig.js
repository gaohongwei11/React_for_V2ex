/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//www.v2ex.com';
if(process.env.NODE_ENV === 'development'){
  baseURL = '/api';
}else{
  baseURL = 'https://cnodejs.org/api/v1';
}


export default {imgUrl, baseURL}