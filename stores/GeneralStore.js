import { makeAutoObservable, toJS} from "mobx"
import threadApi from "../modules/threadApi"



class GeneralStore {
     threadsList = []
     threadItem = []
      
    constructor() {
        makeAutoObservable(this)
        
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


    
}


export default  new GeneralStore();