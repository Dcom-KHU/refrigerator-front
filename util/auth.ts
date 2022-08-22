import axios from 'axios';
import cookies from 'react-cookies';

export const setToken = (accessToken: string, refreshToken: string) => {
    axios.defaults.headers.common['Authorizaiton'] = 'Bearer ' + accessToken;
    console.log(axios.defaults.headers);
    cookies.save('accessToken', accessToken, {});
    cookies.save('refreshToken', refreshToken, {});
};
