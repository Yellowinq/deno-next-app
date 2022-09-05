import { HandlerContext } from "$fresh/server.ts";

const endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'
export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const url = new URL(endpoint)
  url.searchParams.append('client_id', )
  return new Response('test');
};
