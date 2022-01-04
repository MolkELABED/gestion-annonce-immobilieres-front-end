import { Component, OnInit} from '@angular/core';
import { AnnonceService } from './annonce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private annonces:any;

  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    this.getAnnonces();
  }

  private getAnnonces() {
    this.annonceService.getAnnonce("/annonces")
    .subscribe(data => {
      this.annonces = data;
    },err=>{
      console.log(err);
      }
    )
  }
}
