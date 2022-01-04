import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from 'src/app/Model/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  public host: String ="http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getResource(url: any) {
    return this.http.get(this.host+url);
  }

  public getAnnoncebyurl(url: any): Observable<Annonce>{
    return this.http.get<Annonce>(this.host+url);
  }

  public getAnnoncebyid(url: any, id: any): Observable<Annonce>{
    return this.http.get<Annonce>(this.host+url+id);
  }

  public updateAnnonce(url: any, id: any, annonceBody: Annonce): Observable<Annonce>{
    return this.http.put<Annonce>(this.host+url+id, annonceBody);
  }

  public deleteAnnonce(url: any, annonce: Annonce): Observable<Annonce>{
    return this.http.delete<Annonce>(this.host+url+annonce.id);
  }

  public getAnnonce(url: any) {
    return this.http.get(this.host + url);
  }

  public saveAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.host + "/annonces", annonce);
  }

  uploadAnnoncePhoto(file: File, idAnnonce: number): Observable<HttpEvent<{}>> {
    let formData : FormData = new FormData();
    formData.append('file', file);

    const request = new HttpRequest('POST', this.host + '/uploadPhoto/' + idAnnonce, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }
}
