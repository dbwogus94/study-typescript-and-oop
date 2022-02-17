/**
 * # 1-3-array
 * 배열과 튜플을 언제 사용해야 할지 공부한다.
 */

/* ## Array */
{
  const fruits: string[] = ['🍌', '🍓', '🍎'];
  const scroes: Array<number> = [1, 2, 4];

  // Q) string[] VS Array<string>?
  // A) 문법상 큰 차이가 없다고 한다.
  // A) 단 string[]만 readonly를 지원하는 등의 차이가 있다.

  function printArray(fruits: readonly string[]) {}
  // function printArray2(fruits: readonly Array<string>) {} ERROR!
}

/* ### Tuple 
  - 서로 다른 데이터 타입을 담을 때 사용한다.
  - 사용을 권장하지 않음 
  - Tuple 보다 interface, type alias, class 사용을 권장한다.
*/
{
  // Tuple 선언 방법
  let student: [string, number];
  // Tuple 할당 방법
  student = ['name', 123];

  // Tuple 값 사용 방법1: index를 사용하여 접근
  student[0]; // name
  student[1]; // 123

  // ** Tuple은 여러 타입을 선언하여 사용할 수 있기 때문에 편리하다.
  // ** 하지만 값을 사용할 때 property가 아닌 index를 사용하여 접근 해야한다.
  //  index를 사용하기 때문에 코드를 이해하는게 복잡해지고 가독성이 떨어지는 문제가 있다.

  // Tuple 값 사용 방법2: Object Destructuring 사용
  const [name, age] = student;

  // ** 이 방법을 사용하면 index를 사용하여 접근하지 않아도 된다.
  // ** 하지만 사용하는 곳이 다르다면 변수의 값을 명시하기 위해 선언부를 다시 찾아야 한다.
  //  때문에 이 또한 코드의 가독성을 떨어지게 한다.

  // ex) Tuple 대신 interface 사용 예시
  interface Student {
    name: string;
    age: number;
  }

  let student2: Student;
  student2 = { name: 'name2', age: 40 };
  student2.name;
  student2.age;

  // ** 다른 타입을 하나의 자료형에 저장할 수 있고
  // ** 값을 사용할때도 명시적으로 속성을 알 수 있기 때문에 코드 가독성면에서도 좋다.
}
