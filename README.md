# Restaurant Page - The Odin Project

Proyecto de práctica de **The Odin Project** que demuestra el uso de módulos ES6, Webpack y navegación por tabs dinámica sin recargar la página.

## 🍽️ Descripción

**La Taverna** es un sitio web de restaurante con navegación por pestañas (tabs) que carga contenido dinámicamente usando JavaScript modular. El proyecto implementa:

- ✅ Módulos ES6 (`import`/`export`)
- ✅ Webpack para bundling
- ✅ Tab switching sin recargar la página
- ✅ HtmlWebpackPlugin para generar HTML
- ✅ CSS Loaders para estilos
- ✅ Separación de concerns (cada tab en su propio módulo)

## 📁 Estructura del Proyecto

```
restaurant-page/
├── src/
│   ├── index.js          # Controlador principal + tab-switching logic
│   ├── home.js           # Módulo de la página Home
│   ├── menu.js           # Módulo de la página Menu
│   ├── contact.js        # Módulo de la página Contact
│   ├── styles.css        # Estilos CSS
│   └── template.html     # Template HTML base
├── dist/                 # Archivos generados (creado al hacer build)
│   ├── index.html        # HTML generado por HtmlWebpackPlugin
│   └── main.js           # Bundle de JavaScript
├── node_modules/         # Dependencias npm
├── webpack.config.js     # Configuración de Webpack
├── package.json          # Configuración npm
├── .gitignore            # Git ignore (node_modules, dist)
└── README.md             # Este archivo
```

## 🚀 Instalación y Uso

### 1. Clonar o descargar el proyecto

```bash
cd restaurant-page
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:
- `webpack` y `webpack-cli`
- `webpack-dev-server`
- `html-webpack-plugin`
- `style-loader` y `css-loader`

### 3. Modo Desarrollo (Recomendado)

```bash
npm run dev
```

Esto:
- Abre automáticamente el navegador en `http://localhost:8080`
- Recarga automáticamente cuando haces cambios
- Incluye source maps para debugging

### 4. Build para Producción

```bash
npm run build
```

Genera los archivos optimizados en `dist/`:
- `dist/index.html`
- `dist/main.js`

Luego puedes abrir `dist/index.html` directamente en el navegador.

## 🎯 Características Implementadas

### Arquitectura Modular

Cada página está en su propio módulo:

**home.js**
```javascript
export function loadHome() {
  // Crea y retorna contenido de la página Home
}
```

**menu.js**
```javascript
export function loadMenu() {
  // Crea y retorna contenido del menú
}
```

**contact.js**
```javascript
export function loadContact() {
  // Crea y retorna contenido de contacto
}
```

### Tab Switching Logic (index.js)

```javascript
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function loadPage(pageLoader) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Limpiar
  content.appendChild(pageLoader()); // Cargar nuevo contenido
}

// Event listeners en botones
homeBtn.addEventListener('click', () => loadPage(loadHome));
menuBtn.addEventListener('click', () => loadPage(loadMenu));
contactBtn.addEventListener('click', () => loadPage(loadContact));
```

### Contenido de las Páginas

#### 🏠 Home
- Hero section con título y subtítulo
- Sección "Nuestra Historia"
- Tarjetas de características (Vinos, Chef, Ingredientes)
- Horarios de atención

#### 📋 Menu
- Entrantes (4 platos)
- Platos Principales (5 platos)
- Postres (4 opciones)
- Bebidas
- Cada ítem con nombre, descripción y precio

#### 📞 Contact
- Información de contacto (dirección, teléfono, email)
- Formulario de reservas funcional
- Horarios de atención telefónica

## 🎨 Diseño CSS

- **Colores**: Tema de restaurante elegante (dorado, marrón, crema)
- **Tipografía**: Georgia (serif) para look clásico
- **Responsive**: Grid y flexbox adaptativos
- **Animaciones**: Fade-in, hover effects, transiciones suaves
- **Sticky header**: Navegación siempre visible

