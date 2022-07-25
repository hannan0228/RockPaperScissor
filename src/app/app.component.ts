import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  public computerResult: string;
  public result: string;
  // public results = { computer: 0, player: 0 };
  public results= JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 }

  private userResult: string;

  public play(action: string): void {
    console.log('USER: ', action);
    this.userResult = action;
    this.computer();
    this.calculateWinner();
  }

  private computer(): void {
    const randomNumber = Math.floor(Math.random() * 3);
    const options: string[] = [ 'rock', 'paper', 'scissors' ];

    console.log('COMPUTER: ', options[randomNumber]);
    this.computerResult = options[randomNumber];
  }

  private calculateWinner(): void {
    if (this.userResult === this.computerResult) {
      this.result = 'There was a tie / draw';
      console.log(this.results);
      console.log("The Score is :");      
    }

    if (this.userResult === 'rock' && this.computerResult === 'paper') {
      this.result = 'Computer wins';
      console.log("resultData");
      
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.computer++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));

    }
    if (this.userResult === 'rock' && this.computerResult === 'scissors') {
      this.result = 'You win';
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.player++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));

    }
    if (this.userResult === 'paper' && this.computerResult === 'rock') {
      this.result = 'You win';
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.player++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));

    }
    if (this.userResult === 'paper' && this.computerResult === 'scissors') {
      this.result = ' Computer wins';
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.computer++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));

    }
    if (this.userResult === 'scissors' && this.computerResult === 'rock') {
      this.result = ' Computer wins';
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.computer++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));

    }
    if (this.userResult === 'scissors' && this.computerResult === 'paper') {
      this.result = ' You win';
      this.results = JSON.parse(sessionStorage.getItem('results'))||{ computer: 0, player: 0 };
      this.results.player++;
      console.log(this.results);
      sessionStorage.setItem('results', JSON.stringify(this.results));
    }
  }

  reset(){
    this.results = { computer: 0, player: 0 };
    sessionStorage.setItem('results', JSON.stringify(this.results));

  }
}
