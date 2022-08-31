import type { GetServerSidePropsContext } from 'next';
import axios from './axios';
import cookies from 'next-cookies';

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
