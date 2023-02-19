![header](https://capsule-render.vercel.app/api?type=rounded&color=auto&section=header&text=냉장고를+부탁해&fontSize=70)

'냉장고를 부탁해' 프로젝트의 프론트엔드 서버에 사용되는 레포지토리입니다.
## 👉 연계 Backend Repo
> https://github.com/Dcom-KHU/refrigerator-api-server

---

## 프로젝트 소개
'냉장고를 부탁해'는 자신의 냉장고 속 재료의 관리와 가지고 있는 재료에 맞는 음식 레시피 추천 서비스입니다.

## 개발 동기 및 개발 목적
냉장고에 있는 식재료로만으로 음식을 하면서 장보기 비용을 최소화하는 '냉장고 파먹기'가 유행중입니다.

또한 냉장고 속에 재료들을 잊고 있다가 유통기한이 지나 버리게 되어 환경 오염이 되는 경우가 많습니다.

'냉장고를 부탁해'는 이러한 사회 현상에 맞게, 자신의 냉장고 속 음식 재료들을 한번에 관리하고, 
냉장고 속 재료들로 만들 수 있는 레시피를 추천함으로써 환경 오염을 줄이고 경제적인 낭비를 줄이고자 서비스를 개발하게 되었습니다.

## 개발 환경 및 사용 기술
- FrontEnd : Next.js, TypeScript, Styled-Component
- BackEnd : Spring Boot, MySQL, Elastic Search, Kibana, Docker, EC2
- 공통 : Git, Postman
- 협업툴 : Notion, GitHub

## 페이지별 기능
### 메인 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908051-860a4fec-35ff-4cec-ad04-99893951dfa6.png" width="800" height="480"/>

로그인을 하지 않은 경우는 랜덤으로 오늘의 추천 음식이 나오며, 

로그인을 한 경우에는 사용자의 가진 재료로 만들 수 있는 음식 중 랜덤으로 오늘의 추천 음식이 나옵니다. 

오늘의 추천 음식은 매일 자정에 갱신 됩니다.

음식 종류(한식, 중식, 양식, 일식)에 따라 레시피를 조회가 가능하며, 검색을 통해서도 레시피 조회가 가능합니다.

우측 하단의 레시피 등록 버튼을 통해 레시피 등록이 가능합니다.

### 레시피 등록 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908700-4fb78838-21f5-47df-bbfa-4a3c5a8ca1ae.png" width="800" height="480"/>

로그인 상태에서만 가능하며, 

음식 이름, 음식 설명, 음식 종류, 음식 사진,

재료 이름, 재료 양, 재료 사진,

조리 방법을 등록할 수 있습니다.

같은 음식이라도 사람들의 레시피가 다를 수 있으므로 음식 이름이 중복되어도 등록 될 수 있게끔 하였습니다. 

### 로그인 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908281-e20f75da-046a-44c8-b6ae-086ace0944e1.png" width="800" height="480"/>

아이디와 비밀번호를 입력받는 일반 로그인과, 네이버, 카카오를 통한 소셜 로그인을 지원합니다.

### 회원가입 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908404-5e6f01df-c69f-4d82-8922-63bf20403749.png" width="800" height="480"/>

아이디(이메일), 비밀번호, 이름, 닉네임을 입력 받아 회원가입을 진행합니다.

### 유저 정보 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908555-2078cdf0-37b0-4175-913e-9947954aea6d.png" width="800" height="480"/>

로그아웃과 닉네임, 비밀번호 변경이 가능합니다.

### 나의 냉장고 페이지
<img src="https://user-images.githubusercontent.com/82189072/219908874-087ccb01-f440-40e6-bd14-566ce0cdf932.png" width="800" height="480"/>
<img src="https://user-images.githubusercontent.com/82189072/219908875-43db023c-c68f-497f-ac0f-9a3b61889c71.png" width="800" height="480"/>

자신의 냉장고 속 재료들을 조회, 등록, 수정할 수 있으며,

유통기한 3일 이하의 재료들은 유통기한 임박 탭에서 조회할 수 있습니다.

우측 하단에 '내 재료로 요리하기'를 통해 유저 냉장고 속 재료로 만들 수 있는 음식 레시피들을 조회할 수 있는데,

레시피에 필요한 모든 재료가 있는 경우에만 레시피가 조회됩니다.

## 기대 효과
- 효율적인 냉장고 파먹기가 가능해져 불필요한 장보기가 줄 것으로 기대됩니다.
- 유통기한이 지나 버리게 되는 음식 재료가 줄어 환경오염이 줄 것으로 기대됩니다.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
