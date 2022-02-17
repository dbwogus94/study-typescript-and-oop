/**
 * # 1-9-inference
 * - 타입 추론은 사용해도 될까?
 * - 아래서 설명한다.
 */

/**
  ## Type Inference
  - TS 컴파일러는 많은 경우에 타입을 자동으로 추론한다.
    - 함수에 파라미터를 지정하지 않아 any로 타입을 추론하는 경우
    - 함수에 Default parameter을 사용하는 경우 
    - 함수의 파라미터를 통해 함수의 리턴 결과를 추론하는 경우 
    - 등등
  - 위 처럼 많은 경우에 TS는 타입을 추론한다.
  - 하지만 실제 프로젝트는 대규모로 코드가 모여 동작하기 때문에 
  - 뻔한 경우가 아니면 타입 추론을 믿기 보다는 명시적으로 타입을 작성하는 것을 권장한다.
 */
{
  let type: string = 'hello';

  // ### 자동으로 any 할당
  // 함수의 파라미터에 타입을 명시하지 않으면 묵시적으로 any로 선언된다.
  // 때문에 아래처럼 message에 ... 이라는 Warning 표시가 뜬다.
  function print(message) {
    console.log(message);
  }

  // ### Default parameter 사용
  // TS는 디폴트 값을 부여하면 자동으로 디폴트 값의 type로 추론한다.
  // 즉, 아래의 message의 경우 타입이 string로 추론된다.
  function printMessage2(message = 'hello') {
    console.log(message);
  }

  // ### 함수의 return을 추론한다.
  function add2(x: number, y: number) {
    return x + y;
    // number + number 이기 때문에 결과를 number로 추론한다.
  }

  // 함수의 결과를 추론하기 때문에 result의 type도 추론된다.
  const result = add2(1, 2);
}
