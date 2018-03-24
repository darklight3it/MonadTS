import * as mocha from 'mocha';
import * as chai from 'chai';
import StaticIdentity from '../../src/monads/identity';
import assertMonadicLaws from '../assertion-utils/monadic-laws-assertions';


describe('Identity Monad', () => {
  it('should follow the Monadic Laws', () => {
    assertMonadicLaws(StaticIdentity);
  });
});
