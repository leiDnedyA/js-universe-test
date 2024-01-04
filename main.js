import { bigBang, toDraw, onTick, text } from "./js-build/modules/js-wrapper.rkt.js";

const INIT_STATE = 100;
const MAX_TEXT_SIZE = 100;
const MIN_TEXT_SIZE = 50;

const draw = toDraw((ws) => {
  return text("Hello, world!", Math.abs(ws), "black");
});

const tick = onTick((ws) => {
  if (ws > 0) {
    if (ws >= MAX_TEXT_SIZE) {
      return -(ws - 1);
    }
    return ws + 1;
  } else {
    if (-ws <= MIN_TEXT_SIZE) {
      return -ws + 1;
    }
    return ws + 1;
  }
}, .01);

bigBang(INIT_STATE, [draw, tick]);
