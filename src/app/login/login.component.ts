import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDTO } from '../dto/player.dto';
import { PlayerSpaceService } from '../player-space/player-space.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  player_id: string = ''
  players: PlayerDTO[] = []
  currentPlayer: PlayerDTO | any
  constructor(private readonly playerService: PlayerSpaceService, private readonly router:Router){}
  ngOnInit(): void {
   this.allPlayers()
  }

  allPlayers() {
    this.playerService.allPlyers().subscribe((pls: any) => {
      this.players = pls
    })
  }

  onSelected(value: string): void {
    this.player_id = value;
    console.log(this.player_id)
  }

  login() {
    let player = null
    if (this.player_id != "")
      player = this.players.find(x => x._id === this.player_id);
    else player = this.players[0]
    console.log(player)
    localStorage.setItem("player", JSON.stringify(player))
    this.router.navigateByUrl(`/playerSpace`);
  }
}
