<Rol>
Actuá como Senior UI Developer, Frontend Engineer y UI QA Implementer especializado en sitios institucionales B2B premium para firmas legales.

Tu responsabilidad no es rediseñar desde cero, inventar una nueva identidad visual ni hacer exploración estética. Tu responsabilidad es convertir el backlog operativo y los criterios del documento final de Bruchou en cambios reales de implementación, QA verificable y entregables auditables.

Trabajá con criterio de desarrollador UI senior: estructura clara, componentes mantenibles, HTML semántico, responsive real, accesibilidad básica, consistencia visual, respeto por el sistema existente y foco en evidencia. </Rol>

<Contexto>
Estamos trabajando en la evolución de la home de Bruchou.

El documento final define que la home no debe “verse más moderna” de forma genérica, sino convertir el prestigio de Bruchou en una prueba ordenada de capacidad institucional, sectorial y operativa.

La dirección estratégica obligatoria es:

Complejidad del cliente → Método de trabajo → Sectores estratégicos → Asuntos representativos → Capacidades y liderazgo → Insights → AI Search → Reconocimientos → Footer

La entrega anterior quedó con un problema central de governance: no era suficientemente verificable. Por eso, esta implementación debe resolver tanto la UI como la verificabilidad del artefacto.

Tu trabajo debe dejar una home navegable, auditable y lista para QA. </Contexto>

<Objetivo>
Implementar una evolución quirúrgica de la home existente, respetando la base visual actual, sin rediseño total y resolviendo el backlog completo.

La entrega debe permitir verificar:

1. Que la home respeta la secuencia estratégica.
2. Que el contenido evita claims genéricos.
3. Que sectores y asuntos representativos funcionan como evidencia.
4. Que AI Search queda como utility, no como protagonista.
5. Que reconocimientos quedan como validación secundaria.
6. Que la UI refuerza jerarquía, lectura, sobriedad y confianza.
7. Que desktop, tablet y mobile son auditables.
8. Que el resultado puede aprobarse o corregirse con evidencia concreta.

   </Objetivo>

<Fuentes de verdad>
Usá como fuente principal:

1. Documento final de estrategia, UX, contenido y UI de Bruchou.
2. Backlog operativo derivado del QA.
3. Código actual del repo.
4. Sistema visual y componentes existentes.

No reemplaces estas fuentes por preferencias personales.
</Fuentes de verdad>

<Principios obligatorios>
- No rediseñar desde cero.
- No crear una identidad visual nueva.
- No agregar motion ornamental.
- No agregar fotos nuevas.
- No sumar retratos protagonistas.
- No crear un hero excesivamente expresivo.
- No convertir AI Search en protagonista.
- No crear mega-menú complejo.
- No usar “casos de éxito”.
- No usar claims genéricos como titulares.
- No inventar datos reales de Bruchou.
- No inventar clientes, asuntos, montos, socios, rankings ni resultados.
- No introducir dependencias nuevas salvo necesidad justificada.
- No romper rutas existentes.
- No hacer commits sin confirmación.
</Principios obligatorios>

<Criterio rector>
Toda sección de la home debe cumplir al menos una de estas tres funciones:

1. Probar capacidad.
2. Mejorar orientación.
3. Aumentar confianza.

Si una sección no cumple ninguna de esas funciones, debe compactarse, moverse hacia abajo o eliminarse.
</Criterio rector>

<Proceso obligatorio>

1. Inspeccioná el repo antes de tocar archivos:

   * Detectá stack.
   * Detectá rutas.
   * Detectá archivo principal de la home.
   * Detectá componentes existentes.
   * Detectá estilos globales, tokens, CSS modules, Tailwind o sistema usado.
   * Detectá scripts disponibles: dev, build, lint, test.
   * Detectá si existe una ruta específica para /bruchou o /bruchou-new.

2. Devolvé un plan breve antes de modificar:

   * Archivos a tocar.
   * Componentes a crear.
   * Componentes a modificar.
   * Datos mock que vas a necesitar.
   * Riesgos.
   * Supuestos.
   * Orden de implementación.

3. Esperá confirmación antes de editar si el entorno lo permite.

4. Implementá en fases:

   * Fase 1: verificabilidad del artefacto.
   * Fase 2: estructura estratégica de la home.
   * Fase 3: contenido y labels.
   * Fase 4: componentes UI.
   * Fase 5: responsive y accesibilidad.
   * Fase 6: QA técnico y documentación.

5. Al finalizar:

   * Corré build/lint/test si existen.
   * Corregí errores.
   * Documentá cambios.
   * Listá tareas resueltas por ID.
   * Listá TODOs pendientes por falta de validación de Bruchou/legal.
     </Proceso obligatorio>

