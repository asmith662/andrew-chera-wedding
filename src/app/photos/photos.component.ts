import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos',
  template: `
  <div class="carousel-decor" *ngIf="div1">
    <ngb-carousel #carousel [interval]="3000" [pauseOnHover]="pauseOnHover" [pauseOnFocus]="pauseOnFocus" (slide)="onSlide($event)">
      <ng-template ngbSlide *ngFor="let img of images; index as i">
        <a href="{{img}}" target="display-frame" (click)="div1Function()">
          <div class="picsum-img-wrapper">
            <img [src]="img">
          </div>
        </a>
        
      </ng-template>
      
    </ngb-carousel>
  </div>

  <div class="div-button" *ngIf="div2">
    <button class="button is-ghost is-medium" (click)="div2Function()">X</button>
    <div class="enlarge">
    <iframe name="display-frame" frameborder="0" allowfullscreen>
    </iframe>
</div>
  </div>
  `,
  styles: [`
    .div-button {
      background-color: hsl(0, 0%, 21%);
      .button {
        left:67%;
        color:white;
      }
    }
    .carousel-decor {
      background-color: hsl(0, 0%, 21%);
    
    }
    .enlarge {
      background-color: hsl(0, 0%, 21%);

      text-align: center;
      iframe {
        
        display: block;
    border-style:none;
    width:100%;
    height:100%;
        
       
       
     
        background-color: hsl(0, 0%, 21%);
	    }
    }

    .picsum-img-wrapper {
      img {
        max-width: 50%;
        height:auto;
        display: block;
        margin: 0;
        margin-left: auto;
        margin-right: auto;
        padding-top: 25px;
        background-color: hsl(0, 0%, 21%);
	    }
    }   

    .carousel-indicators > li {
      visibility: hidden;
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        background-color: hsl(0, 0%, 21%);
    }

    a.carousel-control-prev,
    a.carousel-control-next {
      span {
        display: none;
      }
    }

  `]
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/img/ca3.jpg',
            '../../assets/img/ca5.jpg',
            '../../assets/img/ca6.jpg',
            '../../assets/img/ca7.jpg',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  div1:boolean=true;
  div2:boolean=false;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  div1Function(){
    this.div1=false;
    this.div2=true;
  }

  div2Function(){
    this.div1=true;
    this.div2=false;
  }
}
