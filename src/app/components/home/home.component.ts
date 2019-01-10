import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

	newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError:string;

	constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

		this.spotify.getNewRealeses().subscribe((data: any) => {
    	this.newSongs = data;
      this.loading = false;
		}, (serviceError)=>{
      this.loading = false;
      this.error = true;
      this.messageError = serviceError.error.error.message;
      
    });

	}

}
