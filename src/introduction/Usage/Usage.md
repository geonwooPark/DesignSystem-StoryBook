# <span id='top'>TEAM94</span>

## 소개

**Figma를 사용하여 직접 UI를 디자인한 후, 디자인 시스템 개발하여 스토리북과 라이브러리에 배포하였습니다.**
<br/>
**프로젝트마다 반복되는 컴포넌트 사용이 비효율적인 작업으로 생각되어 디자인 시스템을 만들어 npm에 라이브러리 형태로 배포하여 생산성을 향상하고자 하였습니다.**
<br/>
**앞으로 지속적인 업데이트와 피드백을 통해 디자인 시스템을 더욱 발전시키고자 합니다.**

## 적용 방법

먼저, 라이브러리를 다운 받아주세요.

```bash
npm i design-system-team94
```

그리고 tailwind.config 파일에 아래의 설정을 추가한 후 사용해주세요!

```js
module.exports = {
  presets: [require('design-system-team94/tw-config/preset')],

  content: [
    ...,
    './node_modules/design-system-team94/**/*.js'
  ],
}
```
