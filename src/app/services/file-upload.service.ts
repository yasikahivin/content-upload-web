import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  baseApiUrl = "https://test.web"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file: string | Blob):Observable<any> {
      const formData = new FormData();    
      formData.append("file", file);
      return this.http.post(this.baseApiUrl, formData)
  }
}