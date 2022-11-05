import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  images: string[] = [
    '/assets/training.jpg',
    '/assets/training2.jpg',
    '/assets/training3.jpg',
    '/assets/training4.jpg',
    '/assets/training5.jpg',
    '/assets/training6.jpg',
    '/assets/training7.jpg',
    '/assets/training8.jpg',
  ];

  backgroundImage: string = '';

  constructor() {}

  ngOnInit(): void {
    let ran = Math.round((Math.random() * 100) % 7);
    this.backgroundImage = this.images[ran];
  }
}
