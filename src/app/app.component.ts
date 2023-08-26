import { Component } from '@angular/core';
import { CantgoogleitService } from './services/cantgoogleit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cantgoogleit';

  constructor(private cantgoogleit: CantgoogleitService) {}

  async ngOnInit() {
    await this.cantgoogleit.getCookie();
  }
}
