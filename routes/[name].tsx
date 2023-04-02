import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<null> = {
  async GET(_, ctx) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return ctx.render();
  },
}

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}