import axiosWithAuth from './axiosWithAuth';

export const fetchColors = () => {
    return(
    axiosWithAuth()
    .get('api/colors')
    .then(res => res))
}; 