import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({  
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados/empleados.html',
  styleUrl: './empleados/empleados.css'
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };

  constructor(private service: EmpleadosService) {}

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  onSubmit(): void {
    this.service.createEmpleado(this.nuevoEmpleado).subscribe(() => {
      this.ngOnInit();
      this.nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };
    });
  }
}