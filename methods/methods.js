import {toJS} from "mobx"

class methods {
  async checkColorLightAndDark(setColor){
    let color = +("0x" + setColor.slice(1).replace( 
       setColor.length < 5 && /./g, '$&$&'
    ));

    let r = color >> 16;
    let g = color >> 8 & 255;
    let b = color & 255;
  
    let hsp = Math.sqrt(
       0.299 * (r * r) +
       0.587 * (g * g) +
       0.114 * (b * b)
    );
     return hsp<127.5 ? "#ffffff" : "#000000"
     }
}

export default new methods();