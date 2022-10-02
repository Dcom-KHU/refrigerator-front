import axios from './axios';

export const fetchIngredients = async (user: any) => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/refrigerator/getAll',
            headers: { userId: user.id !== null && user.id },
        });
        if (200 <= res.status && res.status < 300) {
            return res.data;
        } else throw new Error();
    } catch (e) {
        return null;
    }
};
export const addIngredient = async (
    name: string,
    expiredDate: string,
    userId: number
) => {
    try {
        if (name.trim() == '') throw new Error('잘못된 이름입니다.');
        const newIngrediant = {
            name,
            expiredDate: expiredDate + 'T23:59:59',
        };

        const res = await axios({
            method: 'POST',
            url: '/refrigerator/add',
            data: newIngrediant,
            headers: { userId },
        });
        if (200 <= res.status && res.status < 300) return true;
    } catch (err) {
        alert(err);
        return false;
    }
};

export const deleteIngredient = async (id: number, userId: number) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/refrigerator/delete/${id}`,
            headers: { userId },
        });
        if (200 <= res.status && res.status < 300) {
            return true;
        } else throw new Error();
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const modifyIngredient = async (
    id: number,
    name: string,
    expiredDate: string,
    userId: number
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/refrigerator/modify/${id}`,
            data: { id, name, expiredDate },
            headers: { userId },
        });
        if (200 <= res.status && res.status < 300) {
            return true;
        } else throw new Error();
    } catch (e) {
        console.log(e);
        return false;
    }
};
