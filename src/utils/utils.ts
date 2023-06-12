/* type JSON = string | number | boolean | { [x: string]: JSON } | Array<JSON>;

type Headers = Record<string, string | boolean>; */

export interface Response {
  statusCode: number;
  body: string;
  headers: Headers;
}

export const buildResponse = (statusCode: number, body: JSON): Response => {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };
};
