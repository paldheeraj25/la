import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { cloneDeep } from 'lodash';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Chart } from 'angular-highcharts';

@FadeInTop()
@Component({
  selector: 'sa-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {

  lastWeek: Object;
  thisYear: Object;
  public chart: any;
  public segmentedPieChart: any;
  public form: any;
  public oldValue: any;
  public newValue: any;
  paginationStart: number = 0;

  viewsData = [
    {
      jewel: 'Hand Harness',
      views: '5,001'
    },{
      jewel: 'Maang Tika',
      views: '4,995'
    }, {
      jewel: 'Toe Rings',
      views: '4,575'
    }, {
      jewel: 'Traditional Earrings',
      views: '4,555'
    },
    {
      jewel: 'Jhumkis',
      views: '4,110'
    },{
      jewel: 'Drop Earrings',
      views: '4,010'
    }, {
      jewel: 'Ear Cuffs',
      views: '3,975'
    }, {
      jewel: 'Bracelet',
      views: '3,845'
    },
    {
      jewel: 'Exquisite Rings',
      views: '3,755'
    },{
      jewel: 'Chokers & Necklaces',
      views: '3,023'
    }, {
      jewel: 'Foot Harness',
      views: '2,787'
    }, {
      jewel: 'Anklet – Epitome Of Culture',
      views: '2,655'
    },
    {
      jewel: 'Nose Ring',
      views: '2,515'
    },{
      jewel: 'Graceful Armlet',
      views: '2,401'
    }, {
      jewel: 'Kamarband – Waist Band',
      views: '2,275'
    }, {
      jewel: 'Braid Jewels',
      views: '2,155'
    },
    {
      jewel: 'Hoop Earrings',
      views: '1,915'
    },{
      jewel: 'Threader Earrings',
      views: '1,901'
    }, {
      jewel: 'Stud Earrings',
      views: '1,875'
    }, {
      jewel: 'Chandelier Earrings',
      views: '1,755'
    },
    {
      jewel: 'Ear Cuffs',
      views: '1,715'
    },{
      jewel: 'Accesories',
      views: '1,700'
    }, {
      jewel: 'Watch',
      views: '1,675'
    }, {
      jewel: 'Bindi Ring',
      views: '1,555'
    }
  ]
  filteredViewsData: any = [];
  filteredBuysData: any = [];

  filterViewsData(index, table){
    if(table == "views"){
      this.filteredViewsData = [];
      for(let i = index; i<index+6; i++){
        this.filteredViewsData.push(this.viewsData[i]);
      }
    }else {
      this.filteredBuysData = [];
      for(let i = index; i<index+6; i++){
        this.filteredBuysData.push(this.viewsData[i]);
      }
    }
  }

  //hardcoded
  private yearlyGraph = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Taps'
    },
    subtitle: {
      text: 'Source: Lewiot App'
    },
    colors: [
      '#90caed',
      '#ff6b8c'
    ],
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Genuine Taps',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }]
    // {
    //   name: 'Tampered/Counterfieted Taps',
    //   data: [-39.9, -11.5, -86.4, -99.2, -4.0, -46.0, -35.6, -48.5, -96.4, -94.1, -25.6, -14.4]

    // }
  //]
  });

  //weekly bar graph
  private weeklyBar = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Weekly Average Taps'
    },
    colors: [
      '#90caed',
      '#ff6b8c'
    ],
    xAxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Genuine',
      data: [5, 3, 4, 7, 2, 8, 6]
    }
    // , {
    //   name: 'Tampered/Counterfieted',
    //   data: [-1, -2, -3, -2, -7, -5, -8]
    // }
  ]
  });

  //hardcoded piechart
  private segmentedPie = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Taps per segmented jwellary'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Jwellery Segments',
      //colorByPoint: true,
      data: [{
        name: 'Earings',
        y: 56.33
      }, {
        name: 'Necklace',
        y: 24.03,
        sliced: true,
        selected: true
      }, {
        name: 'Rings',
        y: 10.38
      }, {
        name: 'Spriritual/Religion',
        y: 4.77
      }, {
        name: 'Coins',
        y: 0.91
      }, {
        name: 'Designer',
        y: 0.2
      }]
    }]
  });

  //segmented Per Designer
  public segmentedManufacturePie = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Taps per segmented Manufacturer'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Designers',
      //colorByPoint: true,
      data: [{
        name: 'Abs',
        y: 44.33
      }, {
        name: 'Lal Krishna',
        y: 23.03,
        sliced: true,
        selected: true
      }, {
        name: 'Ramnresh',
        y: 68.38
      }, {
        name: 'Mumbai',
        y: 12.77
      }, {
        name: 'Pune Designers',
        y: 30.91
      }, {
        name: 'Varshaan',
        y: 0.8
      }]
    }]
  });

  //segmented Per Shop location
  public segmentedShopePie = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Taps per segmented Shop Location'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Shop',
      //colorByPoint: true,
      data: [{
        name: 'Banjara Hills',
        y: 40.33
      }, {
        name: 'Gachibowli',
        y: 27.03,
        sliced: true,
        selected: true
      }, {
        name: 'Tolichowki',
        y: 20.38
      }, {
        name: 'Hitech City',
        y: 30.77
      }, {
        name: 'Madhapur',
        y: 24.91
      }, {
        name: 'Yusuf Guda',
        y: 6
      }]
    }]
  });
  constructor() {
    this.chart = cloneDeep(this.yearlyGraph);
    this.segmentedPieChart = cloneDeep(this.segmentedPie);
    this.filterViewsData(0, 'views');
    this.filterViewsData(0, 'buys');
  }


  ngOnInit() {
    //creating reactive form
    this.form = new FormGroup({
      tapInfo: new FormControl("monthly")
    });
  }

  generateGraph(oldVal, newVal) {
    if (newVal === "weekly") {
      this.chart = cloneDeep(this.weeklyBar);
    } else if (newVal === "monthly") {
      this.chart = cloneDeep(this.yearlyGraph);
    } else if (newVal === "yearly") {
      this.chart = cloneDeep(this.yearlyGraph);
    }
  }

  viewsTablePagination(index) {
    if(index === 'prev'){
      this.paginationStart = this.paginationStart - 6;
      this.filterViewsData(this.paginationStart, 'views');
    } else if(index === 'next') {
      this.paginationStart = this.paginationStart + 6;
      this.filterViewsData(this.paginationStart, 'views');
    } else {
      this.paginationStart = (index-1) * 6;
      this.filterViewsData(this.paginationStart, 'views');
    }
  }

  buysTablePagination(index) {
    if(index === 'prev'){
      this.paginationStart = this.paginationStart - 6;
      this.filterViewsData(this.paginationStart, 'buys');
    } else if(index === 'next') {
      this.paginationStart = this.paginationStart + 6;
      this.filterViewsData(this.paginationStart, 'buys');
    } else {
      this.paginationStart = (index-1) * 6;
      this.filterViewsData(this.paginationStart, 'buys');
    }
  }

}
