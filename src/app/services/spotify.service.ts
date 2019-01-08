import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRealeses(){

  	const headers = new HttpHeaders({
  		'Authorization': 'Bearer BQA55pEGScWqF-C7JLb1MoMyYRjjrBihGdSn4fMsxeH2K97uTIWL4t0vI3Ns7805CQJB34R5YL1hunUvToY'
  	});

  	return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
