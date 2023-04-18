// #ref: https://refactoring.guru/design-patterns/strategy

// The strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete strategies.

interface Strategy {
  execute(a: number, b: number): number;
}

// Concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them interchangeable in the context.

class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

// The context defines the interface of interest to clients.

class Context {
  // The context maintains a reference to one of the strategy objects.
  // The context doesn't know the concrete class of a strategy.
  // It should work with all strategies via the strategy interface.
  private _strategy: Strategy;

  get strategy(): Strategy {
    return this._strategy;
  }

  // Usually the context accepts a strategy through the constructor
  // Also provides a setter so that the strategy can be switched at runtime.

  setStrategy(value: Strategy): void {
    this._strategy = value;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

// The client code picks a concrete strategy and passes it to the context. 
// The client should be aware of the differences between strategies in order to make the right choice.

class ExampleApplication {

  main(action: 'addition' | 'subtraction' | 'multiplication', first: number, second: number): number {
    const context = new Context();
    const mapper = {
      addition: context.setStrategy(new ConcreteStrategyAdd()),
      subtraction: context.setStrategy(new ConcreteStrategySubtract()),
      multiplication: context.setStrategy(new ConcreteStrategyMultiply()),
    }

    mapper[action];
    return context.executeStrategy(first, second);
  }
}

// How to use
const app = new ExampleApplication();
app.main('multiplication', 1, 2);