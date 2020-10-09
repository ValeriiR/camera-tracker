import { Component, OnInit } from '@angular/core';
import { CamerasService } from 'src/app/services/cameras.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {

  cameras: ICamera[];

  constructor(private camerasService: CamerasService) { }

  ngOnInit() {
    this.camerasService.getData().subscribe((camerasResponse: ICamerasResponse) => {
      //  this.cameras = camerasResponse.cameras;
      this.cameras = this.shuffleArray(camerasResponse.cameras);
    });
  }

  private shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
