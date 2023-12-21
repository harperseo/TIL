## 타입스크립트 기본 문법

타입 표기는 값 뒤에 콜론(:)을 붙이고 타입을 표기한다.

```typescript
//문자열
let familyname: string = "seo";
//숫자
let age: number = 31;
//불리언
let marriage: boolean = true;
//배열
let members: string[] = ["kim", "park"];
//객체
let favoriteSongs: { singer: string; title: string } = {
  singer: "성시경",
  title: "좋을텐데",
};
```

### Union Type

변수를 가변적으로 다루고 싶을 때 사용 가능한 타입

```typescript
let age: string | number;
```

### Any Type

아무 자료나 할당할 수 있는 타입. 일반적으로는 사용하지 않지만, 비상시 변수 타입체크 해제 용도로 사용

### 함수의 타입지정

```typescript
//function
function foo() {
  return x * 2;
}

//타입지정
function foo(x: 파라미터 타입): 리턴값의 타입 {
  return x * 2;
}
//return값을 void로 하면 예상치못한 return을 방지
function foo(x: number) :void {
  return x * 2;
}
//파라미터가 옵션일 경우엔 ?를 붙인다 == undefined가 포함된 union타입
function foo(x?: number) :void {
  return x * 2;
}
```
