import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './static.component.html',
  styleUrl: './static.component.scss'
})
export class StaticComponent {
  title = $localize`Languages demo application`;

  route = inject(ActivatedRoute)
  document = inject(DOCUMENT)
  window = this.document.defaultView as any
  lang = this.route.toString().includes('de') ? 'de' : 'en';
}