<Backlog minucioso>

<Épica 1: Verificabilidad del artefacto>

BRU-DEV-01 — Detectar ruta real de la home
Prioridad: Crítica.
Descripción:
Identificar cuál es la ruta, archivo o componente que renderiza la home publicada o la versión nueva de Bruchou.
Objetivo:
Evitar trabajar sobre un archivo equivocado.
Entregable:
Resumen de ruta principal, componentes involucrados y dependencias.
Criterio de aceptación:
Se sabe exactamente qué archivo controla la home y qué componentes la componen.
Riesgo si no se hace:
Se implementan cambios en una ruta que no se publica o no se revisa.

BRU-DEV-02 — Confirmar que el proyecto corre localmente
Prioridad: Crítica.
Descripción:
Instalar dependencias si hace falta y probar el proyecto en local.
Objetivo:
Tener una build navegable y auditable.
Entregable:
Proyecto corriendo localmente o explicación clara del bloqueo.
Criterio de aceptación:
El sitio puede ejecutarse con el script disponible o queda documentado por qué no.
Riesgo si no se hace:
No se puede validar visualmente ni hacer QA real.

BRU-DEV-03 — Crear evidencia de QA del estado final
Prioridad: Crítica.
Descripción:
Preparar una forma de verificar la entrega: build, staging, capturas o instrucciones claras para revisar.
Objetivo:
Resolver el problema detectado en QA: la entrega no era verificable.
Entregable:
README corto o sección en el resumen final con:

* URL local o comando para correr.
* Ruta de la home.
* Breakpoints revisados.
* Comandos ejecutados.
  Criterio de aceptación:
  Otra persona puede abrir y revisar la home sin depender de memoria de la conversación.
  Riesgo si no se hace:
  La entrega vuelve a quedar bloqueada por falta de evidencia.

BRU-DEV-04 — Documentar scripts disponibles
Prioridad: Alta.
Descripción:
Identificar y usar los comandos reales del proyecto.
Objetivo:
Evitar inventar comandos o asumir stack.
Entregable:
Listado de scripts disponibles.
Criterio de aceptación:
Se informa si existen npm run dev, npm run build, npm run lint, npm test o equivalentes.
Riesgo si no se hace:
QA técnico incompleto.

</Épica 1>

<Épica 2: Estructura estratégica de la home>

BRU-HOME-01 — Reordenar la home según secuencia obligatoria
Prioridad: Crítica.
Descripción:
La home debe seguir este orden:

1. Header / navegación.
2. Hero.
3. Método / cómo trabajamos.
4. Sectores estratégicos.
5. Asuntos representativos.
6. Áreas y liderazgo.
7. Insights / novedades.
8. AI Search.
9. Reconocimientos.
10. Footer.

Objetivo:
Convertir la home en una cadena de prueba, no en una suma de módulos.
Entregable:
Estructura renderizada con ese orden o justificación documentada si algún módulo no existe.
Criterio de aceptación:
La primera mitad queda claramente como:
Hero → Método → Sectores → Asuntos representativos → Áreas/liderazgo.
Riesgo si no se hace:
La página no cumple la tesis estratégica del documento.

BRU-HOME-02 — Compactar módulos débiles
Prioridad: Alta.
Descripción:
Revisar bloques existentes y reducir, mover o eliminar los que no prueben capacidad, no orienten al usuario o no aumenten confianza.
Objetivo:
Evitar ruido institucional o módulos decorativos.
Entregable:
Home más enfocada, con secciones necesarias.
Criterio de aceptación:
Cada bloque tiene un rol claro dentro del recorrido.
Riesgo si no se hace:
La home vuelve a sentirse genérica o pesada.

BRU-HOME-03 — Evitar que rankings o AI Search dominen la narrativa
Prioridad: Crítica.
Descripción:
Asegurar que rankings/reconocimientos y AI Search no aparezcan antes de tesis, método, sectores y asuntos.
Objetivo:
Evitar que la autoridad dependa de premios o de una feature tecnológica.
Entregable:
AI Search y reconocimientos ubicados como módulos secundarios.
Criterio de aceptación:
Sectores y asuntos tienen más peso narrativo que rankings e IA.
Riesgo si no se hace:
Contradicción directa con el documento final.

</Épica 2>

<Épica 3: Header y navegación>

BRU-NAV-01 — Revisar navegación principal
Prioridad: Alta.
Descripción:
Mantener una navegación clara, sobria y funcional. No crear mega-menú pesado.
Objetivo:
Orientar sin sobrecargar.
Entregable:
Header con links claros a secciones o páginas principales.
Criterio de aceptación:
La navegación permite entender acceso a expertise, sectores, equipo, novedades, contacto, búsqueda e idioma si aplica.
Riesgo si no se hace:
La home pierde orientación y accesibilidad.

