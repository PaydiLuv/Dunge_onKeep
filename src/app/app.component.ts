import { Component } from '@angular/core';
import {Dice} from "dice-typescript/dist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eyesnsquids';
  str: number = 0;
  con: number = 0;
  siz: number = 0;
  dex: number = 0;
  appearance: number = 0;
  int: number = 0;
  edu: number = 0;
  pow: number = 0;
  luk: number = 0;

  contructor(){}
  genstrength(){
    // tslint:disable-next-line:max-line-length
    const dice = new Dice();
    this.str = dice.roll('3d6').total * 5;
  }

  genconstitution(){
    const dice = new Dice();
    this.con = dice.roll('3d6').total * 5;
  }

  gensize(){
    const dice = new Dice();
    this.siz = dice.roll('2d6 + 6').total * 5;
  }

  gendexterity(){
    const dice = new Dice();
    this.dex = dice.roll('3d6').total * 5;
  }

  genappearance(){
    const dice = new Dice();
    this.appearance = dice.roll('3d6').total * 5;
  }

  genintelligence(){
    const dice = new Dice();
    this.int = dice.roll('2d6 + 6').total * 5;
  }

  geneducation(){
    const dice = new Dice();
    this.edu = dice.roll('2d6 + 6').total * 5;
  }

  genpower(){
    const dice = new Dice();
    this.pow = dice.roll('3d6').total * 5;
  }

  genluck(){
    const dice = new Dice();
    this.luk = dice.roll('2d6 + 6').total * 5;
  }
}
