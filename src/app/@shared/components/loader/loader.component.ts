import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../../../@core/loader.service';

@Component({
  selector: 'kvn-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean> = of(false);

  constructor(private loadService: LoaderService) {}

  ngOnInit(): void {
    this.loading$ = this.loadService.status
  }

}
