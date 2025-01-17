import request from "./request"
import mockAxios from './mockAxios'

export const getBaseCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
export const getBannerList = () => mockAxios({ url: '/banner', method: 'get' })
export const getFloorList = () => mockAxios({ url: '/floor', method: 'get' })
export const postSearchList = (params) => { return request({ url: '/list', method: 'post', data: params }) }
export const getItemSkuId = (skuId) => { return request({ url: `/item/${skuId}`, method: 'get' }) }