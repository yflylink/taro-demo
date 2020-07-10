import Request from '../../utils/request';

export const demo = data => Request({
  url: '路径',
  method: 'POST',
  data,
});

export const init = data => 
Request({
  url:'/roter',
  method: 'GET',
  data
})
