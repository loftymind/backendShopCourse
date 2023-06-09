import { dataProducts } from '../data/data';
import { buildResponse } from '../utils/utils';


export const handler = async () => {
  try {
    console.log('dog')
    return buildResponse(200, dataProducts);
  } catch (err: any) {
    console.log('cat')
    return buildResponse(500, {
      message: err.message,
    });
  }
};
