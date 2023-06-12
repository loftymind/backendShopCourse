import { buildResponse } from '../utils/utils';
import { dataProducts } from '../data/data';



export const handler = async (event: any) => {
    try {
      return buildResponse(200, dataProducts);;
    } catch (error) {
      return buildResponse(500, {
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
  