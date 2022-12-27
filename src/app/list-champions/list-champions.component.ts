import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-list-champions',
  templateUrl: './list-champions.component.html',
  styleUrls: ['./list-champions.component.scss']
})
export class ListChampionsComponent implements OnInit {

  champions:Champion[]=[]

  constructor(private championService:ChampionService, private router:Router) { }

  ngOnInit(): void {
    this.getChampions();
  }

  private getChampions(){
    this.championService.getListOfChampions().subscribe(data => {
      this.champions=data;
      console.log(data)
    })
  }

  deleteAChampion(id:number){
    this.championService.deleteChampion(id).subscribe(data=>{
      console.log(data)
      this.getChampions()
    })
  }

  seeDetails(id:number){
    this.router.navigate(['champion-details', id])

  }

}
