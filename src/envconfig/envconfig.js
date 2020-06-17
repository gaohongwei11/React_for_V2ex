/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//www.v2ex.com';
if(process.env.NODE_ENV === 'development'){
  baseURL = '/';
}else{
  baseURL = '//www.v2ex.com';
}


export default {imgUrl, baseURL}