## 📦 Configuración de Webpack

```javascript
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Limpia dist/ antes de cada build
  },
  devtool: 'eval-source-map',  // Source maps para debugging
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // Template base
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ],
  },
};
```

## 🌐 Deployment a GitHub Pages

### Setup Inicial

1. **Crear repositorio en GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Restaurant Page project"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/restaurant-page.git
git push -u origin main
```

2. **Crear branch para GitHub Pages** (solo la primera vez)
```bash
git branch gh-pages
```

### Deploy/Redeploy (cada vez que hagas cambios)

```bash
# 1. Asegurarte de que todo está commiteado
git status
git add .
git commit -m "Update: descripción de cambios"

# 2. Cambiar a gh-pages y sincronizar con main
git checkout gh-pages
git merge main --no-edit

# 3. Crear el bundle
npm run build

# 4. Subir dist/ a gh-pages
git add dist -f
git commit -m "Deployment commit"

# 5. Push solo la carpeta dist como root de gh-pages
git subtree push --prefix dist origin gh-pages

# 6. Volver a main
git checkout main
```

### Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **gh-pages branch**
4. Carpeta: **/ (root)**
5. Save

Tu sitio estará en: `https://TU_USUARIO.github.io/restaurant-page/`

## 🧪 Testing

### Verificar que JavaScript funciona

1. Abre la consola del navegador (F12)
2. Deberías ver:
   ```
   ✅ JavaScript cargado correctamente!
   🚀 Inicializando Restaurant Page...
   ✨ Aplicación lista!
   ```

### Verificar tab switching

1. Haz clic en los botones Home, Menu, Contact
2. El contenido debe cambiar sin recargar la página
3. El botón activo debe tener estilo dorado
4. La URL no debe cambiar (SPA behavior)

### Verificar que Webpack funciona

```bash
# Ver que genera los archivos correctamente
npm run build
ls dist/

# Deberías ver:
# index.html
# main.js
```

## 📚 Conceptos Aprendidos

1. **Módulos ES6**: `import`/`export` para organizar código
2. **Webpack**: Bundling de múltiples archivos en uno solo
3. **SPA (Single Page Application)**: Navegación sin recargas
4. **DOM Manipulation**: Crear elementos dinámicamente
5. **Event Delegation**: Event listeners en navegación
6. **Separation of Concerns**: Cada módulo tiene una responsabilidad
7. **Build Process**: Desarrollo vs Producción
8. **GitHub Pages Deployment**: Despliegue con subtree

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Módulos, arrow functions, template literals
- **Webpack 5**: Module bundler
- **HTML5**: Estructura semántica
- **CSS3**: Grid, Flexbox, animaciones, variables
- **npm**: Gestión de paquetes

## 📝 Scripts npm

```json
{
  "scripts": {
    "build": "webpack",              // Construir bundle
    "dev": "webpack serve --open"    // Dev server con hot reload
  }
}
```

## 🔗 Enlaces

- [The Odin Project - Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)
- [Webpack Documentation](https://webpack.js.org/)
- [MDN - ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## ✅ Checklist del Proyecto

- [x] Setup con npm y Webpack
- [x] `.gitignore` con `node_modules` y `dist`
- [x] `template.html` con header, nav y #content
- [x] Event listeners en botones de navegación
- [x] Módulos separados: home.js, menu.js, contact.js
- [x] Tab-switching que limpia y carga contenido dinámicamente
- [x] Estilos CSS importados desde JavaScript
- [x] HtmlWebpackPlugin configurado
- [x] Build exitoso con `npx webpack`
- [x] Dev server funcionando
- [x] Documentación completa
- [x] Instrucciones de deployment

## 🎉 Resultado Final

Un sitio web de restaurante completamente funcional con:
- Navegación fluida entre pestañas
- Diseño elegante y responsivo
- Código modular y mantenible
- Listo para deployment en GitHub Pages

---

**Desarrollado como parte de The Odin Project** 🚀
