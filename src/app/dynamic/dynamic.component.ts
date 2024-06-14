import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TranslocoDirective],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent implements OnInit {

  lang = 'en';
  rtl = false;
  vertical = false;

  translocoService = inject(TranslocoService)

  title = this.translocoService.translate('title');

  ngOnInit(): void {
    this.lang = this.translocoService.getActiveLang();
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang)
    this.lang = lang;
  }
}
