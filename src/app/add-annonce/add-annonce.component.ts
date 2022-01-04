import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/Model/Annonce';
import { ActivatedRoute, Router} from "@angular/router";
import { AnnonceService } from 'src/app/annonce.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  selectedAnnonce: any;
  annonces: any;
  editPhoto: boolean = false;
  currentAnnonce: any;
  selectedFiles: any;
  progress: number = 0;
  currentUploadFile: any;
  timestamp!: number;
  public annonce :Annonce = new Annonce();

  hidden!: Boolean;
  hidden1!: Boolean;
  disabled!: Boolean;
  update!: Boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private annonceService: AnnonceService ) { }

  ngOnInit(): void {
    this.hidden = true;
    this.hidden1 = true;
    this.disabled = true;
    this.update = true;
  }

  onSelectedFile(event: any) {
    this.selectedFiles= event.target.files;
    this.disabled = false;
  }

  saveAnnonce() {
    console.log(this.annonce.titre);
    if ((this.annonce.titre =="") || (this.annonce.description =="") || (this.annonce.lieu =="") || (this.annonce.prix=="")) {
      alert("Vous devez saisir tous les champs relatives à une annonce");
    } else {
      this.annonceService.saveAnnonce(this.annonce).subscribe(
        data => {
          this.annonce = data;
          this.hidden = false;
          this.update = false;
          alert("L'annonce a été enregistré avec succès");
        }
      )
    }
  }

  updateAnnonce() {
    this.annonceService.updateAnnonce("/annonces/", this.annonce.id, this.annonce).subscribe(
      data => {
        alert("L'annonce a été modifié avec succès");
      }
    )
  }
  
  uploadPhoto(annonce: Annonce) {
    this.currentAnnonce=annonce;
    this.progress = 0;
    if (this.selectedFiles == undefined) {
      alert("Ajouter une image pour l'annonce");
    }
    this.currentUploadFile = this.selectedFiles.item(0)
    this.annonceService.uploadAnnoncePhoto(this.currentUploadFile, this.currentAnnonce.id)
      .subscribe({
        next: (event: any) => {
          if(event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if(event instanceof HttpResponse) {
            this.timestamp=Date.now();
          }
        },
        error: (error) => {
          alert("Problème de chargement");
        }
      });
      this.router.navigateByUrl('/ListesAnnonces');
  }

  onOui() {
    this.hidden1 = false;
  }

  onNon() {
    this.router.navigateByUrl('/ListesAnnonces');
  }

}
