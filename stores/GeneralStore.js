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
       console.log(res)
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
}


export default  new GeneralStore();