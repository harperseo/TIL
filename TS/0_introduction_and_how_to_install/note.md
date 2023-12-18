# TypeScript

> 자바스크립의 다이나믹 타이핑의 단점을 보완하기 위해 개발된 언어.
> 다이나믹 타이핑이란 변수를 선언시 타입을 지정하지 않고 런타임시 타입이 결정되는 방식으로 작은 규모의 프로그램으로는 빠르게 편하게 작성할 수 있다는 장점이 있으나, 프로젝트의 규모가 커지고 협업하는 개발자수가 늘어날 수록 예기치 못한 에러가 생길 가능성이 많다. 이를 보완하기 위해서 타입스크립트를 사용하여 예기치 못한 타입 버그를 방지하고 에러메세지를 명확하게 작성하는 것이 좋다.

### 설치방법

1. node.js 설치

   - [Download Link](https://nodejs.org/en)

2. 타입스크립트 설치

   ```bash
   npm install -g typescript
   ```

3. TS버전 확인
   ```bash
   tsc -version
   ```

### 동작확인

1. test.ts 파일을 생성
2. 파일을 열고 아래의 코드를 작성 후 저장
   ```javascript
   let message: string = "hello!";
   console.log(message);
   ```
3. 컴파일러의 설정 - config 파일생성
   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs"
     }
   }
   ```
4. 컴파일러로 JS로 변환 - 터미널에서 아래의 명령어를 실행
   ```bash
   tsc -w
   ```
5. 컴파일 된 JS파일 test.js 확인
   ```javascript
   var message = "hello!";
   console.log(message);
   ```
