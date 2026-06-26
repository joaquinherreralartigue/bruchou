\# Claude Code Brief — Evolución Home Bruchou



\## Rol



Actuá como Senior Frontend Engineer + UI Implementation Lead especializado en webs institucionales premium B2B para firmas legales.



Tu tarea es implementar mejoras reales en la home existente de Bruchou. No hagas un rediseño desde cero. No propongas una nueva identidad visual. No hagas otro análisis conceptual.



\## Objetivo



Evolucionar la home actual de `/bruchou-new/` como una edición estratégica, quirúrgica y premium.



La home debe dejar de funcionar como una suma de señales institucionales y pasar a operar como una cadena de prueba de capacidad institucional, sectorial y operativa.



Orden narrativo obligatorio:



Hero → Método → Sectores estratégicos → Asuntos representativos → Áreas/liderazgo → Insights → AI Search → Reconocimientos → Footer



\## Criterio rector



Toda sección debe cumplir al menos una de estas funciones:



1\. Probar capacidad.

2\. Mejorar orientación.

3\. Aumentar confianza.



Si una sección no cumple ninguna, compactarla, moverla hacia abajo o eliminarla.



\## Antes de tocar archivos



Primero inspeccioná el repo y devolvé un plan breve con:



\* Stack detectado.

\* Ruta principal de la home.

\* Componentes existentes reutilizables.

\* Archivos que vas a modificar.

\* Componentes que vas a crear o ajustar.

\* Riesgos.

\* Supuestos.

\* Tareas del backlog que vas a resolver.



Esperá confirmación antes de modificar archivos.



\## Backlog obligatorio



\### BRU-HM-01 — Reordenar estructura de home



Reordenar la home con esta secuencia:



Hero → Método → Sectores → Asuntos representativos → Áreas/liderazgo → Insights → AI Search → Reconocimientos → Footer



Criterio de aceptación:

La primera mitad de la home debe leerse como una demostración progresiva de confianza, no como una colección de bloques institucionales.



\---



\### BRU-HM-02 — Ajustar Hero



Modificar el hero para que comunique decisiones empresarias complejas, regulación, negocio, capital y ejecución.



Debe tener:



\* Headline claro, sobrio y editorial.

\* Bajada breve.

\* Máximo 1 o 2 CTAs.

\* Sin rankings como apertura.

\* Sin claims genéricos.



Evitar titulares como:



\* “Leading law firm”

\* “Equipo de expertos”

\* “Soluciones integrales”

\* “Innovación legal”

\* “La firma más sofisticada”

\* “Excelencia, compromiso y trayectoria”



Copy base sugerido para orientar la implementación:



Bruchou asesora en decisiones empresarias de alta complejidad, donde regulación, negocio, capital y ejecución requieren criterio jurídico, especialización sectorial y coordinación institucional.



Bajada base:



Integramos conocimiento jurídico profundo, business judgment, equipos especializados y tecnología aplicada para acompañar operaciones, disputas y desafíos regulatorios que exigen precisión, escala y criterio de negocio.



Criterio de aceptación:

El hero debe explicar rápidamente qué tipo de complejidad resuelve Bruchou y no depender de autoelogio.



\---



\### BRU-HM-03 — Crear bloque compacto de método



Agregar o ajustar un bloque “Cómo trabajamos” inmediatamente después del hero.



No crear cinco cards literales.



El bloque debe absorber estos pilares como micropruebas:



\* Lectura técnica y sectorial.

\* Criterio orientado a decisión.

\* Equipos diseñados por desafío.

\* Tecnología aplicada al proceso profesional.

\* Ejecución consistente y gobernanza profesional.



Copy base sugerido:



Diseñamos equipos según la naturaleza de cada asunto, combinando especialización jurídica, conocimiento sectorial, criterio de negocio, gestión institucional y herramientas tecnológicas aplicadas al proceso profesional.



Criterio de aceptación:

El método debe funcionar como puente entre hero y sectores, no como manifiesto institucional de valores.



\---



\### BRU-HM-04 — Subir Sectores estratégicos



Los sectores deben aparecer temprano y tener más peso que rankings, AI Search o bloques institucionales genéricos.



Cada sector debe tener:



\* Título claro.

\* 2 o 3 líneas de contexto.

\* Tensión de negocio/regulación.

\* Conexión con capacidades, áreas o asuntos.

\* CTA discreto.



Fórmula de escritura:



Contexto + tensión + coordinación.



Ejemplos de sectores a estructurar:



