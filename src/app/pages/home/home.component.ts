import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  constructor(private hs: HomeService) {}

  ngOnInit(): void {
    // this.fetchList();
  }

  fetchList() {
    this.hs.fetchList().subscribe((data) => {
      console.log(data);
    });
  }
}
