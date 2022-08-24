import type { GetServerSidePropsContext } from 'next';
import axios from './axios';
import cookies from 'next-cookies';

//쿠키에 accessToken만 추출
export const getAccessTokenWithCookie = (cookie: string | undefined) => {
    const accessToken = cookie?.includes('accessToken')
        ? cookie!.split('=')[1].split(';')[0]
        : '';
    const refreshToken = cookie?.includes('refreshToken')
        ? cookie!.split('=')[2].split(';')[0]
        : '';
    return { accessToken, refreshToken };
};

export const stayLogin = async (ctx: GetServerSidePropsContext) => {
    const { accessToken, refreshToken } = cookies(ctx);
    try {
        if (accessToken) {
            const res = await axios({
                method: 'GET',
                url: '/user/my_profile/jwt',
                headers: { Cookie: ctx.req.headers.cookie as string },
            });
            return res.data;
        }
    } catch (e) {
        console.log(e);
    }
    return;
};
