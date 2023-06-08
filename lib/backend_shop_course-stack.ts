/* import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'; */
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';


export class BackendShopCourseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);



    const getProductsList = new NodejsFunction(this, 'GetProductsListHandler', {
      functionName: 'getProductsList',
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: 'src/lambdas/getProductList.ts'
    });

    const getProductsById = new NodejsFunction(this, 'GetProductsByIdHandler', {
      functionName: 'getProductsById',
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: 'src/lambdas/grtProductsById.ts'
    });

    const api = new apigateway.RestApi(this, 'prod-api', {
      restApiName: "Prod"
    });


    const productsApi = api.root.addResource('products');
    const productIdApi = productsApi.addResource('{productId}');


    productsApi.addMethod('GET', new apigateway.LambdaIntegration(getProductsList));

    productIdApi.addMethod('GET', new apigateway.LambdaIntegration(getProductsById));


  }
}
