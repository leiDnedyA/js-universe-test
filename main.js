import {
  bigBang,
  toDraw,
  onTick,
  onMouse,
  onKey,
  stopWhen,
  text,
  emptyScene,
  overlayXY,
  besideAlign,
} from "./js-build/modules/js-wrapper.rkt.js";

const INIT_STATE = 100;
const MAX_TEXT_SIZE = 100;
const MIN_TEXT_SIZE = 50;

const draw = toDraw((ws) => {
  return besideAlign(
    "above",
    [
    text("Hello, world!", Math.abs(ws), "black"),
    emptyScene(500, 500, "gray")
    ]
  )
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
}, 0.01);

const handleKey = onKey((ws, key) => key === "s" ? "stop" : ws )

const stop = stopWhen((ws) => ws === "stop");

bigBang(INIT_STATE, [draw, tick, handleKey]);
