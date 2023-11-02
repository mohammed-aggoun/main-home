import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-3',
  templateUrl: './hero-three.component.html',
  styleUrls: ['./hero-three.component.scss']
})
export class HeroThreeComponent implements OnInit {

  constructor() { }
  wordArray2:any=[]

  ngOnInit(): void {
    const words = document.getElementsByClassName('word') as HTMLCollectionOf<HTMLElement>;
    let wordArray: HTMLElement[][] = [];
    let currentWord = 0;

    words[currentWord].style.opacity = '1';
    for (let i = 0; i < words.length; i++) {
      wordArray.push(this.splitLetters(words[i] ));
    }

    const changeWord = () => {
      const cw = wordArray[currentWord];
      const nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
      for (let i = 0; i < cw.length; i++) {
        this.animateLetterOut(cw, i);
      }

      for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        (nw[0].parentElement as HTMLElement).style.opacity = '1';
        this.animateLetterIn(nw, i);
      }

      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    };



    changeWord();
    setInterval(changeWord, 4000);
  }
  animateLetterOut = (cw: HTMLElement[], i: number) => {
    setTimeout(() => {
      cw[i].className = 'letter out';
    }, i * 80);
  };

  animateLetterIn = (nw: HTMLElement[], i: number) => {
    setTimeout(() => {
      nw[i].className = 'letter in';
    }, 340 + i * 80);
  };

  splitLetters = (word: HTMLElement , ) => {
    const content = word.innerHTML;
    word.innerHTML = '';
    const letters: HTMLElement[] = [];
    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    return letters
  };
}