BRU-NAV-02 — Evitar navegación dependiente solo de hover
Prioridad: Media.
Descripción:
Asegurar que interacciones del header funcionen con teclado y mobile.
Objetivo:
Mejorar accesibilidad y responsive.
Entregable:
Estados focus visibles y comportamiento usable en mobile.
Criterio de aceptación:
Los menús o links no dependen únicamente del hover.
Riesgo si no se hace:
Problemas de accesibilidad y uso real.

</Épica 3>

<Épica 4: Hero>

BRU-HERO-01 — Implementar hero con tesis institucional clara
Prioridad: Crítica.
Descripción:
El hero debe explicar qué tipo de complejidad resuelve Bruchou. Debe hablar de decisiones empresarias complejas, regulación, negocio, capital y ejecución.
Objetivo:
Que el usuario entienda rápidamente el posicionamiento de la firma.
Entregable:
Hero con headline, bajada y 1–2 CTAs.
Criterio de aceptación:
El hero no depende de autoelogios ni claims vacíos.
Riesgo si no se hace:
La primera impresión queda genérica.

Copy base permitido:
“Bruchou asesora decisiones empresarias de alta complejidad, donde regulación, negocio, capital y ejecución requieren criterio jurídico, especialización sectorial y coordinación institucional.”

Bajada base permitida:
“Integramos conocimiento jurídico profundo, criterio de negocio, equipos especializados y tecnología aplicada para acompañar operaciones, disputas y desafíos regulatorios que exigen precisión, escala y ejecución.”

BRU-HERO-02 — Limitar CTAs del hero
Prioridad: Alta.
Descripción:
Usar máximo 1 o 2 CTAs.
Objetivo:
Evitar dispersión de decisión.
Entregable:
CTAs específicos y sobrios.
Criterio de aceptación:
Los CTAs orientan a acciones concretas como “Explorar sectores” o “Ver asuntos representativos”.
Riesgo si no se hace:
El hero pierde foco.

BRU-HERO-03 — Evitar claims genéricos
Prioridad: Crítica.
Descripción:
No usar como titulares:

* Leading law firm.
* Equipo de expertos.
* Soluciones integrales.
* Innovación legal.
* A la vanguardia.
* Excelencia, compromiso y trayectoria.
* La firma más sofisticada.
  Objetivo:
  Mantener precisión institucional.
  Entregable:
  Hero sin frases vacías o intercambiables.
  Criterio de aceptación:
  El copy se basa en capacidad, complejidad y criterio, no en autoelogio.
  Riesgo si no se hace:
  La home parece una web jurídica genérica.

</Épica 4>

<Épica 5: Método / cómo trabajamos>

BRU-METHOD-01 — Crear bloque compacto de método
Prioridad: Crítica.
Descripción:
Agregar o ajustar un bloque “Cómo trabajamos” inmediatamente después del hero.
Objetivo:
Explicar cómo Bruchou aborda asuntos complejos sin crear una sección institucional pesada.
Entregable:
Módulo compacto de método.
Criterio de aceptación:
El bloque funciona como puente entre hero y sectores.
Riesgo si no se hace:
La home pasa de promesa a sectores sin explicar modelo de trabajo.

BRU-METHOD-02 — Evitar cinco cards literales
Prioridad: Alta.
Descripción:
No representar los cinco pilares como cinco cards obvias o decorativas.
Objetivo:
Evitar un bloque de valores genérico.
Entregable:
Tratamiento editorial compacto.
Criterio de aceptación:
Los pilares aparecen absorbidos en el copy o en micropruebas.
Riesgo si no se hace:
La sección se vuelve manifiesto institucional.

BRU-METHOD-03 — Incluir pilares como micropruebas
Prioridad: Alta.
Descripción:
El método debe incorporar:

* Lectura técnica y sectorial.
* Criterio orientado a decisión.
* Equipos diseñados por desafío.
* Tecnología aplicada al proceso profesional.
* Ejecución consistente y gobernanza profesional.
  Objetivo:
  Mostrar seniority, coordinación y ejecución.
  Entregable:
  Copy del bloque método.
  Criterio de aceptación:
  El texto explica cómo se arma la respuesta profesional.
  Riesgo si no se hace:
  El método queda superficial.

Copy base permitido:
“Diseñamos equipos según la naturaleza de cada asunto, combinando especialización jurídica, conocimiento sectorial, criterio de negocio, gestión institucional y herramientas tecnológicas aplicadas al proceso profesional.”

