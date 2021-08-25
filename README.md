# MoonTube

## 소개
Youtube API를 활용하여 만든 웹페이지

## 진행 기간
210622 ~ 2120630

## 사용 기술
HTML, CSS(Post-CSS), JavaScript, React(CRA)

## 사용 서비스
Postman, Youtube API

## 페이지 구성
### 1. 영상 목록
![image](https://user-images.githubusercontent.com/80687334/130794098-fa2ff6b1-2386-4fdf-afdf-a718d018e943.png)

사이트의 첫 페이지로, Most Popular로 분류된 영상들이 출력된다.

### 2. 검색 목록
![image](https://user-images.githubusercontent.com/80687334/130799753-24a19577-cb9c-4825-b58c-81f4ee99bd39.png)

원하는 키워드를 입력하고 검색을 하면 키워드에 맞는 영상 목록이 출력된다.

### 3. 영상 시청
![image](https://user-images.githubusercontent.com/80687334/130800593-3f99aa35-e75a-4f9c-8daa-67d33158effe.png)

선택한 항목의 영상, 제목, 채널 이름, 그리고 설명이 출력되고 검색 목록은 오른쪽에 세로로 정렬된다.

<img width="600" src="https://user-images.githubusercontent.com/80687334/130801683-722ccede-5688-4b80-9166-8960cc19b00e.png" />

화면의 크기가 작아질 시 오른쪽에 세로로 정렬된 검색 목록이 아래로 내려가도록 반응형 구현을 했다.

## 진행 상황
210622: 웹페이지 제작을 위한 초기세팅 <br />
210628: VideoList, VideoItem, VideoDetail, SearchHeader 기본 구현 <br />
210629: 검색할 시 영상이 사라지고 검색리스트 전체가 출력되도록 구현, axio를 활용하여 fetch 함수 대체 <br />
210630: 반응형 css 적용
