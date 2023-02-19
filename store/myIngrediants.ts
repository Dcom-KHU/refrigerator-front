import { atom } from 'recoil';
import { v1 } from 'uuid';

//나의 냉장고에서 사용할 재료들 test data
export const myIngrediants = atom({
    key: `myIngrediants/${v1()}}`,
    default: [],
});
