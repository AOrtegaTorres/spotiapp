import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

	newSongs: any[] = [];
	constructor(private spotify: SpotifyService) {  	
		this.spotify.getNewRealeses().subscribe((data: any) => {
			console.log(data);
			this.newSongs = data.albums.items
		});
	}

}
