import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughntChartComponent } from './my-doughnt-chart.component';

describe('MyDoughntChartComponent', () => {
  let component: MyDoughntChartComponent;
  let fixture: ComponentFixture<MyDoughntChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDoughntChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughntChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
