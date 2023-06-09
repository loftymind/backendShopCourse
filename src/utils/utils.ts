export const buildResponse = (statusCode: any, body: any) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origins': '*',
    'Access-Control-Allow-Headers': '*',
  },
  body: JSON.stringify(body),
});

