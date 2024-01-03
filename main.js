import { big_bang, to_draw } from "./js-build/modules/universe.rkt.js";

const init = () => {

}

const handleNew = () => {

}

const handleDraw = to_draw(() => {

});


big_bang(document.querySelector('#root'), 10, {
  "to-draw": handleDraw
});
