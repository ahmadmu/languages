import { TestBed } from '@angular/core/testing';
import { StaticComponent } from './static.component';

describe('StaticComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StaticComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'languages' title`, () => {
    const fixture = TestBed.createComponent(StaticComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('languages');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StaticComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, languages');
  });
});
