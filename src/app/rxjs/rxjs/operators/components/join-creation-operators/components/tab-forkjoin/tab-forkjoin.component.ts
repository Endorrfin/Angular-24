import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../../../@shared/shared.module';
import { DataOperatorsService } from '../../../../../services/data-operators.service';

@Component({
  selector: 'kvn-tab-forkjoin',
  templateUrl: './tab-forkjoin.component.html',
  styleUrls: ['./tab-forkjoin.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
  ]
})
export class TabForkjoinComponent implements OnInit {
  schoolsCnt: number = 0;
  hospitalsCnt: number = 0;
  banksCnt: number = 0;

  schoolsCntOne: number = 0;
  hospitalsCntTwo: number = 0;
  banksCntThree: number = 0;
  isWidgetOneSpinner: boolean = false;
  isWidgetTwoSpinner: boolean = false;
  isWidgetThreeSpinner: boolean = false;


  constructor(
    private dataOperatorsService: DataOperatorsService,
  ) {}


  ngOnInit() {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
    this.getAllData();
  }

  getData() {
    this.dataOperatorsService.getWidgetOneData().subscribe((data) => {
      this.schoolsCnt = data;
      this.isWidgetOneSpinner = false;
    });

    this.dataOperatorsService.getWidgetTwoData().subscribe((data) => {
      this.hospitalsCnt = data;
      this.isWidgetTwoSpinner = false;
    });

    this.dataOperatorsService.getWidgetThreeData().subscribe((data) => {
      this.banksCnt = data;
      this.isWidgetThreeSpinner = false;
    });
  };


  getAllData() {
    this.dataOperatorsService.getAllData().subscribe(res => {
      this.schoolsCntOne = res[0];
      this.hospitalsCntTwo = res[1];
      this.banksCntThree = res[2];
    })
  }

}
