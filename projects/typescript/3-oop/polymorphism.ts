/**
 * # OOP 다형성(polymorphism)
 * - 자식 클래스는 부모 클래스의 모든 것을 다양한 형태로 재정의(Overridding) 할 수 있다.
 * - 자식 클래스는 부모 클래스의 기능을 확장하거나 변경 할 수 있다.
 */

/* ex) 부모 클래스 Animal과 자식 클래스 Dog, Cat, Pig를 통해 다형성을 알아본다.*/

{
  /**
   * 부모 클래스 Animal
   */
  class Animal {
    makeSound(): void {
      throw Error('자식 클래스에서 구현...');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Dog
   */
  class Dog extends Animal {
    // Animal의 makeSound를 자식 클래스인 Dog에서 재정의(Overridding)한다.
    makeSound(): void {
      console.log('멍멍');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Cat
   */
  class Cat extends Animal {
    // Animal의 makeSound를 자식 클래스인 Cat에서 재정의(Overridding)한다.
    makeSound(): void {
      console.log('냐옹');
    }
  }
  /**
   * Animal을 상속한 자식 클래스 Pig
   */
  class Pig extends Animal {
    // Animal의 makeSound를 자식 클래스인 Pig에서 재정의(Overridding)한다.
    makeSound(): void {
      console.log('꿀꿀');
    }
  }

  const dog: Animal = new Dog();
  const cat: Animal = new Cat();
  const pig: Animal = new Pig();

  /* 자식 클래스는 부모클래스의 makeSound를 재정의하여 사용한다.
    - 즉, 자식
  */
  dog.makeSound();
  cat.makeSound();
  pig.makeSound();
}
