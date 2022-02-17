/**
 * # 1-8-enum
 * - 열거 상수
 * - js에서는 지원하지 않는 타입이다.
 */

// ## JavaScript에서 enum 비슷하게 만드는 방법
{
  // 상수 선언 방법
  const MAX_MUM = 6;
  const MAX_STUDENTS_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // ...

  // enum을 만드는 방법
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 3 });
  const dayOfToday = DAYS_ENUM.MONDAY;
}

/*  
  ## TS Enum 사용
  - 열거형 상수
  - TS에서 Enum은 특정 경우에 타입을 보장하지 않는다.
  - 때문에 Enum보다 Union을 사용한 타입정의를 사용하는 것을 권장한다.
*/
{
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }

  let day: Days = Days.Sunday;
  console.log(day);

  // **TS에서는 Enum을 사용하지 않는 것이 좋다고한다.
  // **이유는 타입을 보장하지 못하기 때문이다.

  // ex) day에 enum에 값이 아닌 다른 값을 할당
  day = 10;
  // => 이 처럼 TS 컴파일러가 에러를 내보내지 않는다.
  // => 심지어 js로 컴파일되어 실행되어도 에러를 내보내지 않는다.
  // => 즉, 런타임에서만 발견할 수 있는 에러가 되는 것이다.

  // **값을 명시적으로 부여한 경우에는 에러를 내보내지 않는다.
  enum Days2 {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
  }

  let day2: Days2 = Days2.Sunday;
  // day2 = 'hello' ERROR!
  // => enum의 값을 문자열로 지정한 경우에는 에러를 내보낸다.
  console.log(day2);

  // ### Union을 사용한 상수 선언
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  let dayOfWeek: DaysOfWeek = 'Saturday';
  // dayOfWeek = 'hello' ERROR!
  // => 이 처럼 Union은 Enum이 사용되는 곳에 왠만하면 대체가 가능하다.
  // => 때문에 Union으로 대체하기 힘든곳에만 Enum을 사용하는 것을 권장한다.
}
