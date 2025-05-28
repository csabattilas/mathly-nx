import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@mathly-nx/user';

@Component({
  selector: 'mathly-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user = input<User | null>();
}
