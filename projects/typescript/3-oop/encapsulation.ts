/**
 * # OOP 캡슐화(encapsulation)
 * - 객체의 속성(data fields)와 행위(메서드, method)를
 *   하나로 묶고 실제 구현 내용 일부를 외부에 감추어 은닉한다.
 * - 아래 현실의 고양이와 고양이 class가 있다. 두 관계를 보며 캡슐화를 이해해 본다.
 */

/**
 * ## 현실) 고양이
 * 고양이가 있다.
 * 고양이는
 *  - 배고파 할 수도 있고,
 *  - 배부를 수도 있고,
 *  - 지루해 할 수 있고
 *  - 행복해 할 수 있다.
 *  이러한 고양이의 내부 상태는 외부에서 직접 바꿀 수는 없다.
 *  하지만 고양이가
 *  - 배고프면 밥을 주어 배부르게 할 수 있고,
 *  - 지루해면 놀이를 하여 행복하게 할 수 있다.
 *  즉, 어떠한 행동을 통해 고양이의 상태를 바꿀 수 있다.
 */

/**
 * ## class로 정의 한다면
 * - 변경할 수 없게 할 속성(필드)은 캡슐화(private) 한다.
 * - 속성을 변경하고 싶다면 행동(메서드)을 통해 변경하도록 한다.
 */
{
  class Cat {
    // (캡슐화)외부에서 바꿀 수 없는 상태를 가진다.
    private state: 'hungry' | 'full' | 'boring' | 'happy';

    // 밥을 줘서 배부르게 할 수 있다.
    feed(): void {
      this.state = 'full';
    }

    // 놀이를 통해 상태를 행복하게 할 수 있다.
    play(): void {
      this.state = 'happy';
    }

    printState(): void {
      console.log(`고양이는 ${this.state}한 상태다.`);
    }
  }

  const cat: Cat = new Cat();
  // cat.state  private이기 때문에 고양이 내부 상태 접근 불가!!

  /* 외부에서는 행동을 통해 고양이의 상태를 바꿀 수 있다. */
  cat.feed();
  cat.printState();
  cat.play();
  cat.printState();
}
