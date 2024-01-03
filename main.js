import { big_bang, to_draw, text, rkt_list} from "./js-build/modules/universe.rkt.js";

console.log(rkt_list)

const init = () => {

}

const handleNew = () => {

}

const handleDraw = to_draw(() => {

});


big_bang(document.querySelector('#root'), 10, rkt_list(handleDraw));
