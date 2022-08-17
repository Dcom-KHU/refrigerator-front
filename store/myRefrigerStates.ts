import { atom } from 'recoil';
import { v1 } from 'uuid';

//나의 냉장고 검색 input의 value state
export const myRefSearchState = atom<string>({
    key: `myRefSearchState/${v1()}`,
    default: '',
});

//재료를 추가 또는 수정 중인지 확인하는 state
export const isModifyingState = atom<boolean>({
    key: `isModifying/${v1()}`,
    default: false,
});
