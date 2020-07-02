import http from './request';

export const getNewsTypes = (params) => http.get('/news/types', {params: { ...params }});
export const getNewsList = (params) => http.get('/news/list', {params: { ...params }});
export const getNewsDetail = (params) => http.get('/news/details', {params: { ...params }});
export const getSentence = (params) => http.get('/daily_word/recommend', {params: { ...params }});
