import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphDummyComponent } from './graph-dummy.component';

describe('GraphDummyComponent', () => {
  let component: GraphDummyComponent;
  let fixture: ComponentFixture<GraphDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphDummyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
