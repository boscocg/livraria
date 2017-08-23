import { renderComponent , expect } from '../test_helper';
import Product from '../../src/components/Product';

describe('Product' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Product);
  });

  it('Should be possible to add item in the Cart', () => {
	expect(component).to.exist;
  });
});
