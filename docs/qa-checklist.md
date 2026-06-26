# QA Checklist — Bruchou Home Evolution

Go/no-go checklist before merging `feature/bruchou-home-evolution` to `main`.
Mark each item `[x]` when verified. Block any merge if a `[ ]` remains.

---

## Contenido y verificabilidad

- [ ] **BRU-QA-01** No hay claims genéricos como titular de sección sin sustento concreto.
- [ ] **BRU-QA-02** Ningún dato de asunto representativo es inventado: sector, tipo de operación, capacidades y jurisdicción son reales o marcados como `<!-- TODO -->`.
- [ ] **BRU-QA-03** El texto del hero no contiene claims no verificables ("los mejores", "líderes en…").
- [ ] **BRU-QA-04** Los reconocimientos listados en la sección Awards corresponden a premios reales de Bruchou (validar con equipo). No hay entradas duplicadas.
- [ ] **BRU-QA-05** Los nombres de socios en la leadership strip son reales o el campo está marcado `<!-- TODO -->` — no hay nombres ficticios.

## Estructura y navegación

- [ ] **BRU-QA-06** Orden de secciones respeta el brief: Hero → Cómo trabajamos → Sectores → Asuntos representativos → Áreas/liderazgo → Insights → AI Search → Reconocimientos → Footer.
- [ ] **BRU-QA-07** Todos los links del mega menú resuelven sin 404. En particular `#asuntos-representativos` (no `#casos-de-exito`).
- [ ] **BRU-QA-08** Nav incluye: Nosotros, Áreas de práctica, Sectores, Equipo, Novedades, Carrera, Contacto.
- [ ] **BRU-QA-09** El link "Ver asuntos representativos" en la sección Áreas navega a `#asuntos-representativos` sin romper scroll.
- [ ] **BRU-QA-10** No hay rutas rotas a páginas existentes (`./areas-de-practica.html`, `https://bruchoufunes.com/profesionales#tabs`).

## Accesibilidad

- [ ] **BRU-QA-11** `:focus-visible` activo en todos los elementos interactivos (verificar con Tab).
- [ ] **BRU-QA-12** Imágenes decorativas tienen `alt=""`. Imágenes con contenido tienen `alt` descriptivo.
- [ ] **BRU-QA-13** Headings respetan jerarquía H1 → H2 → H3 sin saltos.
- [ ] **BRU-QA-14** Contraste texto/fondo ≥ 4.5:1 en secciones claras, ≥ 3:1 en elementos grandes (verificar con DevTools o axe).

## Responsive

- [ ] **BRU-QA-15** `.matters-grid` colapsa a columna única en < 1100 px.
- [ ] **BRU-QA-16** `.leadership-strip__cards` colapsa a columna en < 720 px.
- [ ] **BRU-QA-17** `.practice-stage__ctas` apila links verticalmente en < 720 px.
- [ ] **BRU-QA-18** Sector cards sin íconos se ven correctas a 375 px, 768 px y 1440 px.
- [ ] **BRU-QA-19** Hero nav no produce overflow horizontal en 375 px (scroll horizontal aceptable solo en awards strip).

## Rendimiento y correctitud

- [ ] **BRU-QA-20** Sin errores en consola del navegador al cargar la home.
- [ ] **BRU-QA-21** Servidor local funciona: `node .serve.js` → `http://127.0.0.1:4173` (o abrir `index.html` directo).
- [ ] **BRU-QA-22** No hay dependencias JS nuevas no justificadas. GSAP sigue siendo el único vendor.
- [ ] **BRU-QA-23** Animaciones de reveal (`.js-reveal`) funcionan al hacer scroll. No quedan elementos permanentemente ocultos si JS falla.

## Pendientes de datos reales (no bloquean merge pero deben quedar marcados)

- [ ] **TODO-01** Asunto representativo Nº 03 — completar sector, título, descripción, capacidades y jurisdicción con dato real.
- [ ] **TODO-02** Leadership strip — reemplazar AB/CD/EF y "Nombre del socio" con nombres reales de socios líderes por área.
- [ ] **TODO-03** Award card Nº 5 — reemplazar placeholder "Reconocimiento adicional pendiente de validación" con premio real.
