/**
 * # 1-2-function
 * 함수에서 타입을 어떻게 활용할 수 있을지 공부한다.
 */

/* ## 1. 함수에 기본적인 TS 타입을 적용 */
{
  /* ex) 파라미터로 들어온 겂을 터하는 함수 */

  // JS
  // - 함수의 역할이 애매한 좋지 못한 코드
  // - 파라미터의 타입이 number인지 string인지 알 수 없음
  // - 결과 또한 숫자를 더하는 것인지, 문자를 더하는 것인지 알 수 없음
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  // -> 타입을 통해 구체적인 함수의 행동을 알 수 있게 된다.
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  /* ex) 비동기 통신을 결과를 리턴하는 함수 */

  // JS
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(200);
    });
  }

  // TS
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(200);
    });
  }
  // ** 함수에 TS를 사용하면 함수를 조금 더 구체적으로 설명할 수 있게 된다.
  // ** 또한 JSDoc를 사용할 필요없이 또는 최소화하여 문서화를 할 수 있게 된다.
  // ** 명시적으로 리턴 결과를 반환하기 때문에 오류 방어가 가능하다.
}

/* ## 함수에 TS에서 사용가능한 옵션 적용
   - optional, default, Rest  
*/
{
  // ### Optional paramenter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Jay');
  printName('Anna', undefined);

  // Optional paramenter를 사용하지 않고 두 번째 파라미터에 undefined 허용
  function printFullName(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  printFullName('Steve', 'Jobs');
  // printFullName('Jay');  ERROR!
  printFullName('Anna', undefined);

  // Q) 두 함수의 차이가 보이는가?
  // A) Optional paramenter를 사용한 printName의 경우 2번째 파라미터 자체를 사용하지 않아도 된다.
  // A) printFullName의 경우에는 두번째 파리미터를 생략 할 수 없다.

  // ### Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();

  // ### Rest Paramenter
  // - Spread 연산자를 사용하여 파라미터 정의
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
