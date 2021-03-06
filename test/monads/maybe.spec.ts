import * as mocha from 'mocha';
import * as chai from 'chai';
import { Maybe, Some, None } from '../../src/monads/maybe';
import assertMonadicLaws from '../assertion-utils/monadic-laws-assertions';

// #region Maybe
describe('Maybe Monad', () => {
  const f = (x: number) => new Some(x + 2);
  const g = (x: number) => new Some(x * 3);

  it('should follow the Monadic Laws for Some', () => {
    assertMonadicLaws(Maybe, 3, f, g); // Assert for Some values
  });

  it('should follow the Monadic Laws for null', () => {
    assertMonadicLaws(Maybe, null, f, g); // Assert for null values
  });

  it('should follow the Monadic Laws for undefined', () => {
    assertMonadicLaws(Maybe, undefined, f, g); // Assert for undefined values
  });

  it('should create a Some from a valid value', () => {
    assertIsASome(2);
    assertIsASome('hello');
    assertIsASome(true);
    assertIsASome(() => 'hello');
  });

  it('should create a None from invalid value', () => {
    assertIsANone(null);
    assertIsANone(undefined);
  });

  it('should throw if lifting from none', () => {
    chai.assert.throws(Maybe.of(null).lift, 'Cannot get a value from None');
  });
});
// #endregion

// #region Private Members

const assertIsASome = (val: any) => {
  const maybe = Maybe.of(val);

  chai.assert.isTrue(maybe.isSome());
  chai.assert.isFalse(maybe.isNone());
};

const assertIsANone = (val: any) => {
  const maybe = Maybe.of(val);
  chai.assert.isTrue(maybe.isNone());
  chai.assert.isFalse(maybe.isSome());
};

// #endregion
