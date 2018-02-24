## react ide

- react를 이용한 간단한 ide

### 개발환경
- 본 프로젝트는 [velopert/react-webpack2-skeleton](https://github.com/velopert/react-webpack2-skeleton)의 hmr branch 시작으로 만들어졌습니다.
- 다음과 같이 devServer가 수정되었습니다.
```js
devServer: {
    contentBase: paths.context,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: false,
    disableHostCheck: true
},
```

### 추가 설치
- reactstrap
```bash
$ npm install bootstrap@4.0.0-beta.2 --save
$ npm install --save reactstrap@next
```
참고 - [reactstrap](https://reactstrap.github.io/)
- redux
```bash
$ npm install --save redux react-redux
```
