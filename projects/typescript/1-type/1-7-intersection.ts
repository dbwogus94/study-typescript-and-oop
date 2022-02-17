/**
 * # 1-7-intersection.ts
 * - Union이 OR의 개념이였다면
 * - intersection는 AND의 개념으로 볼 수 있다.
 */
{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // Student & Worker 합친 모든 속성을 가지고 있다.
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'jay',
    score: 1,
    empolyeeId: 123,
    work: () => console.log('void 함수'),
  });
}
