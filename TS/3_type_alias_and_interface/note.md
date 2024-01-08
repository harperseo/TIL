## 타입 별칭 (Type Aliases)

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

- 특징</br>
  간단하게 정의 가능</br>
  한번 정의로 재사용가능</br>
  재정의가 불가능

```typescript
const name: string = "seo";
//위의 타입지정을 타입별칭을 사용하면 아래와 같다
type MyName = string;
const name: MyName = "seo";

//배열이나 오브젝트, 제네릭에도 사용가능하다
type Developer = {
  name: string;
  skill?: string;
  age: number;
};

//함수의 타입지정
function foo(a: string): number {
  return 10;
}
//위의 함수를 별칭으로 등록하는 방법 - 함수 표현식에서만 사용가능
type Foo = (a: string) => number;
let foo: Foo = function () {};

//오브젝트 안의 함수
let members = {
  name: "kim",
  plusOne(a: number) {
    return a + 1;
  },
  changeName: () => {
    console.log("test");
  },
};
type MemberType = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};
```

## 인터페이스 (Interface)

인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미함. 타입스크립트에서는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있다.

- 객체의 스펙(속성과 속성의 타입)
- 함수의 파라미터
- 함수의 스펙(파라미터, 반환 타입 등)
- 배열과 객체를 접근하는 방식
- 클래스
- 타입 별칭과 비슷하지만 인터페이스의 경우에는 타입의 확장이 가능하므로 type 보다는 interface로 선언해서 사용하는 것이 좋다.
- 외부 라이브러리 같은 경우에는 커스텀하기 쉽도록 interface가 많다.

```typescript
//인터페이스의 경우에는 클래서처럼 = 가 필요없다.
interface Developer {
  name: string;
  skill?: string;
  age: number;
}
//extends가 가능하다
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let student: Student = { name: "kim" };
let teacher: Teacher = {
  name: "kim",
  age: 20,
};
//중복선언이 가능하다, 중복해서 선언하면 자동으로 합쳐진다 (extends) 같은 속성은 중복이 안된다.
interface Student {
  score: number;
}
let student: Student = { name: "kim", score: 100 };
```