\* Energía e infraestructura.

\* Mercado de capitales y financiamiento.

\* M\&A y transformación empresarial.

\* Regulación y asuntos públicos.

\* Litigios, arbitrajes o disputas complejas.

\* Tecnología, datos o economía digital, si existe contenido real.



No inventar datos reales. Si falta información, usar TODO explícito.



Criterio de aceptación:

Las cards de sectores deben orientar al cliente por contexto de negocio, no solo por taxonomía legal.



\---



\### BRU-HM-05 — Crear Asuntos representativos como evidencia central



Crear o ajustar el bloque de asuntos representativos como componente principal de prueba.



No usar “casos de éxito”.



Usar estructura:



\* 1 ficha principal amplia.

\* 2 fichas secundarias.

\* Diversidad sectorial.

\* Al menos un asunto no energético.

\* Metadata visible.



Cada asunto debe incluir:



\* Tipo de operación o desafío.

\* Sector.

\* Complejidad principal.

\* Capacidades involucradas.

\* Jurisdicción o alcance.

\* Resultado o dimensión si puede comunicarse.

\* Equipo/liderazgo si corresponde.

\* CTA: “Ver asunto representativo”.



Si faltan datos reales, usar mocks mínimos marcados como TODO. No inventar clientes, operaciones reales, socios ni resultados.



Criterio de aceptación:

Las matter cards deben parecer fichas institucionales de evidencia, no news cards ni cards comerciales.



\---



\### BRU-HM-06 — Integrar Áreas y liderazgo sin directorio pesado



Mostrar áreas y liderazgo conectados con sectores, asuntos o profesionales responsables.



No crear:



\* Carrusel pesado de socios.

\* Bloque gigante de retratos.

\* Directorio completo en home.



Puede resolverse con:



\* Listas breves.

\* Agrupaciones claras.

\* Microcards.

\* Links a profesionales o asuntos relacionados.

\* Información progresiva en hover/click accesible.



Criterio de aceptación:

El bloque debe dar profundidad técnica y accountability sin convertir la home en directorio.



\---



\### BRU-HM-07 — Ajustar Insights / novedades



Curar menos piezas y más relevantes.



Los insights deben conectarse con sectores, áreas o temas estratégicos.



Criterio de aceptación:

El bloque debe mostrar criterio actual de la firma, no solo actividad editorial.



\---



\### BRU-HM-08 — Reubicar AI Search como utility



AI Search debe ser visible, pero no protagonista.



No ubicarlo inmediatamente debajo del hero si desplaza método, sectores o asuntos.



Debe sentirse como acceso al conocimiento, no como feature SaaS ni gesto de innovación.



Microcopy sugerido:



Título:

Buscar criterio, sectores y capacidades



Bajada:

Accedé rápidamente a áreas, profesionales, insights y experiencia relevante de la firma.



Placeholder:

Buscar por sector, práctica, asunto o profesional



CTA:

Buscar en Bruchou



Criterio de aceptación:

AI Search debe ser útil, sobrio y secundario respecto de la prueba jurídica.



\---



\### BRU-HM-09 — Compactar reconocimientos



Rankings y reconocimientos deben bajar en jerarquía.



Resolverlos como franja secundaria, compacta y sobria.



No abrir la home con rankings.



Criterio de aceptación:

Los reconocimientos deben validar autoridad, no reemplazar la evidencia principal.



\---



\### BRU-HM-10 — Ajustar CTAs



Reemplazar CTAs vagos por acciones específicas.



Usar cuando corresponda:



\* Explorar sectores.

\* Ver asuntos representativos.

\* Conocer cómo trabajamos.

\* Ver áreas y liderazgo.

\* Buscar insights.

\* Conocer profesionales.

\* Ver experiencia relacionada.

\* Contactar al equipo.



Evitar:



\* Ver más.

\* Conocé más.

\* Descubrí más.



Criterio de aceptación:

Cada CTA debe anticipar con precisión qué pasa después.



\---



\### BRU-HM-11 — Ajustar UI sin nueva identidad visual



Elevar la interfaz existente con:



\* Mejor jerarquía.

\* Mejor ritmo editorial.

\* Mejor grilla.

\* Mejor espaciado.

\* Mejor contraste.

\* Mejor escala tipográfica.

\* Cards diferenciadas por función.

\* Estados hover/focus accesibles.

\* Responsive real.



No agregar:



\* Motion ornamental.

\* Fotos nuevas.

\* Retratos protagonistas.

