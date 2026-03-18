Agenda Digital IES Recreo 2026
Sitio web institucional para la Semana de Ambientación de Ingresantes 2026 del Instituto de Educación Superior Recreo, Catamarca, Argentina.

Descripción
La Agenda Digital es una aplicación web que centraliza toda la información relevante para los ingresantes 2026 del IES Recreo:

Cronograma semanal de actividades por carrera (25/03 al 01/04)
Oferta académica completa (Formación Docente y Técnica)
Reglamento Académico Institucional (RAI)
Organigrama institucional
Encuesta de investigación para ingresantes


Tecnologías

React 18
Vite
Tailwind CSS
Lucide React — íconos


Instalación y uso
bash# 1. Clonar el repositorio
git clone https://github.com/Gonzalo217/agenda2026.git
cd agenda2026

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
El sitio estará disponible en http://localhost:5173.

Scripts disponibles
ComandoDescripciónnpm run devInicia el servidor de desarrollonpm run buildGenera la versión de producción en /distnpm run previewPrevisualiza la build de producción

Estructura del proyecto
proyecto/
├── public/
│   ├── favicon.ico
│   ├── logo-ies-recreo.png
│   ├── REGLAMENTO.pdf
│   └── cronograma-ingresantes-2026.pdf
├── src/
│   ├── components/
│   │   ├── CareerCard.jsx       # Tarjeta de carrera
│   │   ├── ScheduleTable.jsx    # Grilla semanal de actividades
│   │   ├── Reglamento.jsx       # Sección RAI
│   │   ├── Organigrama.jsx      # Organigrama institucional
│   │   └── Encuesta.jsx         # Encuesta de investigación
│   ├── data/
│   │   └── schedules.json       # Horarios por carrera
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

Carreras incluidas
Formación Docente

Profesorado de Inglés
Profesorado de Biología
Profesorado de Historia
Profesorado de Geografía
Profesorado de Matemáticas
Profesorado de Artes Visuales

Formación Técnica

Tec. Sup. en Enfermería Profesional
Tec. Sup. en Tecnología de los Alimentos


Personalización
Cambiar el link de la encuesta
Abrí src/components/Encuesta.jsx y reemplazá:
jsxhref="https://TU-LINK-DE-ENCUESTA-AQUI"
Actualizar horarios
Editá src/data/schedules.json con los nuevos datos.
Reemplazar el logo
Copiá el archivo en public/ y actualizá el src en App.jsx.

Institución
Instituto de Educación Superior Recreo
Recreo, Catamarca, Argentina
Ciclo lectivo 2026
