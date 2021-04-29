import { makeAutoObservable, configure,observable, action } from "mobx"
import threadApi from "../modules/threadApi"
configure({ enforceActions: "always" });


class GeneralStore {
     threadsList = []
     threadItem = []
       fontColor = "#000"
    constructor() {
        makeAutoObservable(this,{
         fontColor: observable,
         checkColorLightAndDark: action})
        
    }
    async getThreads(){
       let res = await  threadApi.getThreads()
       this.threadsList = res
    }
    async getThread(id){
       let res = await  threadApi.getThread(id)
       this.threadItem = res
    }

    async create(item){
      return   await  threadApi.create(item)
     }

    async update(item){
       let res = await  threadApi.update(item)
    }
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
      console.log(hsp<127.5 ? "#ffffff" : "#000000")
         this.fontColor =  hsp<127.5 ? "#ffffff" : "#000000"
       }


    
}


export default  new GeneralStore();