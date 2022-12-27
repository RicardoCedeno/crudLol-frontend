import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-register-champion',
  templateUrl: './register-champion.component.html',
  styleUrls: ['./register-champion.component.scss']
})
export class RegisterChampionComponent implements OnInit {
  champion:Champion=new Champion();
  constructor(private championService:ChampionService, private router:Router) { }

  ngOnInit(): void {
  }

    onSubmit(){
    console.log(this.champion);
  }

  saveChampion(){
    this.championService.addAChampion(this.champion).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/championslist'])
    })
  }

}
