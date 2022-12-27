import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss']
})
export class ChampionDetailsComponent implements OnInit {

  id:number=0;
  champion:Champion=new Champion()
  constructor(private route:ActivatedRoute, private championService:ChampionService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.championService.getChampionById(this.id).subscribe(data=>{
      this.champion=data;
      console.log(data);
    })
  }

}
