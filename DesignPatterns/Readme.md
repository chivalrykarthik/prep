# Design Patterns Overview

Design patterns are established solutions to common problems in software design. They were popularized by the book *"Design Patterns: Elements of Reusable Object-Oriented Software"*, published in 1994 by a group of four C++ engineers, often referred to as the "Gang of Four" (GoF). These patterns are categorized into three main types: Creational, Structural, and Behavioral patterns.

---

## **Creational Design Patterns**
Creational patterns deal with object creation mechanisms, aiming to create objects in a manner suitable to the situation.

### **Types of Creational Patterns:**
- **Singleton Pattern:** Ensures a class has only one instance and provides a global point of access to it.
- **Factory Method Pattern:** Defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.
- **Abstract Factory Pattern:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Builder Pattern:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- **Prototype Pattern:** Creates new objects by copying an existing object, known as the prototype.

---

## **Structural Design Patterns**
Structural patterns define how to compose classes and objects to form larger structures while keeping them flexible and efficient.

### **Types of Structural Patterns:**
- **Adapter Pattern:** Allows incompatible interfaces to work together.
- **Decorator Pattern:** Adds new functionality to an object dynamically.
- **Facade Pattern:** Provides a simplified interface to a larger body of code.
- **Proxy Pattern:** Provides a placeholder or surrogate for another object to control access to it.
- **Bridge Pattern:** Decouples an abstraction from its implementation so the two can vary independently. *(Ref: refactoring.guru)*
- **Composite Pattern:** Composes objects into tree structures to represent part-whole hierarchies. *(Ref: refactoring.guru)*
- **Flyweight Pattern:** Reduces memory usage by sharing as much data as possible with similar objects. *(Ref: refactoring.guru)*

---

## **Behavioral Design Patterns**
Behavioral patterns focus on communication and responsibility between objects.

### **Types of Behavioral Patterns:**
- **Chain of Responsibility Pattern:** Passes a request along a chain of handlers, where each handler can either process the request or pass it to the next handler.
- **Iterator Pattern:** Provides a way to access elements of a collection sequentially without exposing its underlying representation.
- **Observer Pattern:** Defines a dependency between objects so that when one object changes state, all its dependents are notified.
- **Command Pattern:** Encapsulates a request as an object, allowing parameterization of clients with different requests. *(Ref: refactoring.guru)*
- **Mediator Pattern:** Reduces coupling between classes by introducing a mediator object that handles communication. *(Ref: refactoring.guru)*
- **Memento Pattern:** Captures and restores an object’s internal state without violating encapsulation. *(Ref: refactoring.guru)*
- **State Pattern:** Allows an object to alter its behavior when its internal state changes. *(Ref: refactoring.guru)*
- **Strategy Pattern:** Defines a family of algorithms, encapsulates them, and makes them interchangeable. *(Ref: refactoring.guru)*
- **Template Method:** Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. *(Ref: refactoring.guru)*
- **Visitor Pattern:** Allows you to add further operations to objects without modifying them. *(Ref: refactoring.guru)*

---

## **References**
Here are some excellent resources to dive deeper into design patterns:

1. [YouTube - Design Patterns Overview](https://www.youtube.com/watch?v=tv-_1er1mWI)
2. [Refactoring Guru](https://refactoring.guru)
3. [FreeCodeCamp - JavaScript Design Patterns](https://www.freecodecamp.org/news/javascript-design-patterns-explained/#heading-roundup)
4. [Patterns.dev](https://www.patterns.dev)

---

Design patterns are foundational to writing clean, maintainable, and scalable software. Whether you're working in JavaScript, C++, or any other language, understanding these patterns will significantly enhance your software design skills.

