export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://api.foo.com" // 개발모드가 아닌, 실제 배포 url로 연결되었을 때. (실제 api 주소가 안나와서 이름 대충 지음)
    : "/local"; // 개발모드일 때 (로컬 혹은 msw로 이동. 지금 이 프로젝트에는 msw가 아예 없습니다.)
