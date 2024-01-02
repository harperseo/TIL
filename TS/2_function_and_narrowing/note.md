## 함수의 타입지정

함수를 사용할 때엔 파라미터와 리턴값을 아래와 같이 두 곳에서 타입을 지정한다.

```typescript
function foo(x: number): number {
  return x * 2;
}
```

- 파라미터가 옵션 & 리턴값이 없을 경우

```typescript
function foo(x?: number): void {
  console.log("test");
}
// 여기서 ?는 x : number | undefined와 같은 의미
```

## Type Narrowing

> n. narrowing ; 좁아지는 과정, 좁히기

함수 처리 시 파라미터의 타입범위를 좁혀 타입별로 특정 처리를 하도록 하는 과정을 통칭한다.

```typescript
function addLeg(legs: number | string) {
  return (legs = legs + 1);
}
// error - Operator '+' cannot be applied to types 'string | number' and 'number'.ts(2365)
```

1. truthy 확인

   ***

   조건문을 사용해 해당 인자 혹은 변수가 truthy인지를 확인하고 조건에 따라 처리를 한다.

   ```typescript
   function addLeg(legs: number | string) {
     if (animal.legs) {
       return animal.legs + 1;
     } else {
       return false;
     }
   }
   ```

2. typeof 타입가드
   ***
   인자의 타입을 확인해서 타입별로 조건문을 나누어 처리한다.
   ```typescript
   function double(item: string | number) {
     if (typeof item === "string") {
       return item.concat(item);
     } else {
       return item * 2;
     }
   }
   ```
3. instanceof 타입가드

   ***

   instanceof 연산자를 사용해 객체가 특정 클래스에 속하거나 상속받는지 확인한 후 조건을 좁혀서 처리한다.

   ```typescript
   class Person {
     constructor(public firstName: string, public surname: string) {}
   }
   class Organisation {
     constructor(public name: string) {}
   }
   type Contact = Person | Organisation;

   function sayHello(contact: Contact) {
     if (contact instanceof Person) {
       console.log("Hello " + contact.firstName);
     }
   }
   ```

4. in 타입가드

   ***

   in 연산자를 사용해 객체 내의 프로퍼티가 존재하는 지 확인한 후 조건에 따라 타입을 좁혀서 처리한다.

   ```typescript
   //instanceof 타입 가드는 interface 혹은 타입 별명(aliases)들에는 작동하지 않으므로 in 연산자를 사용한다.
   interface Person {
     firstName: string;
     surname: string;
   }
   interface Organization {
     name: string;
   }
   type Contact = Person | Organisation;

   function sayHello(contact: Contact) {
     if ("firstName" in contact) {
       console.log("Hello " + contact.firstName);
     }
   }
   ```

5. type predicate 타입가드

   ***

   boolean값을 반환하고 true가 반환되는 경우, value is type으로 타입을 명시하는 타입가드

   ```typescript
   const isRequiredAndNumberAndNotZero = (value: any): value is number => {
     return isNumber(value) && isNotZero(value) && isRequired(value);
   };
   const isRequired = (value: any): value is any => {
     return value !== null && value !== undefined;
   };
   const isNumber = (value: any): value is number => {
     return typeof value === "number";
   };
   const isNotZero = (value: number | string): value is number => {
     return Number(value) !== 0;
   };
   type StringOrNumber = string | number;
   const data: StringOrNumber = await fetchData();
   //isRequiredAndNumberAndNotZero가 type predicate를 사용한 type guard
   if (isRequiredAndNumberAndNotZero(data)) {
     console.log(data + 10);
   } else {
     console.log(data + "십");
   }
   ```

6. asserts X is type 타입단언
   ***
   타입에 따른 조건을 충족시키지 못하면 런타임 에러를 발생, 정상적으로 리턴되면 asserts로 지정한 type으로 인수의 type이 정해진다.
   ```typescript
   function assertIsNumber(x: unknown): asserts x is number {
     if (typeof x !== "number") {
       throw new Error("BOOM");
     }
   }
   ```
