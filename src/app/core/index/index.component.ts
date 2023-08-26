import { Component } from '@angular/core';
import { CantgoogleitService } from 'src/app/services/cantgoogleit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent {
  
    constructor(private cantgoogleit: CantgoogleitService) { }
  
}
