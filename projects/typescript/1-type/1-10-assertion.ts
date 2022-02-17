/**
 * # 1-10-assertion
 * - assertion은 개발자가 타입을 강제로 변경(케스팅)하는 것을 말한다.
 * - TS 컴파일러는 JS로 컴파일되어 JS와 같이 동작하기 위해 type를 강제하는 경우가 많다.
 * - 이때 강제된 타입을 assertion을 사용하여 변경하는 경우가 있다.
 * - 하지만 assertion은 TS을 무시하고 강제하는 기능이기 때문에 정말로 필요할 때만 사용해야한다.
 */

/* 
  ## assertion 잘못된 사용 예시 1)
  -외부 JS모듈의 함수의 리턴 타입이 변경된 경우
  - 2) 브라우저에서 DOM요소가 있다가 삭제된 경우
*/
{
  // 변경 전 함수
  // function jsFunc(): any {
  //   return 'hello';
  //   // 1) js 코드이다. 때문에 return의 타입은 any
  // }

  // 2) jsFunc의 리턴 타입은 any이다. TS는 result의 타입을 any로 추론한다.
  const result = jsFunc();

  // 3) 개발자가 result의 값을 100프로 문자열이라고 확신하여 케스팅한다.
  (result as string).length;

  // 4) 문제발생!! => jsFunc의 리턴 값이 숫자형으로 변경되었다.
  function jsFunc(): any {
    return 2; // 5) 라이브러리가 변경되어 결과가 숫자형으로 변경
  }

  (result as string).length; // 5) undefined 리턴
}

/* 
  ## assertion 잘못된 사용 예시 2)
  - 2) 리턴 타입에서 값이 없는 경우를 무시하는 하고 값이 있을 것이라고 확신하는 경우
*/
{
  // 1) 숫자 배열 또는 undefined를 리턴하는 함수
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // 2) 함수 사용
  const numbers = findNumbers();

  // 3) 결과 Union 타입에  ndefined가 있기 때문에 에러 발생
  // numbers.push(); ERROR!

  // 4) 개발자가 로직상 값을 있다고 확신하여 !연산자로 null이 아니라고 명시적으로 TS에게 알림
  numbers!.push(); // TypeError: Cannot read property 'push' of undefined 발생!!!!
}

/* 
  ## assertion 잘못된 사용 예시 3)
  - 브라우저에서 DOM요소가 있다가 삭제된 경우
*/
{
  // 1) html에 .class가 부여된 버튼이 있다.
  // 2) querySelector는 DOM이 없는 경우 null을 리턴한다.
  const button = document.querySelector('.class');

  // 3) 개발자는 현상황에 .class가 부여된 button이 있기 때문에
  // ! 연산자를 사용하여 코드를 작성하였다.
  // button!.nodeValue;

  // 4) 문제 발생!! 이후 html에서 .class의 값이 변경되었다.
  button!.nodeValue; // ERROR 발생
}

/* 
  Q) 그렇다면 어떻게 assertion를 회피할까?
  A) 타입 가드를 활용한다.
  A) 위의 assertion 잘못된 사용 예시 3)을 타입 가드를 사용한 코드로 변경한다.
*/
{
  const button = document.querySelector('.class');

  // 이것이 타입 가드이다.
  if (button) {
    button.nodeValue;
  }

  // **타입 가드는 타입을 좁혀주는 메카니즘이다
  // => https://ui.toast.com/weekly-pick/ko_20210521#%ED%83%80%EC%9E%85-%EA%B0%80%EB%93%9C
}
