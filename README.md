# Frontend Angular - Examen 2

## Descripción
Aplicación Angular (versión 20.3.4) que consume una API REST en Laravel para mostrar una tabla de empleados y permitir la inserción de nuevos registros mediante un formulario. 
Utiliza componentes standalone, HttpClient, FormsModule y CommonModule.

## Requisitos
- Node.js 22.15.1
- Angular CLI 20.3.4
- zone.js (incluido en dependencias)

## Estructura de archivos clave
src/
├── app/
│   ├── app.ts              → Componente raíz (AppComponent)
│   ├── app.html            → Plantilla raíz: <app-empleados></app-empleados>
│   ├── app.config.ts       → Configuración global: provideHttpClient()
│   ├── empleados.service.ts → Servicio para consumir API (GET/POST)
│   └── empleados/
│       ├── empleados.ts    → Componente standalone: lógica de lista y formulario
│       ├── empleados.html  → Tabla con *ngFor + formulario con ngModel
│       └── empleados.css   → Estilos básicos (opcional)
├── main.ts                 → Importa 'zone.js' y bootstrap de la app
└── angular.json            → Configuración de build con polyfills: ["zone.js"]

## Instalación
1. Clona el repositorio:
   git clone https://github.com/vallejosroberto-uab/VallejosRoberto-FontendExamen2.git
2. Entra al directorio:
   cd VallejosRoberto-FontendExamen2
3. Instala dependencias:
   npm install

## Ejecución
1. Asegúrate de que el backend Laravel esté corriendo:
   php artisan serve
   → Accesible en: http://127.0.0.1:8000/api/empleados
2. Inicia el frontend Angular:
   ng serve
3. Abre el navegador en:
   http://localhost:4200

## Funcionalidades
- Muestra lista de empleados obtenida desde el backend (10 registros iniciales por seeder).
- Formulario para crear nuevos empleados con validación básica (required).
- Comunicación con API Laravel mediante HttpClient.
- Uso de *ngFor, ngModel, (ngSubmit), standalone components.

## Comandos Git (historial recomendado)
git add .
git commit -m "feat(web): vista tabla + formulario insertar empleados"
git push origin dev
git checkout main
git merge dev -m "merge: integrar dev en master para versión final"
git push origin main

## Notas importantes
- El proyecto usa Vite como servidor de desarrollo (ng serve).
- zone.js debe estar importado en main.ts y listado en polyfills de angular.json (solo en build.options).
- No se usan módulos NgModule, todo es standalone.
- Los errores comunes (ngModel, *ngFor, Zone.js) se resuelven con:
  → imports: [CommonModule, FormsModule] en el componente standalone
  → import 'zone.js'; en main.ts
  → "polyfills": ["zone.js"] en build.options de angular.json

## Entrega
El proyecto está listo para producción. Compila con:
ng build
Los archivos generados estarán en dist/.

¡Listo para evaluar!