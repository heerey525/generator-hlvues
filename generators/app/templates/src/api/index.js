import axios from '@/utils/api.request';

// 分页查询角色列表
export const getUserInfo = () => {
  return axios.request({
    url: '/users/heerey525',
    method: 'get'
  });
};