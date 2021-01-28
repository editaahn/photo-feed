# Photo Feed

## 사용 기술
- React
- 상태 관리: Context API
- Styling: Sass

## 기본 요구 사항 
1. 디자인에 부합하는 웹 PC화면 구현
2. 사진 리스트 구현
- 사용자가 어느정도 스크롤을 진행함에 따라 지속적으로 다음 페이지 사진을 불러온다.
- 빈 값이 나올때까지 지속적으로 Ajax를 통해서 다음 페이지를 불러온다.
3. 스크랩 기능
- 각각의 사진을 스크랩 할 수 있다.
- 스크랩 버튼을 누른 경우 localStorage를 이용하여 스크랩한 사진 정보를 저장한다.
- 스크랩이 된 경우에는 스크랩 버튼 색상이 파란색으로 변한다.
- 파란색인 경우에는 스크랩을 취소한다.
- 이후 새로고침 하였을때, 스크랩된 사진의 경우 스크랩된 상태로 표시되어야 한다.
4. 필터 기능
- 스크랩한 것만 모아보기 기능을 사용한 경우 스크랩된 사진만 불러온다.

## 추가 구현 사항
5. 스크랩/스크랩 취소할때 사용자와의 인터랙션
- 처리 후 토스트팝업을 출력한다.
- 취소 시 사용자의 의사를 확인한다.
6. 기타
- 필터 기능 상단 fixed
- 그리드 및 반응형
- Notice 출력: 로딩 / 로드된 컨텐츠 없을 시 / 무한 스크롤 종료 시 등