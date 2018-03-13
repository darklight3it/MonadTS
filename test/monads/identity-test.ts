import * as mocha from 'mocha';
import * as chai from 'chai';
import Identity from '../../src/monads/identity';
import assertMonadicLaws from '../assertion-utils/monadic-laws-assertions';
import assertApply from '../assertion-utils/apply-assertions';


describe('Identity Interface', () => {
  it('should follow the Monadic Laws', () => {
    assertMonadicLaws(Identity);
  });

  it('map should work correctly', () => {
    chai.assert.equal(Identity.of(3).map(asd => asd +2).lift(), Identity.of(5).lift() );
  });

  it('equals should work correctly', () => {

//    chai.assert.isTrue(Identity.of(4).9;
  //  chai.assert.isFalse(Identity.of(2).equals(4));
    
  });

  it('ap should work ', () => {
    assertApply(Identity.of(5), Identity, (val:any) => val+2);
  });
});