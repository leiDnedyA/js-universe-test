import {
  bigBang,
  toDraw,
  onTick,
  text,
  emptyScene,
  rectangle,
  frame,
  placeImagesAlign,
  posn,
  posnX,
  overlayXY,
  underlayXY,
  overlay,
  underlay,
  aboveAlign,
  above,
  besideAlign,
  beside
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
  // return overlayXY(
  //   text("Hello, world!", Math.abs(ws), "black"),
  //   30,
  //   30,
  //   emptyScene(500, 500, "gray"),
  // );
  // return overlayAlign("center", "top", [text("Hello, world!", Math.abs(ws), "black"), rectangle(20, 20, "solid", "red"), emptyScene(500, 500, "gray")]);
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

bigBang(INIT_STATE, [draw, tick]);
