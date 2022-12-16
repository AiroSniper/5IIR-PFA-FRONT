import { Component, OnInit } from '@angular/core';
import { PlayerDTO } from '../dto/player.dto';
import { RoomDTO } from '../dto/room.dto';
import { PlayerSpaceService } from './player-space.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamDTO } from '../dto/team.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-space',
  templateUrl: './player-space.component.html',
  styleUrls: ['./player-space.component.css']
})
export class PlayerSpaceComponent implements OnInit {

  selectedRoom:RoomDTO|any
  currentPlayer: PlayerDTO | any
  player_id: string = ''
  teams:Array<TeamDTO>=[]
  players: PlayerDTO[] = []
  rooms: RoomDTO[] = []
  ngOnInit(): void {
    
    console.log(this.teams)
    if (localStorage.getItem('player'))
      this.currentPlayer = JSON.parse(localStorage.getItem('player') || '{}');
    console.log(this.currentPlayer)
    this.allPlayers()
    this.allRooms()
  }

  constructor(private readonly playerService: PlayerSpaceService, private readonly router:Router) { }

  roomForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    typ: new FormControl('5'),
  });

  
  joinForm = new FormGroup({
    team: new FormControl('0'),
  });

  allPlayers() {
    this.playerService.allPlyers().subscribe((pls: any) => {
      this.players = pls
    })
  }
  allRooms() {
    this.playerService.allRooms().subscribe((rms: any) => {
      this.rooms = rms
      console.log(this.rooms)
    })
  }



  onSelected(value: string): void {
    this.player_id = value;

    console.log(this.player_id)
  }

  login() {
    this.router.navigateByUrl(`/login`);
  }
  logout() {
    localStorage.removeItem("player")
    window.location.reload()
  }

  onSubmit() {
    console.warn(this.roomForm.value);

    let teams = [{
      label:"A",
      players:[],
      isWinner:false,
      result:0,
      enemyResult:0,
    },
    {
     label:"B",
     players:[],
     isWinner:false,
     result:0,
     enemyResult:0,
   }]
   let teamA={}, teamB={}

   this.playerService.addTeam(teams[0]).subscribe(t=>{
    teamA=t

    this.playerService.addTeam(teams[1]).subscribe(t=>{
      teamB=t

      let room = {
        teams:[teamA,teamB],
       owner: this.currentPlayer._id,
       title: this.roomForm.value.title,
       description: this.roomForm.value.desc,
       type: this.roomForm.value.typ,
     }
 
     this.playerService.addRoom(room).subscribe(result=>{
      
       this.allRooms()
     },
     err=>{
       console.log(err)
     })
     })
   })

 

  }

  join(room:any){
   this.selectedRoom=room
  }
  exit(room:any){
    if(this.currentPlayer){
       room.teams[0].players.forEach((element:any,index:number) => {
        if (element._id === this.currentPlayer._id)  room.teams[0].players.splice(index,1)
      });
      room.teams[1].players.forEach((element:any,index:number) => {
        if (element._id === this.currentPlayer._id)  room.teams[1].players.splice(index,1)
      });
      this.playerService.upRoom(room).subscribe(res=>{
        this.allRooms()
      })
    }

  }
  onJoin(){
    let index = parseInt(this.joinForm.value.team || '')
    this.selectedRoom.teams[index].players.push(this.currentPlayer)
    console.log(this.selectedRoom)
    this.playerService.upRoom(this.selectedRoom).subscribe(res=>{
      this.allRooms()
    })
  }

  verify(room:any){
    if(this.currentPlayer){
      const found1 = room.teams[0].players.find((element:any) => {
        return element._id === this.currentPlayer._id
      });
      const found2 = room.teams[1].players.find((element:any) => {
        return element._id === this.currentPlayer._id
      });
  
      return ((found1===undefined) && (found2===undefined))
    }
    return true
    
}
}
