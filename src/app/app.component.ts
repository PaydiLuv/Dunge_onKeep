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

  age: number = 0;

  hp: number = 0;
  san: number = 0;
  mp:number = 0;
  bd:number = 0;
  build:number = 0;
  mov:number = 0;

  options: string[] = ["Accountant",
    "Acrobat",
    "Actor",
    "Agency Detective",
    "Alienist",
    "Animal Trainer",
    "Antiquarian",
    "Antique Dealer",
    "Archaeologist",
    "Architect",
    "Artist",
    "Asylum Attendant",
    "Assassin",
    "Author",
    "Aviator",
    "Bank Robber",
    "Bartender",
    "Big Game Hunter",
    "Book Dealer",
    "Bootleger",
    "Bounty Hunter",
    "Boxer/Wrestler",
    "Burglar",
    "Butler/Valet/Maid",
    "Chauffeur",
    "Clergy, Member of the",
    "Computer Programmer/Technician/Hacker",
    "Conman",
    "Cowboy/Cowgirls",
    "Craftsperson",
    "Criminal",
    "Cult Leader",
    "Deprogramer",
    "Designer",
    "Dilettante",
    "Diver",
    "Doctor of Medecine",
    "Drifter",
    "Driver",
    "Editor",
    "Elected Official",
    "Engineer",
    "Entertainer",
    "Explorer",
    "Farmer",
    "Federal Agent",
    "Fence",
    "Firefighter",
    "Foreign/Counterfeiter",
    "Gambler",
    "Gangster",
    "Gun Moll",
    "Gentleman/Lady",
    "Hacker",
    "Hobo",
    "Hospital Orderly",
    "Journalist",
    "Judge",
    "Laboratory Assistant",
    "Laborer",
    "Lawyer",
    "Librarian",
    "Lumberjack",
    "Maid",
    "Mechanic",
    "Military Officer",
    "Miner",
    "Missionary",
    "Mountain Climber",
    "Museum Curator",
    "Musician",
    "Nurse",
    "Occultist",
    "Outdoorsman/Outdoorswoman",
    "Parapsychologist",
    "Pharmacist",
    "Photographer",
    "Photojournalist",
    "Pilot",
    "Police Detective/Officer",
    "Private Investigator",
    "Professor",
    "Prospector",
    "Prostitute",
    "Psychiatrist",
    "Psychologist/Psychoanalyst",
    "Reporter",
    "Researcher",
    "Sailor",
    "Salesperson",
    "Scientist",
    "Secretary",
    "Shopkeeper",
    "Smuggler",
    "Soldier/Marine",
    "Spy",
    "Street Punk",
    "Student/Intern",
    "Stuntsman",
    "Taxi Driver",
    "Thug",
    "Tribe Member",
    "Undertaker",
    "Union Activist",
    "Valet",
    "Waiter/Waitress",
    "White Collar Worker",
    "Zealot",
    "Zookeeper"
  ]

  contructor(){}

  genall(){
    this.genstrength();
    this.genconstitution();
    this.gensize();
    this.gendexterity();
    this.genappearance();
    this.genintelligence();
    this.geneducation();
    this.genpower();
    this.genluck();
  }

  improvcheck(x){
    const d = new Dice();
    // @ts-ignore
    for (let i = 0; i < x; ++i){
    if((d.roll("2d6 + 6").total * 5 )> this.edu) this.edu = this.edu + d.roll("1d10").total;}
  }

  genstrength(){
    // tslint:disable-next-line:max-line-length
    const dice = new Dice();
    this.str = dice.roll('3d6').total * 5;
  }

  changestrength(a){
    this.str = a
  }

  genconstitution(){
    const dice = new Dice();
    this.con = dice.roll('3d6').total * 5;
  }

  changeconstitution(a){
    this.con = a;
  }

  gensize(){
    const dice = new Dice();
    this.siz = dice.roll('2d6 + 6').total * 5;
  }

  changesize(a){
    this.siz = a;
  }

  gendexterity(){
    const dice = new Dice();
    this.dex = dice.roll('3d6').total * 5;
  }

  changedexterity(a){
    this.dex = a;
  }

  genappearance(){
    const dice = new Dice();
    this.appearance = dice.roll('3d6').total * 5;
  }

  changeappearance(a){
    this.appearance =  a;
  }

  genintelligence(){
    const dice = new Dice();
    this.int = dice.roll('2d6 + 6').total * 5;
  }

  changeintelligence(a){
    this.int = a;
  }

  geneducation(){
    const dice = new Dice();
    this.edu = dice.roll('2d6 + 6').total * 5;
  }

  changeeducation(a){
    this.edu = a;
  }

  genpower(){
    const dice = new Dice();
    this.pow = dice.roll('3d6').total * 5;
  }

  changepower(a){
    this.pow = a;
  }

  genluck(){
    const dice = new Dice();
    this.luk = dice.roll('2d6 + 6').total * 5;
  }

  changeluck(a){
    this.luk = a;
  }

  changeage(a){
    this.age = a;
  }

  calculatevarstats(){
    this.setHealthPoints();
    this.setSanity();
    this.setBonusDamage();
    this.setMoveRate();
  }

  setHealthPoints(){
    this.hp = Math.trunc(this.con + this.siz / 10 );
  }

  setSanity(){
    this.san = this.pow;
  }

  setBonusDamage(){
    const d = new Dice();
    switch(this.str + this.con){
      case 2-64: this.bd = -2; this.build = -2;
      case 65-84:this.bd = -1; this.build = -1;
      case 85-124:this.bd = 0; this.build = 0;
      case 125-164:this.bd = d.roll("1d4").total;this.build = 1;
      case 164-204:this.bd = d.roll("1d6").total; this.build = 2;
    }
  }

  setMoveRate(){
    if(this.str < this.siz && this.dex < this.siz) this.mov = 7;
    else if (this.str > this.siz && this.dex > this.siz) this.mov = 9;
    else this.mov = 8;
    if(this.age > 40) this.mov -= 1;
    if(this.age > 50) this.mov -= 1;
    if(this.age > 60) this.mov -= 1;
    if(this.age > 70) this.mov -= 1;
    if(this.age > 80) this.mov -= 1;
  }
}
