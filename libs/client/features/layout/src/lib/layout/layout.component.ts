import { Component } from '@angular/core';
import { HeaderComponent } from '@mathly-nx/ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-layout',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
