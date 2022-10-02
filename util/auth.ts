import type { GetServerSidePropsContext } from 'next';
import axios from './axios';
import { AxiosError } from 'axios';
import cookies from 'next-cookies';

//로그인
export const signIn = async (email: string, password: string) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/user/login',
            data: { email, password },
        });
        if (200 <= res.status && res.status < 300) {
            return res.data;
        }
    } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status == 400 || error.response?.status == 500) {
            alert('비밀번호가 일치하지 않습니다.');
        } else if (error.response?.status == 404) {
            alert('존재하지 않는 이메일입니다.');
        }
    }
};

//회원가입
export const signUp = async (
    email: string,
    password: string,
    name: string,
    nickname: string
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/user/join',
            data: { email, name, nickname, password },
        });
        if (200 <= res.status && res.status < 300) {
            return res.data;
        } else throw new Error();
    } catch (err) {
        const error = err as AxiosError;
        if (error.response?.status == 400) {
            alert('이미 존재하는 이메일입니다.');
        }
    }
};

//로그아웃
export const logOut = async (userId: number) => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/user/logout',
            headers: { userId: userId.toString() },
        });
        if (200 <= res.status && res.status < 300) {
            return res;
        } else throw new Error();
    } catch (e) {
        console.log(e);
    }
};

//새로고침시 로그인 유지
export const stayLogin = async (ctx: GetServerSidePropsContext) => {
    const { accessToken, refreshToken } = cookies(ctx);
    try {
        if (accessToken && accessToken !== '') {
            const res = await axios({
                method: 'GET',
                url: '/user/my_profile/jwt',
                headers: { Cookie: ctx.req.headers.cookie as string },
            });
            return res.data;
        } else if (refreshToken && refreshToken !== '') {
            await axios({
                method: 'GET',
                url: '/token/refresh',
                headers: { Cookie: ctx.req.headers.cookie as string },
            });
        } else {
            await axios({
                method: 'GET',
                url: '/user/logout',
                headers: { Cookie: ctx.req.headers.cookie as string },
            });
        }
    } catch (e) {
        console.log(e);
    }
};
