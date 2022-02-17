/**
 * # 1-1-basic
 * TS의 기본타입에 대하여 정리한다.
 */

/**
 * ## JavaScript의 타입
 * - Primitive: number, string, boolean, bigint, null, undefined, symbol
 * - Object: function, array
 */

/* ## TS의 기본 타입 
  - number, string, boolean, undefined, null
*/
{
  // ### number
  const num: number = -6;

  // ### string
  const str: string = 'hello';

  // ### boolean
  const boal: boolean = false;

  // ### undefined
  // - 할당되지 않은 상태, 보통 개발자가 선언하지 않고 로직중에 할당되도록 한다..
  let name: undefined; // x -> 단독사용 x
  let age: number | undefined;

  // ### null
  // - 명시적으로 빈값 선언
  let person: null; // x -> 단독사용
  let person2: string | null;
  // **로직중 할당이 되었는지 알 수 없음 === undefined을 사용
  // **로직중 명시적으로 빈값임을 알림  === null

  // ex) 함수에서 결과를 찾지 못했다면 undefined
  function find(): number | undefined {
    return /* ... */;
  }
}

/* ## TS에서 조심해서 사용해야 하는 기본 타입
  - unknown, any, object는 가능하면 지양해야하는 타입이다.
  - void, never는 함수에 사용된다.
*/
{
  // ### unknown
  // - 타입을 알 수 없음,
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;
  // **unknown 타입은 왠만하면 사용을 안하는 것이 좋다.
  // **꼭 사용해야한다면 any보다 unknown을 사용하는 것을 추천한다.
  // Q)그렇다면 왜 타입으로 있을까?
  // A) unknown은 주로 js라이브러리와 같이 사용된다.
  // A) 라이브러리가 TS를 지원하지 않는 경우 라이브러리에서 리턴되는 값을 주로 unknown으로 표시한다.

  // ### any
  // - 모든 타입을 허용
  let anything: any = 0;

  // ### object
  // - 원시타입을 제외한 모든 객체를 허용
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ name: 'dog' });
  acceptSomeObject([]);
  acceptSomeObject(() => {});

  // ### void
  // - 보통 void를 작성 여부는 팀마다, 회사마다 룰에 따른다.
  function print(): void {
    console.log('hello');
  }
  // ** void 또한 변수에 사용은 가능하지만 undefined만 할당하는 변수가 되기 때문에 사용하지 않는다.

  // ### never
  // - 절대 리턴하지 않는 함수를 선언할 때 사용
  // - 주로 에러를 던지는 함수나, 무한루프문를 호출하는 함수에 선언한다.
  function throwError(message: string): never {
    throw new Error(message);
  }

  function roop(message: string): never {
    while (true) {}
  }
}
