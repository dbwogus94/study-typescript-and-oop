/**
 * Q) Let's make a calculator 🧮
 */
{
  type CalculateMode = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  /**
   * My Answer
   * @param mode
   * @param x
   * @param y
   * @returns
   */
  function calculate(mode: CalculateMode, x: number, y: number): number {
    const calculate = getCalculate(mode);
    return calculate(x, y);

    function getCalculate(mode: CalculateMode): Function {
      return {
        add: function (x: number, y: number) {
          return x + y;
        },
        substract: function (x: number, y: number) {
          return x - y;
        },
        multiply: function (x: number, y: number) {
          return x * y;
        },
        divide: function (x: number, y: number) {
          return x / y;
        },
        remainder: function (x: number, y: number) {
          return x % y;
        },
      }[mode];
    }
  }

  type Commend = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  /**
   * Ellie Answer
   * @param commend
   * @param a
   * @param b
   * @returns
   */
  function calculate2(commend: Commend, a: number, b: number): number {
    switch (commend) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      case 'remainder':
        return a % b;
      default:
        throw new Error(`[calculate] unknwon command - ${commend}`);
      /* 
        Q) Union 타입으로 처리했음에도 default에서 에러를 처리하는 이유?
        A) 미래에 Commend에 타입이 추가되는 경우를 위함이다.
        예를 들어 처음 정의된 Commend 타입에 몇달 뒤 새로운 타입이 추가된다면?
        타입이 추가 되었다면 해당 타입을 사용하는 모든 곳에 대응을 해야한다.
        이때 개발자가 calculate2에 추가된 타입에 대한 case문을 만들지 않는다면
        이 경우 default문이 실행될 것이다. 
        그리고 던저진 에러 메세제를 통해 오류를 파악하고 대응할 수 있게 된다.
      */
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
