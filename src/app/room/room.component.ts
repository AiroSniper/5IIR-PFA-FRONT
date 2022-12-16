import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomDTO } from '../dto/room.dto';
import { PlayerSpaceService } from '../player-space/player-space.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  currentRoom:RoomDTO=Object()
  constructor(private route: ActivatedRoute,private readonly playerService: PlayerSpaceService){}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const roomId = String(routeParams.get('roomId'));
   this.getRoom(roomId)
  }


  getRoom(id:string){
    this.playerService.oneRoom(id).subscribe((room:any)=>{
      this.currentRoom=room
      console.log(this.currentRoom)
    })
  }

}
