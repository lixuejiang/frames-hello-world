/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  let state = ctx.state;

  switch (ctx.searchParams.action) {
    case "increment":
      state = { ...state, count: state.count + 1 };
      break;
    case "decrement":
      state = { ...state, count: state.count - 1 };
      break;
  }
  return {
    image: <div tw="flex">Count: {state.count}</div>,
    buttons: [
      <Button action="post" target={{ query: { action: "increment" } }}>
        increment
      </Button>,
      <Button action="post" target={{ query: { action: "decrement" } }}>
        decrement
      </Button>,
    ],
    state,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
