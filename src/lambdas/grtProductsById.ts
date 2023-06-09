/* import data from "../data/data"; */
import { dataProducts } from "../data/data";
import { buildResponse } from "../utils/utils";

export const handler = async (event: any) => {
  try {

    const {productId} = event.pathParameters;


    const product = dataProducts.find((prod) => prod.id === productId);

    if (!product) {
        return buildResponse(404, {
          message: "Product not found!"
        });
      }
  
      
    return buildResponse(200, product);
   
  } catch (err: any) {
    return buildResponse(500, {
      message: err.message,
    });
  }
};