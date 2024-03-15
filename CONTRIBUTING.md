# CONTRIBUTING.md

## Bienvenido a 'Banco De La Peseta' 🏦

¡Estamos encantados de que te interese contribuir a 'Banco De La Peseta', un proyecto hecho por y para la comunidad! Este documento está diseñado para guiarte a través del proceso de contribución de manera sencilla y transparente. Es importante mencionar que este proyecto está desarrollado con Ionic.

### Primeros pasos 🚀

* **Familiarízate con el stack y la estructura del proyecto**: Revisa cómo están organizados los archivos y las carpetas para facilitar la localización de lo que necesitas y saber dónde añadir tus cambios.

* **Configura tu entorno de desarrollo**: Utilizamos `npm`, el gestor de paquetes por defecto de Node.js. Asegúrate de tenerlo instalado en tu sistema.

### Cómo contribuir 🛠

#### 1. Prepara tu entorno

- **Realiza un fork del repositorio**: Haz clic en "Fork" en la parte superior derecha de la página de GitHub. Esto te permitirá trabajar en tu propia copia del proyecto.
- **Clona tu fork a tu máquina local**: Ejecuta el comando: `git clone <URL del fork de tu cuenta>` para clonar el repositorio.
- **Agrega el repositorio original como un remoto**: Ejecuta el comando: `git remote add upstream https://github.com/rayexbomx/bancodelapeseta-frontend.git`.
- **Cambia a la rama `dev`**: Ejecuta el comando: `git checkout dev` para cambiar a la rama de desarrollo.
- **Instala las dependencias**: En el directorio del proyecto, ejecuta `npm install`.

#### 2. Trabaja en tus cambios

- **Antes que otra cosa, actualiza tu fork**: Sincroniza tu fork con el repositorio original (upstream). Para esto, primero asegurate de estar en la rama `dev`, ejecuta el comando: `git checkout dev && git fetch upstream` y luego ejecuta: `git merge upstream/dev` para fusionar los cambios del repositorio original en tu rama local `dev`.

- **Crea una nueva rama para tus cambios**: Ejecuta el comando: `git checkout -b <nombre-de-tu-rama>` para empezar a trabajar. (Por ejemplo, *"git checkout -b feature/new-footer*").

- **Desarrolla y prueba tus cambios**: Implementa tus mejoras y ejecuta `npm start` para probarlos en `http://localhost:4200`.

#### 3. Prevenir conflictos entre ramas

Antes de publicar tus cambios, es crucial volver a sincronizar tu rama 'dev' local. Esto te asegurará de que tus cambios no entren en conflicto con los cambios de otros contribuidores. Sigue estos pasos para prevenir conflictos:

* Asegúrate de que tu rama esté limpia con `git status` y que no tengas cambios pendientes por hacer commit.
* Cambia a la rama dev con `git checkout dev`.
* Trae los últimos cambios del repositorio original remoto con `git pull upstream dev`.
* Cambia de nuevo a tu rama con `git checkout <nombre-de-tu-rama>`.
* Actualiza tu rama con los cambios que acabas de traer. Usa: `git merge dev`.
* Resuelve cualquier conflicto que pueda surgir. Si tienes dudas, no dudes en preguntar.
* Ejecuta `npm ci` y `npm run build`. No debe haber errores.
* Echa un último vistazo a tus cambios con `npm start` y verifica que todo siga funcionando correctamente.

#### 4. Envía tus cambios

- **Haz commit y push de tus cambios**: Usa mensajes claros y descriptivos para tus commits. Luego, haz push a tu fork con `git push origin <nombre-de-tu-rama>`.
- **Crea un Pull Request (PR)**: Describe claramente tus cambios y su importancia en el PR.

### Buenas prácticas 🌟

- **Consulta los issues y PRs abiertos** antes de comenzar tu trabajo para evitar duplicidades.
- **Mantén tus commits limpios** y sigue las convenciones de código del proyecto.
- **Participa activamente** en las discusiones de tus PRs para integrar feedback y sugerencias.

### ¿Necesitas ayuda? 🆘

Si tienes dudas o necesitas asistencia, no dudes en abrir un issue en el repositorio. La comunidad estará dispuesta a ayudarte.

¡Gracias por tu interés en contribuir a 'Banco De La Peseta'! Juntos, estamos construyendo algo increíble. 🚀