</Épica 5>

<Épica 6: Sectores estratégicos>

BRU-SECT-01 — Subir sectores en jerarquía
Prioridad: Crítica.
Descripción:
Los sectores deben aparecer temprano, antes de reconocimientos y AI Search.
Objetivo:
Entrar por contexto de negocio, no solo por área legal.
Entregable:
Bloque de sectores ubicado después del método.
Criterio de aceptación:
Sectores tienen un rol estratégico en la primera mitad de la home.
Riesgo si no se hace:
La home no demuestra conocimiento sectorial.

BRU-SECT-02 — Redactar sectores con fórmula obligatoria
Prioridad: Alta.
Descripción:
Cada sector debe seguir:
Contexto + tensión + coordinación.
Objetivo:
Evitar cards genéricas.
Entregable:
Copy por sector con 2–3 líneas.
Criterio de aceptación:
Cada sector explica una tensión real de negocio/regulación y cómo Bruchou coordina capacidades.
Riesgo si no se hace:
Los sectores quedan como una taxonomía legal vacía.

BRU-SECT-03 — Crear sector cards austeras y editoriales
Prioridad: Alta.
Descripción:
Cada card debe incluir:

* Título.
* 2–3 líneas de contexto.
* Chips o links a capacidades.
* CTA discreto.
  Objetivo:
  Facilitar escaneo sin convertir las cards en piezas decorativas.
  Entregable:
  Componente o markup de sector card.
  Criterio de aceptación:
  La card orienta y conecta con expertise.
  Riesgo si no se hace:
  La sección se vuelve visualmente linda pero poco útil.

BRU-SECT-04 — No usar iconografía legal abstracta
Prioridad: Media.
Descripción:
Evitar balanzas, edificios, íconos abstractos o ilustraciones sin aporte.
Objetivo:
Mantener sobriedad premium.
Entregable:
Cards basadas en tipografía, grilla, metadata y contenido.
Criterio de aceptación:
La sección no depende de decoración.
Riesgo si no se hace:
La UI se vuelve genérica.

Sectores sugeridos si el contenido existe:

* Energía e infraestructura.
* Mercado de capitales y financiamiento.
* M&A y transformación empresarial.
* Regulación y asuntos públicos.
* Litigios, arbitrajes y disputas complejas.
* Tecnología, datos o economía digital.

Si falta información real, usar TODO explícito sin inventar datos.

</Épica 6>

<Épica 7: Asuntos representativos>

BRU-MATTER-01 — Renombrar correctamente la sección
Prioridad: Crítica.
Descripción:
Usar “Asuntos representativos” o “Experiencia representativa”.
No usar “Casos de éxito”.
Objetivo:
Evitar lenguaje comercial o genérico.
Entregable:
Label de sección corregido.
Criterio de aceptación:
No aparece “casos de éxito” en sección, CTA ni navegación.
Riesgo si no se hace:
Contradicción directa con el documento final.

BRU-MATTER-02 — Implementar estructura 1 + 2
Prioridad: Crítica.
Descripción:
El bloque debe tener:

* 1 ficha principal destacada.
* 2 fichas secundarias.
  Objetivo:
  Crear un bloque de evidencia fuerte y escaneable.
  Entregable:
  Layout de asuntos representativos.
  Criterio de aceptación:
  Existe una jerarquía clara entre asunto destacado y asuntos secundarios.
  Riesgo si no se hace:
  La evidencia central queda débil o incompleta.

BRU-MATTER-03 — Asegurar diversidad sectorial
Prioridad: Crítica.
Descripción:
Debe haber diversidad sectorial y al menos un asunto no energético.
Objetivo:
Probar amplitud institucional.
Entregable:
Tres asuntos con sectores distintos o TODO explícito si falta data real.
Criterio de aceptación:
No todos los asuntos pertenecen a energía/financiamiento.
Riesgo si no se hace:
Bruchou queda percibida como fuerte solo en un vertical.

BRU-MATTER-04 — Incluir metadata visible por asunto
Prioridad: Alta.
Descripción:
Cada matter card debe incluir, cuando exista data real:

* Tipo de operación o desafío.
* Sector.
* Complejidad principal.
* Capacidades involucradas.
* Jurisdicción o alcance.
* Resultado o dimensión si puede comunicarse.
* Equipo/liderazgo si corresponde.
* CTA específico.
  Objetivo:
  Convertir los asuntos en prueba concreta.
  Entregable:
  Cards con metadata visible.
  Criterio de aceptación:
  Cada asunto permite entender por qué prueba capacidad.
  Riesgo si no se hace:
  Las cards quedan como noticias o piezas promocionales.

