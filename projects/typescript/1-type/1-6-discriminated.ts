/**
 * # 1-6-discriminated
 */

// ## 1-5에서 정의한 printLoginState 함수를 개선한다.
// - discriminated Union을 사용
// - discriminated: 차별의
{
  type SeccessState = {
    result: 'success'; // 공통된 property에 차별된 Union 값을 지정 === discriminated Union
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail'; // 공통된 property에 차별된 Union 값을 지정 === discriminated Union
    reason: string;
  };

  type LoginState = SeccessState | FailState;

  // printLoginState함수 구현
  function printLoginState(state: LoginState) {
    // discriminated Union 덕분에 값을 동일한 속성으로 분기가 가능하다.
    // + 이 방법을 사용하면 에디터에서 어떠한 Union 값이 있는지 힌트를 준다.
    if (state.result === 'success') {
      console.log(`성공: ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }

  const state: FailState = { result: 'fail', reason: '로그인 실패' };
  printLoginState(state);
}
