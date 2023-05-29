import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class ImageService {

    constructor(private httpClient: HttpClient) {}
  

    uploadImage(file: File) : Observable<any>{
        
       /* const formData = new FormData();
        formData.append("profileImage", file);*/
        //var headers = new HttpHeaders();
        //headers.append('Content-type','');
      //
   //image - upload - bucket - ass2
      //arn:aws:iam::744348572709:role/LabRole
        var headers = new HttpHeaders({
          'Content-Type': 'image/jpg'
        });

        const formData = new FormData();
        formData.append('file', file);
        return this.httpClient.put("https://i0i4dmn6u6.execute-api.us-east-1.amazonaws.com/first-deployment/image-upload-bucket-ass2/test.jpg",
          formData, {headers});
      }
    
  }