BRU-MATTER-05 — Usar TODOs cuando falte información real
Prioridad: Alta.
Descripción:
No inventar clientes, operaciones, montos, socios ni resultados.
Objetivo:
Evitar riesgo legal/reputacional.
Entregable:
Datos faltantes marcados como TODO.
Criterio de aceptación:
Todo dato no validado queda identificado como pendiente.
Riesgo si no se hace:
Se publica información falsa o sensible.

BRU-MATTER-06 — Diferenciar visualmente matter cards de news cards
Prioridad: Alta.
Descripción:
Las matter cards deben verse como fichas institucionales de evidencia, no como noticias.
Objetivo:
Reforzar jerarquía y propósito.
Entregable:
Componente o variante visual diferenciada.
Criterio de aceptación:
Matter card usa metadata, chips y estructura propia.
Riesgo si no se hace:
La evidencia pierde peso.

CTA recomendado:
“Ver asunto representativo”
o
“Explorar experiencia relacionada”

</Épica 7>

<Épica 8: Áreas y liderazgo>

BRU-AREAS-01 — Integrar áreas sin crear directorio pesado
Prioridad: Alta.
Descripción:
Mostrar áreas de práctica con profundidad, pero sin convertir la home en un directorio.
Objetivo:
Dar orientación técnica sin sobrecargar.
Entregable:
Bloque de áreas organizado y compacto.
Criterio de aceptación:
Se pueden explorar capacidades sin una grilla infinita.
Riesgo si no se hace:
La home pierde foco.

BRU-AREAS-02 — Conectar áreas con sectores y asuntos
Prioridad: Media.
Descripción:
Cuando sea posible, mostrar vínculos entre áreas, sectores y asuntos representativos.
Objetivo:
Hacer visible la coordinación institucional.
Entregable:
Links, chips o microcopy de relación.
Criterio de aceptación:
El usuario entiende cómo se conectan capacidades con evidencia.
Riesgo si no se hace:
Las áreas quedan aisladas.

BRU-AREAS-03 — Incluir liderazgo sin retratos protagonistas
Prioridad: Media.
Descripción:
Si existe data validada, agregar microreferencias de liderazgo/equipo sin carrusel pesado.
Objetivo:
Mostrar accountability sin convertir la home en directorio.
Entregable:
Microcards, links o líneas de “equipo/liderazgo”.
Criterio de aceptación:
Hay señal de responsabilidad profesional sin sobrepeso visual.
Riesgo si no se hace:
Falta conexión humana y seniority.

</Épica 8>

<Épica 9: Insights / novedades>

BRU-INSIGHTS-01 — Curar insights con relación estratégica
Prioridad: Media.
Descripción:
Mostrar menos piezas y más relevantes.
Objetivo:
Presentar criterio actual, no solo actividad editorial.
Entregable:
Bloque de insights con piezas conectadas a sectores o áreas.
Criterio de aceptación:
Cada insight tiene una relación clara con expertise.
Riesgo si no se hace:
La sección parece un feed genérico de novedades.

BRU-INSIGHTS-02 — Diferenciar insight cards de matter cards
Prioridad: Media.
Descripción:
Las cards de insights no deben competir visualmente con asuntos representativos.
Objetivo:
Mantener jerarquía de evidencia.
Entregable:
Tratamiento visual diferenciado.
Criterio de aceptación:
Asuntos prueban capacidad; insights muestran criterio actual.
Riesgo si no se hace:
La jerarquía probatoria se diluye.

</Épica 9>

<Épica 10: AI Search>

BRU-AI-01 — Ubicar AI Search como utility secundaria
Prioridad: Alta.
Descripción:
AI Search debe ser visible, pero no protagonista.
No ubicarlo antes del núcleo Hero → Método → Sectores → Asuntos.
Objetivo:
Presentarlo como herramienta de acceso al conocimiento.
Entregable:
Módulo AI Search ubicado después de los bloques principales.
Criterio de aceptación:
AI Search no compite con sectores ni asuntos.
Riesgo si no se hace:
La home parece vender innovación tecnológica antes que criterio jurídico.

BRU-AI-02 — Ajustar microcopy de AI Search
Prioridad: Media.
Descripción:
Usar lenguaje funcional, no tech-marketing.
Objetivo:
Evitar que la IA parezca gimmick.
Entregable:
Título, bajada, placeholder y CTA.
Criterio de aceptación:
El módulo se entiende como búsqueda asistida institucional.

Copy recomendado:
Título:
“Buscar criterio, sectores y capacidades”

Bajada:
“Accedé rápidamente a áreas, profesionales, insights y experiencia relevante de la firma.”

Placeholder:
“Buscar por sector, práctica, asunto o profesional”

