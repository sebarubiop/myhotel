# myHotel

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 9.1.11. Este proyecto es un administrador de datos de personas.

## Principales características

La lista de personas que se agregan a través de un formulario, no son alamcenadas en una base de datos. Solo se guardan en una variable observable (más específicamente un `BehaviorSubject` de **rxjs**). Esto quiere decir que los datos en la tabla solo existirán en application scope. Si se refresca la página, los datos se perderán.
El estilo utilizado para los componentes UI son de Angular Material. Estos componentes principalmente son los componentes de formulario (inputs, select, textarea, etc) para el cual se utilizó *ReactiveForm* para desplegar algunos validadores predeterminados y algunos personalizados (como el validador de RUT). Otros componentes de Angular Material imporantes son, **MatTable** y **MatPaginator** para entregar una mejor experiencia para el usuario.
Por último, los resultados cuentan con un filtro por resultados y un pipe que ordena los registros de acuerdo a su fecha de creación.

## Cómo correr la app

Clona este repo e instala los paquetes de dependencias (previamente tener Node.js instalado). Correr `npm install` en la raíz del proyecto y luego corre el comando `ng serve` para correr la app con el servidor de dev. Navega a `http://localhost:4200/`. 

## DEMO online

Ver la app funcionando en el siguiente link [https://myhotel-techtest.herokuapp.com/](https://myhotel-techtest.herokuapp.com/).
