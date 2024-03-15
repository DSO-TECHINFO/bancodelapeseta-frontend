# CONTRIBUTING.md

## Bienvenido a 'Banco De La Peseta' 🏦

¡Estamos encantados de que estés interesado en contribuir a este proyecto hecho por y para la comunidad!. Este documento te guiará a través de los pasos necesarios para aportar tu valioso trabajo a el proyecto 'Banco De La Peseta', importante mencionar que este proyecto está desarrollado con Ionic. Queremos hacer que este proceso de contribución sea algo sencillo y transparente, así que aquí tienes una guía paso a paso.

### Primeros pasos 🚀

1. **Familiarízate con la estructura de directorios**: Echa un vistazo a la estructura de nuestro proyecto para entender cómo están organizados los archivos y las carpetas. Esto te ayudará a encontrar rápidamente lo que necesitas y a saber dónde colocar tus cambios o adiciones.

2. **Configura tu entorno de desarrollo**: Estamos utilizando `npm` como gestor de paquetes (el gestor de paquetes por defecto de Node.js). Asegúrate de tenerlo instalado en tu máquina.

### Cómo contribuir 🛠

#### 1. Configura tu entorno

- **Fork el repositorio**: Haz un "fork" del proyecto a tu cuenta de GitHub para tener tu propia copia. Para hacer esto, haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio en GitHub. Esto creará una copia del repositorio en tu cuenta de GitHub.

- **Clona tu fork**: Después de hacer un fork, clona el repositorio a tu máquina local. Para hacerlo, copia la URL de tu fork haciendo clic en el botón verde "Code" y luego ejecuta `git clone <URL del fork>` en tu terminal.

- **Añade el repositorio original como remoto**: Para mantener tu fork actualizado con los cambios del repositorio original, agrega el repositorio original como un remoto. Puedes hacerlo ejecutando `git remote add upstream <URL del repositorio original>`.

- **Instala las dependencias**: Navega hasta el directorio del proyecto clonado y ejecuta `npm install` para instalar todas las dependencias necesarias.

#### 2. Trabaja en tus cambios

- **Sincroniza el fork**: Puedes hacerlo desde `github.com/tu-usuario/tu-repositorio-de-bancodelapeseta-frontend` y haciendo click en `Sync fork`. También puedes hacerlo desde la terminal `gh repo sync -b main` o `git switch main && git fetch upstream && git merge upstream/main`. Más información en la [documentación oficial de GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
- **Crea una nueva rama**: Antes de empezar a trabajar en tus cambios, crea una nueva rama utilizando `git checkout -b nombre-de-tu-nueva-rama`. (por ejemplo: `git checkout -b feat/register-account`).
- **Desarrolla tus cambios**: Implementa tus cambios o mejoras en tu rama local. Asegúrate de seguir las prácticas y estándares de código del proyecto.
- **Prueba tus cambios**: Ejecuta `npm start` para iniciar el servidor de desarrollo y revisa tus cambios en el navegador. (La URL por defecto es `http://localhost:4200`).

#### 3. Como evitar conflictos entre ramas

1. Ir a su rama dev local y traerse los últimos cambios del repositorio remoto:
```
git checkout dev
git pull origin dev
```

2. Vuelvan a su rama:
```
git checkout feat/your-branch
```

3. Actualicen su rama con los cambios que trajeron de la rama dev remota
```
git merge dev
```

4. Ejecutar
```
npm ci
npm run build
```

6. Corregir problemas (si es necesario) antes de publicar su PR)...

7. Publicar la PR
```
git push origin feat/your-branch
```

#### 3. Envía tus cambios

- **Verificación de errores**: Antes de enviar tus cambios, asegúrate de que no hay errores después de haber actualizado tu rama con la rama dev remota. Ejecuta `npm ci` y `npm run build` para verificar que todo está correcto.
- **Commit de tus cambios**: Una vez estés satisfecho con tus cambios, haz commit de ellos con un mensaje claro y descriptivo.
- **Push a tu fork**: Haz push de tu rama con los cambios a tu fork en GitHub utilizando `git push origin nombre-de-tu-rama`.
- **Crea un Pull Request (PR)**: En GitHub, ve a tu fork de 'bancodelapeseta-frontend' y haz clic en "Pull request" para iniciar uno. Asegúrate de describir claramente qué cambios has realizado y por qué son necesarios o útiles para el proyecto.

### Buenas prácticas 🌟

- **Revisa los issues abiertos** antes de abrir una PR, si crees que puedes solucionarlo y no hay ninguna otra PR ya abierta, usa `#numero-de-la-issue` en tu commit para que se añada a la issue. No está demás dejar algún comentario para que se sepa que PR está siendo usada para la issue.
- **Revisa los PRs abiertos** para asegurarte de que no estás trabajando en algo que ya está en progreso. Siempre puedes ayudar en PRs ya abiertas, aportando cambios, comentarios, revisiones, etc..
- **Mantén tus commits limpios y descriptivos**.
- **Sigue las convenciones de código del proyecto**.
- **Actualiza tu rama con frecuencia** para mantenerla al día con la rama 'dev', la cual es la rama principal del proyecto (en cuanto a desarrollo se refiere).
- **Participa en las discusiones** de tu PR si hay comentarios o sugerencias.

### ¿Necesitas ayuda? 🆘

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un "issue" en el repositorio. Los miembros de la comunidad estarán encantados de ayudarte.

¡Gracias por contribuir a este gran proyecto 'Banco De La Peseta'! Juntos estamos construyendo algo increíble. 🚀