CTA:
“Buscar en Bruchou”

BRU-AI-03 — Evitar estética SaaS o futurista
Prioridad: Media.
Descripción:
No usar tratamiento visual excesivamente tecnológico.
Objetivo:
Mantener tono institucional.
Entregable:
AI Search integrado visualmente al sistema existente.
Criterio de aceptación:
El módulo es sobrio, útil y consistente con la marca.
Riesgo si no se hace:
Rompe la percepción premium legal.

</Épica 10>

<Épica 11: Reconocimientos>

BRU-REC-01 — Compactar reconocimientos
Prioridad: Alta.
Descripción:
Los rankings y reconocimientos deben funcionar como validación secundaria.
Objetivo:
No depender de premios como argumento principal.
Entregable:
Franja compacta y sobria.
Criterio de aceptación:
Reconocimientos aparecen después del núcleo de prueba.
Riesgo si no se hace:
La autoridad queda apoyada en rankings en vez de evidencia propia.

BRU-REC-02 — Evitar duplicados y exceso de logos
Prioridad: Media.
Descripción:
Reducir ruido visual y repetición.
Objetivo:
Sostener sobriedad.
Entregable:
Lista o franja depurada.
Criterio de aceptación:
No hay duplicados evidentes ni sobrepeso visual.
Riesgo si no se hace:
La sección se siente promocional.

BRU-REC-03 — Copy sobrio de validación
Prioridad: Media.
Descripción:
El copy debe acompañar la autoridad sin exagerar.
Objetivo:
Reforzar confianza sin autoelogio.
Entregable:
Texto breve de reconocimientos.
Criterio de aceptación:
El bloque valida, no reemplaza la prueba principal.
Riesgo si no se hace:
La narrativa vuelve a depender de credenciales externas.

</Épica 11>

<Épica 12: CTAs y labels>

BRU-CTA-01 — Auditar todos los CTAs
Prioridad: Alta.
Descripción:
Revisar todos los CTAs visibles.
Objetivo:
Eliminar acciones vagas.
Entregable:
CTAs específicos por sección.
Criterio de aceptación:
No se usa “Ver más”, “Conocé más” o “Descubrí más” cuando puede haber una acción concreta.
Riesgo si no se hace:
La experiencia pierde precisión.

CTAs permitidos:

* Explorar sectores.
* Ver asuntos representativos.
* Conocer cómo trabajamos.
* Ver áreas y liderazgo.
* Buscar insights.
* Conocer profesionales.
* Ver experiencia relacionada.
* Contactar al equipo.
* Buscar en Bruchou.

BRU-CTA-02 — Homogeneizar labels
Prioridad: Media.
Descripción:
Revisar nombres de secciones, capitalización, tono y consistencia.
Objetivo:
Evitar sensación de módulos pegados.
Entregable:
Labels consistentes.
Criterio de aceptación:
La home se lee como una experiencia única.
Riesgo si no se hace:
Baja calidad editorial percibida.

</Épica 12>

<Épica 13: UI visual y sistema>

BRU-UI-01 — Mantener base visual actual
Prioridad: Crítica.
Descripción:
No abrir una nueva dirección visual.
Objetivo:
Evolucionar sin rebranding.
Entregable:
UI ajustada sobre estilos existentes.
Criterio de aceptación:
La home se siente más precisa y premium, pero no como otra marca.
Riesgo si no se hace:
Se rompe la continuidad del proyecto.

BRU-UI-02 — Reforzar jerarquía visual
Prioridad: Alta.
Descripción:
Ajustar escala, espacios, pesos y orden visual para que acompañen la prioridad estratégica.
Objetivo:
Que hero, método, sectores y asuntos tengan el peso correcto.
Entregable:
Jerarquía visual más clara.
Criterio de aceptación:
El usuario puede escanear tesis, método y evidencia sin esfuerzo.
Riesgo si no se hace:
El contenido bueno no se percibe.

BRU-UI-03 — Diferenciar tipos de cards
Prioridad: Alta.
Descripción:
No usar una card genérica para todo.
Diferenciar:

* Sector card: contexto y entrada.
* Matter card: evidencia.
* Insight card: criterio actual.
* Profile microcard: accountability.
* Recognition strip: validación.
  Objetivo:
  Que cada componente comunique su función.
  Entregable:
  Variantes o clases diferenciadas.
  Criterio de aceptación:
  Cada card se reconoce por función, no solo por estética.
  Riesgo si no se hace:
  La home parece una grilla de módulos indiferenciados.

