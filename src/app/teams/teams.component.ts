import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private teamService:TeamsService){}
  players: any

  ngOnInit(): void {
  
  }

  async getAll(){
    console.log("get aaaaal")
    this.players = await this.teamService.getAllPlayers().pipe(map((res:any)=>{
      return res
    }))
  }
}
