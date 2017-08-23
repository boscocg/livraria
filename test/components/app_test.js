import { renderComponent , expect } from '../test_helper';
import BtnAddToCart from '../../src/components/BtnAddToCart';

describe('BtnAddToCart' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(BtnAddToCart);
  });

  it('Should be possible to add item in the Cart', () => {
	expect(component).to.exist;
  });
});
