/**
 * # 1-4-alias
 * - TS의 기본적인 type alias를 공부한다.
 */

/* ## Type Aliases 
  - TS에서 사용자 지정 타입을 정의할 때 사용한다.
*/
{
  // 원시타입을 신규 타입으로 정의
  type Text = string;
  const name: Text = 'jay';
  const address: Text = 'korea';

  // 객체를 신규 타입으로 정의
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'jay',
    age: 111,
  };

  console.log(student); // { name: 'jay', age: 111 }
}

/* ##  String Literal Type 
  - 특정 문자열로 타입을 지정할 때 사용한다.
  - 특정 숫자형으로 타입을 지정할 때 사용한다.
  ...
  - 즉, 특정 원시 타입으로 타입을 지정할 때 사용한다.
*/
{
  type Name = 'name';
  let myName: Name;
  myName = 'name';
  // myName = 'jay'; ERROR!

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  let isCat: Boal;
  isCat = true;
  // isCat = false; ERROR!
}
