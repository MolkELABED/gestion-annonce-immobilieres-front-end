import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Annonce } from 'src/app/Model/Annonce';
import { Router, ActivatedRoute} from "@angular/router";
import { AnnonceService } from 'src/app/annonce.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  selectedAnnonce: any;
  annonces: any;
  editPhoto: boolean = false;
  currentAnnonce: any;
  selectedFiles: any;
  progress: number = 0;
  currentUploadFile: any;
  timestamp!: number;

  constructor(public annonceService: AnnonceService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
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

  onEditPhoto(a: any) {
    this.currentAnnonce=a;
    this.editPhoto=true;
  }

  onSelectedFile(event: any) {
    this.selectedFiles= event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
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
  }

  getTS() {
    return Date.now();
  }
}
