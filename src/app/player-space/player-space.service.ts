import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerSpaceService {

  API_URL = 'http://localhost:3001/'
  constructor(private readonly http:HttpClient) { }

  allPlyers(){
    return this.http.get(this.API_URL+'players')
  }
  allRooms(){
    return this.http.get(this.API_URL+'rooms')
  }
  oneRoom(id:string){
    return this.http.get(this.API_URL+'room/'+id)
  }
  addRoom(data:any){
    return this.http.post(this.API_URL+'addRoom',data)
  }
  upRoom(data:any){
    return this.http.post(this.API_URL+'upRoom',data)
  }
  addTeam(data:any){
    return this.http.post(this.API_URL+'addTeam',data)
  }

}
