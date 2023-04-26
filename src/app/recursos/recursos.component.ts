import { Component, OnInit } from '@angular/core';
import { BdcintutdevService } from '../services/bdcintutdev.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit{

constructor(public Bd: BdcintutdevService,  private donSanitizer: DomSanitizer){
  
}
  ngOnInit(): void {
    
  }
/*   getUrl(url: any){
    let video;
    let results;

    if (!url) {
        return '';
    }

    if (typeof url !== 'string') {
        return '';
    }

    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];
    return this.donSanitizer.bypassSecurityTrustResourceUrl('https://github.com/devblackops/Terminal-Icons/' + video);
} */
}