BRU-UI-04 — Ajustar grilla y ritmo editorial
Prioridad: Media.
Descripción:
Revisar alineaciones, anchos, espaciado vertical y densidad.
Objetivo:
Construir autoridad por orden, no por ornamentación.
Entregable:
Layout consistente.
Criterio de aceptación:
El ritmo alterna tesis, método, evidencia, profundidad y validación.
Riesgo si no se hace:
La home se siente pesada o fragmentada.

BRU-UI-05 — Revisar contraste y legibilidad
Prioridad: Alta.
Descripción:
Garantizar lectura clara de titulares, bajadas, metadata, chips y CTAs.
Objetivo:
Sostener calidad institucional y accesibilidad.
Entregable:
Contraste y legibilidad ajustados.
Criterio de aceptación:
No hay textos críticos con bajo contraste o tamaño insuficiente.
Riesgo si no se hace:
La interfaz pierde confianza y usabilidad.

BRU-UI-06 — Evitar decoración sin función
Prioridad: Media.
Descripción:
Quitar o reducir recursos visuales que no aporten claridad, evidencia ni confianza.
Objetivo:
Mantener sobriedad premium.
Entregable:
UI depurada.
Criterio de aceptación:
No hay elementos ornamentales compitiendo con el contenido.
Riesgo si no se hace:
La home se vuelve “moderna” pero menos institucional.

</Épica 13>

<Épica 14: Responsive y accesibilidad>

BRU-RESP-01 — QA responsive desktop, tablet y mobile
Prioridad: Crítica.
Descripción:
Revisar la home en al menos tres breakpoints.
Objetivo:
Asegurar que la experiencia sea usable y legible.
Entregable:
Ajustes responsive implementados.
Criterio de aceptación:
El orden narrativo se mantiene en mobile y tablet.
Riesgo si no se hace:
La entrega falla en uso real.

BRU-RESP-02 — Priorizar lectura en mobile
Prioridad: Alta.
Descripción:
Mobile no debe copiar la densidad desktop.
Objetivo:
Mantener claridad.
Entregable:
Secciones apiladas, CTAs legibles, metadata clara.
Criterio de aceptación:
El usuario puede entender hero, método, sectores y asuntos sin esfuerzo.
Riesgo si no se hace:
El contenido premium se vuelve ilegible.

BRU-A11Y-01 — Estados hover/focus visibles
Prioridad: Alta.
Descripción:
Links, botones y cards interactivas deben tener hover/focus accesibles.
Objetivo:
Mejorar navegación por teclado y claridad.
Entregable:
Estados interactivos visibles y sobrios.
Criterio de aceptación:
No hay interacción importante que dependa solo del hover.
Riesgo si no se hace:
Problemas de accesibilidad.

BRU-A11Y-02 — HTML semántico
Prioridad: Media.
Descripción:
Usar landmarks, headings ordenados, botones y links correctos.
Objetivo:
Mejorar accesibilidad y mantenibilidad.
Entregable:
Markup semántico.
Criterio de aceptación:
La estructura de headings y secciones tiene sentido.
Riesgo si no se hace:
La home queda débil para accesibilidad y SEO básico.

</Épica 14>

<Épica 15: Footer>

BRU-FOOTER-01 — Ordenar footer
Prioridad: Media.
Descripción:
El footer debe cerrar la experiencia con utilidad institucional.
Objetivo:
Dar accesos claros al final del recorrido.
Entregable:
Footer con accesos principales, contacto, idioma, legal, redes y navegación secundaria.
Criterio de aceptación:
El footer es útil, sobrio y consistente.
Riesgo si no se hace:
Cierre débil de experiencia.

</Épica 15>

<Épica 16: QA técnico y handoff>

BRU-QA-01 — Ejecutar build
Prioridad: Crítica.
Descripción:
Correr el comando de build disponible.
Objetivo:
Validar que la implementación compila.
Entregable:
Resultado de build.
Criterio de aceptación:
Build pasa o errores quedan documentados con causa.
Riesgo si no se hace:
Entrega técnicamente no confiable.

BRU-QA-02 — Ejecutar lint si existe
Prioridad: Alta.
Descripción:
Correr lint si el proyecto lo tiene configurado.
Objetivo:
Detectar errores de calidad.
Entregable:
Resultado de lint.
Criterio de aceptación:
Lint pasa o issues quedan documentados.
Riesgo si no se hace:
Código inconsistente o errores ocultos.

BRU-QA-03 — Documentar archivos modificados
Prioridad: Alta.
Descripción:
Entregar resumen de archivos tocados.
Objetivo:
Facilitar revisión.
Entregable:
Lista de archivos modificados y propósito.
Criterio de aceptación:
Cada archivo tiene explicación breve.
Riesgo si no se hace:
Dificulta QA y review.

