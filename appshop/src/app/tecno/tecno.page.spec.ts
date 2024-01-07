import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnoPage } from './tecno.page';

describe('TecnoPage', () => {
  let component: TecnoPage;
  let fixture: ComponentFixture<TecnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
