import { handler as getProductsList } from '../src/lambdas/getProductList';
import { handler as getProductsById } from '../src/lambdas/grtProductsById';
import { dataProducts } from '../src/data/data';
import { buildResponse } from '../src/utils/utils';

describe('product service test', () => {
  it('returns products array', async () => {
    const productList = await getProductsList();
    expect(productList).toEqual(buildResponse(200, dataProducts));
  });

  it('returns correct id prodduct', async () => {
    const expectedResult = {
      pathParameters: {
        productId: '1',
      },
    };
    const productItem = await getProductsById(expectedResult);
    expect(productItem).toEqual(buildResponse(200, dataProducts[0]));
  });
    it('returns Product not found!', async () => {
    const expectedResult = {
      pathParameters: {
        productId: '222',
      },
    };
    const productItem = await getProductsById(expectedResult);
    expect(productItem).toEqual(
      buildResponse(404, {
        message: 'Product not found!',
      })
    );
  });
});
