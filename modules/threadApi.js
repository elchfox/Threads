import {toJS} from "mobx"

class threadApi {
 /* Get users By limit 50 */

 //get the restaurants data from server
 async getThreads() {
    const data = await fetch(`${global.baseUrl}/thread`)
    console.log(data)

    const json = await data.json()
    return json
  }
 async getThread(id) {
    const data = await fetch(`${global.baseUrl}/thread/detail/${id}`)

    const json = await data.json()
    return json
  }

   //get specific restaurant data from server by id
  async create(data){

    const res = await fetch(`${global.baseUrl}/thread/create`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    return json
  }
  async update(data){

    const res = await fetch(`${global.baseUrl}/thread/update`,{
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    return json
  }

}

export default new threadApi();