import { Component } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
@Component({
  selector: 'app-widgets',
  imports: [SharedModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.less',
})
export class WidgetsComponent {}
