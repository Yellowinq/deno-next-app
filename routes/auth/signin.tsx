/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=552719006248-5c9nsrlnbne8uov1lj5pjpr3m52tjnk5.apps.googleusercontent.com'

export default function Signin() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <div><input type="email" class={tw`border rounded`}/></div>
      <div><input type="password" class={tw`border rounded`}/></div>
      <div><button>Google</button></div>
    </div>
  );
}