\* Hero excesivamente expresivo.

\* Iconografía legal abstracta.

\* Ilustraciones genéricas.

\* Estética tech exagerada.

\* Nueva dirección visual.



Criterio de aceptación:

La home debe sentirse más precisa, premium y editorial sin parecer otra marca.



\---



\### BRU-HM-12 — Diferenciar tipos de cards



No usar una misma card genérica para todo.



Diferenciar:



\* Sector card: contexto y entrada.

\* Matter card: evidencia.

\* Insight card: criterio.

\* Profile microcard: accountability.

\* Recognition strip: validación.



Criterio de aceptación:

Cada card debe tener función, jerarquía y contenido específico.



\---



\### BRU-HM-13 — Responsive y accesibilidad



Asegurar desktop, tablet y mobile.



Reglas:



\* Desktop con grilla clara.

\* Mobile prioriza lectura y orden.

\* No depender solo de hover.

\* Focus visible.

\* Contraste suficiente.

\* Links y botones accesibles.

\* Metadata/chips legibles.

\* HTML semántico.



Criterio de aceptación:

La home debe ser usable con teclado, responsive y legible en todos los tamaños principales.



\---



\### BRU-HM-14 — QA editorial



Revisar:



\* Tono.

\* Labels.

\* Mayúsculas.

\* Acentos.

\* Encoding.

\* CTAs.

\* Duplicados.

\* Consistencia ES/EN.

\* Nombres.

\* Textos genéricos.

\* Placeholders.



Criterio de aceptación:

No deben quedar errores editoriales que dañen percepción premium.



\---



\### BRU-HM-15 — Footer



Ordenar footer con:



\* Accesos principales.

\* Contacto.

\* Idioma.

\* Legal.

\* Redes.

\* Navegación secundaria.



Criterio de aceptación:

El footer debe cerrar la experiencia con utilidad y consistencia institucional.



\---



\### BRU-HM-16 — Handoff final



Al terminar, entregar resumen con:



\* Archivos modificados.

\* Componentes creados.

\* Componentes modificados.

\* Tareas resueltas por ID.

\* Tareas no resueltas y motivo.

\* TODOs por falta de información real de Bruchou.

\* Riesgos técnicos.

\* Comandos ejecutados.

\* Resultado de lint/build/test.



Criterio de aceptación:

El trabajo debe poder revisarse, testearse y continuar sin depender de memoria de la conversación.



\## Restricciones técnicas



\* Reutilizar componentes existentes antes de crear nuevos.

\* Mantener tokens, estilos y sistema actual.

\* Evitar duplicación.

\* Separar componentes si un archivo queda grande.

\* Usar data arrays/objetos para sectores, asuntos, insights y CTAs si mejora mantenibilidad.

\* No introducir dependencias nuevas salvo necesidad justificada.

\* No romper rutas existentes.

\* No tocar archivos fuera del alcance sin explicar por qué.

\* No hacer commits sin confirmación.



\## Comandos esperados



Después de implementar, correr los comandos disponibles del proyecto, por ejemplo:



\* npm run lint

\* npm run build

\* npm test



Si los comandos no existen o fallan por configuración previa del proyecto, explicarlo claramente.



\## Criterio final de aceptación



La implementación es correcta si:



\* Mantiene la base actual de `/bruchou-new/`.

\* No rediseña desde cero.

\* La primera mitad queda ordenada como Hero → Método → Sectores → Asuntos → Áreas/liderazgo.

\* Sectores y asuntos tienen más peso que rankings, claims e IA.

\* AI Search queda visible pero no protagonista.

\* Reconocimientos quedan compactos y secundarios.

\* El hero comunica complejidad empresaria, regulación, negocio, capital y ejecución.

\* El método no aparece como cinco cards literales.

\* Los asuntos representativos incluyen metadata y funcionan como prueba.

\* Los CTAs son específicos.

\* No hay claims genéricos como titulares.

\* No hay placeholders genéricos en contenido crítico salvo TODO explícito.

\* Responsive, hover/focus, contraste y legibilidad están resueltos.

\* El código compila y respeta la arquitectura del proyecto.



\## Tarea para Claude Code



Inspeccioná el repo, proponé un plan breve y esperá confirmación antes de modificar archivos. Luego implementá la evolución de la home resolviendo el backlog en orden de dependencia.



No abras exploración visual nueva. No diseñes una marca nueva. Ejecutá una mejora quirúrgica, estratégica y desarrollable.



