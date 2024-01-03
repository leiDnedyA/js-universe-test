import { big_bang, to_draw, text, rkt_list} from "./js-build/modules/universe.rkt.js";

console.log(text)

const init = () => {

}

const handleDraw = to_draw(()=>{
  return text("hello world", 100, "black");
});


big_bang(document.querySelector('#root'), 10, rkt_list(handleDraw));
