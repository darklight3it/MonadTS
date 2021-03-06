import { setoid, functor, apply, chain } from './common';

const application: IApplication<any> = (value: any) => new Identity(value);

class Identity<T> implements IMonad<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  lift = () => this._value;
  of = application;
  map = functor;
  ap = apply;
  flatMap = chain;
  equals = setoid;
}

export class IdentityStatic implements IMonadStatic<any> {
   of=application;
}

let identityStatic = new IdentityStatic();

export {identityStatic as Identity};
