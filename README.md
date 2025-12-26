# TextNode 📝

Una aplicación web moderna de notas y organización con diseño colorido, hecha con HTML, CSS y JavaScript vanilla.

## ✨ Características

- ✍️ **Crear notas** con título, contenido y categoría
- 🗑️ **Eliminar notas** con confirmación
- 🔍 **Búsqueda en tiempo real** por título, contenido o categoría
- 📥 **Descargar notas individuales** como .TXT o .JSON
- 💾 **Guardado automático** con localStorage
- 📊 **Estadísticas** de notas y categorías
- 📱 **Completamente responsivo**

## 🚀 Cómo ejecutar

### Opción 1: Directamente en el navegador
1. Abre el archivo `index.html` con tu navegador
2. ¡Listo! La app está lista para usar

### Opción 2: Con un servidor local (Python)
```bash
cd ~/projects/textnode
python -m http.server 8000
```
Luego abre en tu navegador: `http://localhost:8000`

### Opción 3: Con Node.js (http-server)
```bash
npm install -g http-server
cd ~/projects/textnode
http-server
```

## 📁 Estructura del Proyecto

```
textnode/
├── index.html      # HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este archivo
```

## 🎯 Cómo usar

### Crear una nota
1. Escribe un **título** en el primer campo
2. Escribe el **contenido** en el textarea
3. (Opcional) Agrega una **categoría**
4. Haz clic en **"Add Note"** o presiona `Ctrl + Enter`

### Descargar una nota
- Después de crear, aparecerá un banner verde con opciones de descarga
- O haz clic en los iconos de descarga en cada tarjeta:
  - 📄 Descargar como .TXT
  - 📥 Descargar como .JSON

### Buscar notas
- Usa el buscador superior para filtrar por:
  - Título
  - Contenido
  - Categoría

### Editar una nota
- Haz clic en el icono de lápiz ✏️
- La nota se cargará en el formulario
- Modifica los datos y crea de nuevo

### Descargar todo
- Ve a la sección "Descargar todo" al final
- Descarga todas tus notas como:
  - Un único archivo .TXT
  - Un archivo .JSON con metadatos

## 💾 Almacenamiento

Los datos se guardan automáticamente en **localStorage** del navegador, lo que significa:
- ✅ Tus notas persisten al recargar la página
- ✅ No necesitas servidor backend
- ⚠️ Los datos se guardan solo en este navegador/dispositivo

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Glassmorphism, gradientes y animaciones
- **JavaScript Vanilla** - Sin frameworks
- **FontAwesome 6** - Iconos

## 🎨 Diseño

- **Tema oscuro** con gradientes morados y azules
- **Glassmorphism** con efecto vidrio transparente
- **Dark theme profesional** perfecto para largas sesiones
- **Animaciones suaves** para mejor UX

## 📝 Ejemplo de nota

```
Título: Ideas para el proyecto
Categoría: Work
Contenido: 
- Implementar búsqueda avanzada
- Agregar etiquetas múltiples
- Diseñar página de configuración
```

## ✅ Requisitos

- Un navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Nada más! Sin dependencias externas

## 📄 Licencia

MIT - Libre para usar y modificar

## 🤝 Contribuciones

¡Las sugerencias y mejoras son bienvenidas!

---

**Disfruta organizando tus pensamientos con TextNode** 🎉
