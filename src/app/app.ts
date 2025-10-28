import { Component} from '@angular/core';
import { Empleados } from './empleados/empleados';
@Component({
  selector: 'app-root',
  imports: [Empleados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'frontend-angular';
}
