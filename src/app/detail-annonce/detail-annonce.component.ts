import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Annonce } from 'src/app/Model/Annonce';
import { AnnonceService } from 'src/app/annonce.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

  public annonce:any;
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

  deleteAnnonce(annonce: Annonce) {
    let validate = confirm("Êtes-vous sûr de vouloir supprimer cette annonce?");

    if(validate) {
      this.annonceService.deleteAnnonce("/annonces/", annonce)
        .subscribe({
          next: (annonce) => {
            this.router.navigateByUrl("/ListesAnnonces");
          },
          error: (error) => console.error(error)
        });
    }
  }

}
