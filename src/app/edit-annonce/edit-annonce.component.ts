import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from 'src/app/Model/Annonce';
import { AnnonceService } from 'src/app/annonce.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {

  public annonce :Annonce = new Annonce();
  id!: any;

  constructor(private route: ActivatedRoute,
              public annonceService: AnnonceService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAnnonce();
  }

  private getAnnonce() {
    this.annonceService.getAnnoncebyid("/annonces/", this.id).subscribe(data => {
      this.annonce = data;
    },err=>{
      console.log(err);
      }  
    )
  }

  updateAnnonce() {
    this.annonceService.updateAnnonce("/annonces/", this.annonce.id, this.annonce).subscribe(
      data => {
        this.router.navigateByUrl("/ListesAnnonces");
      }
    )
  }
  

}
