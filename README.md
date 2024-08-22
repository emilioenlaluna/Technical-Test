# Motor de Decisión de Crédito

Este repositorio contiene la implementación de un motor de decisión de crédito desarrollado en JavaScript. El motor se encarga de determinar los montos mínimos y máximos de crédito para un cliente, así como de calcular la línea de crédito óptima, basada en varias características del cliente, como el tipo de nómina, la fecha desde el primer empleo y el género.

## Tabla de Contenidos

- Descripción
- Instalación
- Uso
- Ejemplos de Prueba
- Contribuciones
- Licencia

## Descripción

El motor de decisión de crédito se basa en un conjunto de reglas predefinidas que mapean las características de un cliente a valores de crédito mínimo, máximo y una recomendación de línea de crédito óptima. Las características consideradas son:

- Tipo de Nómina: A, B, C, D
- Fecha Desde el Primer Empleo
- Género: Masculino (m) o Femenino (f)

El motor selecciona el monto mínimo y máximo de crédito utilizando tablas de referencia y calcula la línea de crédito óptima con base en dos posibles fórmulas, eligiendo el valor máximo entre ambas.

## Instalación

Para utilizar este motor de decisión de crédito, primero clona el repositorio y asegúrate de tener Node.js instalado en tu máquina.

```bash
git clone https://github.com/tu-usuario/decision-credit-motor.git
cd decision-credit-motor
```
## Uso
Para ejecutar el motor de decisión de crédito, utiliza el siguiente comando en la terminal:

```bash
node motor.js

```



El archivo `motor.js` contiene la implementación principal del motor y algunos ejemplos de prueba que demuestran su funcionamiento.

### Estructura del Código

- `calculoMotor`: Función principal que calcula los montos mínimos y máximos de crédito, así como la recomendación de línea de crédito óptima.
- `calcularMesesDesdeEmpleo`: Calcula el número de meses desde la fecha del primer empleo hasta la fecha actual.
- Funciones auxiliares: Estas funciones se encargan de buscar los montos mínimos y máximos de crédito en las tablas predefinidas.

## Ejemplos de Prueba

El repositorio incluye algunos ejemplos de prueba para demostrar cómo funciona el motor de decisión de crédito. Aquí tienes un resumen de los resultados de los ejemplos incluidos:

| Tipo de Nómina | Fecha Desde el Primer Empleo | Género | Monto Mínimo de Crédito | Monto Máximo de Crédito | Línea Óptima de Crédito |
|----------------|-----------------------------|--------|-------------------------|-------------------------|-------------------------|
| A              | 12/06/2022                  | f      | 800                     | 4100                    | 857.75                  |
| B              | 30/12/1993                  | f      | 700                     | 4400                    | 764.75                  |
| C              | 19/09/2020                  | m      | 600                     | 4600                    | 670                     |
| D              | 15/01/2019                  | m      | 1000                    | 4300                    | 1057.75                 |

Para agregar nuevos ejemplos, simplemente edita el archivo `motor.js` y añade las pruebas deseadas.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes una idea para mejorar el motor, no dudes en abrir un issue o enviar un pull request.

1. Haz un fork del proyecto.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
