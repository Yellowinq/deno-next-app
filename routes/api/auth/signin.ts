import { HandlerContext } from "$fresh/server.ts";

const USERS = [{
  username: 'hig4342',
  password: '1234',
}, {
  username: 'admin',
  password: 'admin'
}]

export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  return new Response('test');
};