BRU-QA-04 — Documentar tareas resueltas por ID
Prioridad: Alta.
Descripción:
Mapear cambios contra el backlog.
Objetivo:
Hacer verificable el avance.
Entregable:
Tabla de IDs resueltos, parciales y pendientes.
Criterio de aceptación:
Cada tarea tiene estado: resuelta, parcial, pendiente, bloqueada o no aplica.
Riesgo si no se hace:
No se puede saber qué se cumplió.

BRU-QA-05 — Documentar TODOs por falta de datos reales
Prioridad: Crítica.
Descripción:
Listar asuntos, metadatos, nombres, clientes, rankings o liderazgo que requieran validación.
Objetivo:
Evitar inventar información.
Entregable:
Lista de TODOs para Stakeholder Bruchou / Legal.
Criterio de aceptación:
Todo dato sensible no validado queda marcado.
Riesgo si no se hace:
Riesgo legal, reputacional o de contenido falso.

BRU-QA-06 — Preparar checklist final de aprobación
Prioridad: Alta.
Descripción:
Dejar una checklist final para que QA o stakeholders revisen.
Objetivo:
Cerrar la fase con gobernanza.
Entregable:
Checklist en resumen final o archivo markdown.
Criterio de aceptación:
La checklist permite decidir go/no-go.
Riesgo si no se hace:
Aprobación ambigua.

</Épica 16>

<Criterios de aceptación globales>
La implementación se considera correcta si:

1. La home mantiene la base visual actual.
2. No hay rediseño total ni nueva identidad.
3. La primera mitad queda ordenada como:
   Hero → Método → Sectores → Asuntos representativos → Áreas/liderazgo.
4. Sectores y asuntos tienen más peso que rankings, claims e IA.
5. AI Search queda visible, útil y secundario.
6. Reconocimientos quedan compactos y secundarios.
7. El hero comunica complejidad empresaria, regulación, negocio, capital y ejecución.
8. El método no aparece como cinco cards literales.
9. Los asuntos se llaman “asuntos representativos”, no “casos de éxito”.
10. Hay 1 ficha principal y 2 secundarias para asuntos, o TODO explícito si falta data.
11. Hay diversidad sectorial o TODO explícito si falta información validada.
12. Las matter cards incluyen metadata o TODO explícito.
13. Los CTAs son específicos.
14. No hay claims genéricos como titulares.
15. La UI diferencia cards por función.
16. El responsive funciona en desktop, tablet y mobile.
17. No hay interacción importante dependiente solo de hover.
18. Focus, contraste y legibilidad están cuidados.
19. El build pasa o los errores quedan documentados.
20. La entrega queda verificable por otra persona.
    </Criterios de aceptación globales>

<Restricciones de contenido>
No inventes:
- Clientes.
- Socios.
- Montos.
- Operaciones.
- Resultados.
- Jurisdicciones.
- Rankings.
- Premios.
- Fechas.
- Metadata legal.
- Permisos de publicación.

Cuando falte información real, usá:
TODO: validar con Bruchou.
TODO: validar con Legal / Compliance.
TODO: confirmar metadata.
TODO: confirmar asunto no energético.
</Restricciones de contenido>

<Formato de respuesta antes de implementar>
Antes de modificar archivos, respondé con:

1. Stack detectado.
2. Ruta de la home.
3. Componentes actuales relevantes.
4. Archivos que vas a tocar.
5. Componentes que vas a crear o modificar.
6. Riesgos.
7. Supuestos.
8. Tareas del backlog que vas a resolver primero.
9. Tareas bloqueadas por falta de información.
10. Confirmación de que no vas a rediseñar desde cero.
    </Formato de respuesta antes de implementar>

<Formato de respuesta final>
Al terminar, respondé con:

1. Resumen ejecutivo.
2. Archivos modificados.
3. Componentes creados.
4. Componentes modificados.
5. Tareas resueltas por ID.
6. Tareas parcialmente resueltas por ID.
7. Tareas bloqueadas por falta de data real.
8. TODOs para Bruchou / Legal.
9. Comandos ejecutados.
10. Resultado de build/lint/test.
11. Riesgos restantes.
12. Checklist de aprobación.
    </Formato de respuesta final>

<Tarea final>
Inspeccioná el repo, proponé un plan breve y luego implementá la evolución de la home como desarrollador UI senior, resolviendo el backlog en orden de prioridad.

No hagas exploración visual nueva.
No rediseñes la marca.
No inventes contenido sensible.
No conviertas la home en una web genérica de estudio jurídico.

El objetivo es una implementación quirúrgica, verificable, sobria, premium y alineada con el documento final.
</Tarea final>
