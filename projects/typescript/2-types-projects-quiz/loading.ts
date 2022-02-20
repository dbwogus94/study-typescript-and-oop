{
  /**
   * Q) Print Loading State
   */

  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  /**
   * My Answer
   * @param loadState
   */
  function printLoginState(loadState: ResourceLoadState): void {
    const { state } = loadState;
    const printState = (message: string) => console.log(message);

    switch (state) {
      case 'loading':
        printState('👀 loading...');
        break;
      case 'success':
        const { response } = loadState;
        printState(`😃 ${response.body}`);
        break;
      case 'fail':
        const { reason } = loadState;
        printState(`😱 ${reason}`);
        break;
      default:
        throw new Error(`[printLoginState] unknwon state - ${printLoginState}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
