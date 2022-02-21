{
  /**
   * # OOP 상속(inheritance)
   * 1. 객체간에는 상속이 가능하다.
   * 2. 상속의 관계는 주로 아래와 같이 불린다.
   *  - 부모(parent) 클래스 vs 자식(child) 클래스
   *  - super 클래스 vs sub 클래스
   *  - base 클래스 vs derived 클래스
   * 3. 자식 클래스는 부모 클래스의 모든 것을 사용하고 알 수 있다. (private 제외)
   * 4. 부모 클래스와 자식 클래스는 is a 관계를 가진다.
   */

  /* ex) 부모 클래스 Animal과 자식 클래스 Dog, Cat, Pig를 통해 상속을 알아본다.*/

  /**
   * 부모 클래스 Animal
   */
  class Animal {
    // this와 상속한 자식에게만 공유
    protected _origin: string = '동물';
    get origin(): string {
      return this._origin;
    }
    makeSound(): void {
      throw Error('자식 클래스에서 구현...');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Dog
   */
  class Dog extends Animal {
    makeSound(): void {
      console.log('멍멍');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Cat
   */
  class Cat extends Animal {
    makeSound(): void {
      console.log('냐옹');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Pig
   */
  class Pig extends Animal {}

  /* 모두 부모 클래스인 Animal타입으로 할당이 가능하다. */
  const dog: Animal = new Dog();
  const cat: Animal = new Cat();
  const pig: Animal = new Pig();

  /* 자식 클래스는 부모의 모든 것을 사용할 수 있다. */
  console.log(
    dog.origin === cat.origin && //
      dog.origin === pig.origin &&
      cat.origin === pig.origin
  );

  dog.makeSound();
  cat.makeSound();
  pig.makeSound();

  /* Animal과 자식 클래스는 IS a 관계를 가진다. */
  // 강아지는 동물이다(Dog is a Animal).
  console.log(`강아지는 동물이다: ${dog instanceof Animal}`);

  // 고양이는 동물이다(Cat is a Animal).
  console.log(`고양이는 동물이다: ${cat instanceof Animal}`);

  // 돼지는 동물이다(Pig is a Animal).
  console.log(`돼지는 동물이다: ${pig instanceof Animal}`);
}
