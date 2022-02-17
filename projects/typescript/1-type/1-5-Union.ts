/**
 * # Union Types
 * - 하나의 타입만 강제하는 것이 아니라 여러 타입을 사용할 수 있게 하는 옵션이다.
 * - 즉, OR과 처럼 인식하면 된다.
 */
{
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
}

// ## Union Types 활용 예시
{
  // ### 예시 1) 로그인 함수 정의
  // - function: login -> success, fail

  // 성공 결과 타입 정의
  type SeccessState = {
    response: {
      body: string;
    };
  };

  // 실패 결과 타입 정의
  type FailState = {
    reason: string;
  };

  // 로그인 함수가 사용할 타입 정의
  type LoginState = SeccessState | FailState;

  // 로그인 함수 정의
  function login(id: string, password: string): Promise<LoginState> {
    // ...
    return new Promise(res => {
      res({
        response: {
          body: 'login seccess',
        },
      });
    });
  }

  // ### 예시 2) 로그인 상태를 출력하는 함수 정의
  // - printLoginState(state)
  // - success -> body
  // - fail -> reason

  // 보편적으로 사용되는 방법이다
  const printLoginState = (state: LoginState) => {
    if ('response' in state) {
      console.log(`성공: ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  };

  const state: FailState = { reason: '로그인 실패' };
  printLoginState(state);

  // ** 위 방법도 좋은 방법이지만 TS에서는 "discriminated Union" 이라는 더 괜찮은 방법을 지원한다.
  // **  discriminated Union은 다음 챕터(1-6-discriminated)에서 설명한다.
}
