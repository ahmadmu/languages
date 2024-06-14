import { TestBed } from '@angular/core/testing';
import { DynamicComponent } from './dynamic.component';

describe('DynamicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DynamicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'languages' title`, () => {
    const fixture = TestBed.createComponent(DynamicComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('languages');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DynamicComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, languages');
  });
});
