import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalProduct = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentData.subscribe(res => {
      this.totalProduct = res;
      console.log(res);
    });
  }
}
