FLUXO WEB — Especificación de diseño y estructura

Versión: 1.0 — 24/10/2026
Tipo: especificación de diseño e interfaz de la nueva landing page
Idioma del sitio: español paraguayo con voseo
Objetivo: documento de entrega para diseño, frontend, contenidos y equipo comercial

> **Referencia visual principal:** `fluxo_web_ideias_que_viram_soluções.png` (mockup vertical, 841 × 1870 px). **Identidad proporcionada por la empresa:** `IMG_4583.jpeg` (símbolo de cerebro/nube con circuitos y logotipo FLUXO WEB). El mockup es conceptual: **no** es una captura del sitio en producción ni un conjunto de pantallas funcionales. Los valores CSS siguientes son sugerencias de implementación, no mediciones exactas ni un archivo de diseño original.

1. Concepto del sitio

La página posiciona a Fluxo Web como empresa de tecnología para empresarios, no como una lista de servicios técnicos. El visitante llega con una de dos intenciones: tengo una idea o quiero resolver un problema. La página presenta posibilidades, proyectos, método de trabajo, comunidad y visión del mundo.

Promesa de comunicación:

> **Vos conocés tu negocio. Juntos construimos lo que sigue.**  
> Transformamos tus ideas y desafíos en soluciones tecnológicas.

Movimiento: Empresas que Piensan.
Concepto central: Tu negocio sabe más de lo que imaginás. Hacé que su inteligencia trabaje para vos.

Las cuatro capas, integradas en la navegación

|Capa                                   |Finalidad                                                |Dónde aparece                             |
|---------------------------------------|---------------------------------------------------------|------------------------------------------|
|Empresa — comunicación utilitaria      |Resolver problemas identificables                        |Beneficios, proyectos, proceso y CTA      |
|Marca — comunicación aspiracional      |Mostrar lo que el negocio puede alcanzar                 |Hero y sección «Tu experiencia puede ser…»|
|Tribu — comunicación identitaria       |Formar comunidad entre empresarios                       |«Empresas que Piensan»                    |
|Movimiento — comunicación inspiracional|Defender la transformación del conocimiento en tecnología|Cierre y manifiesto                       |

Las capas conviven: no crear páginas rígidas ni etapas artificiales del embudo para cada una.

2. Identidad visual — referencia obligatoria

Marca: reproducir fielmente el archivo aprobado: contorno color crema del cerebro/nube con puntos de circuito en la parte superior, línea horizontal y ramificaciones de circuito debajo, junto al nombre FLUXO WEB en mayúsculas y letras espaciadas. No reemplazarlo por el ícono azul abstracto del mockup anterior. Para producción, es preferible solicitar a la empresa el archivo vectorial original (SVG/AI/EPS); si solo existe el JPEG, vectorizarlo y pedir la aprobación del propietario.

Paleta propuesta

|Token                |Hex sugerido|Uso                                     |
|---------------------|------------|----------------------------------------|
|`--color-bg`         |`#1C1C1B`   |Fondo predominante, hero y pie de página|
|`--color-bg-raised`  |`#252522`   |Tarjetas sobre fondo oscuro             |
|`--color-cream`      |`#F2E9D4`   |Botones principales, fondos alternados  |
|`--color-cream-soft` |`#E7DDCA`   |Líneas y adornos discretos              |
|`--color-text-light` |`#F6F1E7`   |Texto sobre fondos oscuros              |
|`--color-text-dark`  |`#181817`   |Texto sobre fondos claros               |
|`--color-muted-dark` |`#C4C0B7`   |Texto secundario sobre fondo oscuro     |
|`--color-border-dark`|`#5C584E`   |Bordes discretos de las tarjetas        |

Regla: no utilizar azul, cian, neón, degradados de colores ni efectos futuristas genéricos. La identidad debe ser sobria, tecnológica y elegante: carbón, crema y detalles lineales.

Tipografía

• Títulos: sans serif sólida, geométrica y muy legible. Sugerencias: Manrope o Inter; verificar licencia, disponibilidad y coherencia con la identidad de marca.
• Párrafos: sans serif neutra y legible, de peso ligero y con buen contraste.
• Logotipo: usar el arte original; no reconstruir el nombre de la marca con una tipografía arbitraria.
• Jerarquía propuesta: H1 de 56–72 px en escritorio (36–42 px en móvil); H2 de 36–48 px en escritorio (28–34 px en móvil); texto de 16–20 px; leyendas de 12–14 px. Usar una escala adaptable con clamp().
• Espaciado generoso, títulos breves, saltos de línea intencionales y pocas frases por bloque.

Lenguaje gráfico

• Utilizar líneas finas de circuitos, puntos e interconexiones derivados del símbolo original, nunca como un nuevo logotipo.
• Tarjetas color carbón, contornos crema translúcidos e íconos sencillos de línea.
• Alternar fondos oscuros y franjas crema para marcar la jerarquía durante el desplazamiento.
• Identificar las imágenes de productos como demostraciones, capturas aprobadas o imágenes conceptuales.
• No usar fotografías ficticias del equipo, resultados inventados, clientes no autorizados ni testimonios simulados.

3. Diseño y estructura general

Formato de referencia: composición vertical de página de escritorio, centrada y de ancho amplio. El mockup de 841 × 1870 px es una representación reducida; no utilizar esas medidas como dimensiones CSS literales.

HEADER / NAVEGACIÓN
  ↓
HERO — idea o problema
  ↓
BENEFICIOS — ¿Qué querés hacer posible?
  ↓
PROYECTOS — Ideas que se convierten en proyectos
  ↓
ASPIRACIÓN — Tu experiencia puede ser el comienzo...
  ↓
PROCESO — 4 etapas
  ↓
COMUNIDAD — Empresas que Piensan
  ↓
MANIFIESTO + CTA FINAL
  ↓
FOOTER

Grid sugerido: contenido centrado con max-width: 1200px, márgenes laterales de 24–40 px en escritorio y de 20–24 px en móvil. Espaciado vertical entre secciones de 72–112 px en escritorio, reducido en móvil. Hero con dos columnas en escritorio; beneficios y etapas en cuatro columnas; portafolio con tres tarjetas.

4. Especificación sección por sección

4.1 Header / navegación

Aspecto visual: fondo carbón, logotipo crema a la izquierda, enlaces en el centro/derecha y botón crema de alto contraste a la derecha.

• Marca: cerebro-circuito + FLUXO WEB.
• Enlaces: Soluciones, Proyectos, Nosotros.
• CTA: Hablemos →.
• Interacciones: los enlaces llevan a sus secciones correspondientes; el CTA abre el formulario o WhatsApp comercial configurado. El encabezado fijo (sticky) es opcional; no es una característica confirmada por el mockup.

4.2 Hero — propuesta principal

Capa: Marca + Empresa.
Fondo: carbón oscuro.
Escritorio: texto a la izquierda y símbolo grande de cerebro y circuitos a la derecha, con cuatro etiquetas: Ideas, Ventas, Operación, Tecnología.

Texto exacto de referencia:

> **Vos conocés tu negocio. Juntos construimos lo que sigue.**  
> Transformamos tus ideas y desafíos en soluciones tecnológicas.

CTA uno al lado del otro:

1. Tengo una idea → — botón crema relleno.
2. Quiero resolver un problema — botón transparente con borde crema.

Microtexto: Ciudad del Este · Paraguay, acompañado de un ícono discreto de ubicación.

Comportamiento: ambos botones llegan al mismo punto de conversión, pero deben conservar la intención en un campo (intent=idea o intent=problema) para el análisis comercial.

4.3 Beneficios — posibilidades concretas

Capa: Empresa.
Fondo: crema.
Título: ¿Qué querés hacer posible?

Cuatro bloques horizontales en escritorio (uno o dos por fila en móvil), cada uno con ícono circular, título y frase breve:

|Ícono    |Título                    |Microcopy sugerida                          |
|---------|--------------------------|--------------------------------------------|
|Carrito  |`Vender mejor`            |`Convertí más oportunidades en clientes.`   |
|Engranaje|`Simplificar tu operación`|`Hacé más simple lo complejo del día a día.`|
|Gráfico  |`Tener más control`       |`Tomá decisiones con información clara.`    |
|Bombilla |`Crear algo nuevo`        |`Llevá tus ideas a soluciones reales.`      |

Usar divisores verticales suaves solo en pantallas anchas. Evitar prometer mejoras cuantificadas sin evidencia.

4.4 Proyectos / portafolio

Capa: Empresa (demostración de capacidad).
Fondo: carbón.
Título: Ideas que se convierten en proyectos.
Enlace secundario: Ver todos los proyectos →.

Tres tarjetas en el mockup:

• Quiro AI — Plataforma con inteligencia artificial.
• Millonai — Finanzas personales.
• Pro Aqua — E-commerce.

Proyecto adicional presentado como enlace: Bruno Info Sorteos →.

Importante: las pantallas dentro de las tarjetas del mockup son vistas conceptuales, no capturas verificadas. En la versión final, reemplazarlas por capturas o videos reales aprobados. Validar con el equipo el nombre, la descripción, la etapa del proyecto, los derechos de publicación y el destino de cada enlace.

Tarjeta: superficie --color-bg-raised, borde fino, imagen con proporción consistente, nombre destacado y subtítulo breve. Al hacer clic o tocar, abrir el caso detallado o la página del proyecto si existe; mientras tanto, no mostrar enlaces falsos.

4.5 Sección aspiracional

Capa: Marca.
Fondo: carbón + ilustración/arquitectura conceptual en crema a la derecha.

> **Tu experiencia puede ser el comienzo de algo nuevo.**  
> Vos aportás el conocimiento de tu mercado. Nosotros, la tecnología para desarrollarlo con vos.

Función: conectar el patrimonio invisible del empresario con nuevas posibilidades, sin limitar la oferta a inteligencia artificial.

4.6 Proceso en cuatro pasos

Capa: Empresa.
Fondo: crema.
Título: Un camino claro, desde la primera conversación.

|Número|Etapa                 |Explicación                                      |
|------|----------------------|-------------------------------------------------|
|01    |`Te escuchamos`       |`Conocemos tu negocio, tus ideas y tus desafíos.`|
|02    |`Definimos el camino` |`Damos forma a la solución juntos.`              |
|03    |`Construimos con vos` |`Desarrollamos y validamos en cada etapa.`       |
|04    |`Lo ponemos en marcha`|`Te acompañamos en su implementación.`           |

Representar los números dentro de círculos suaves, con flechas entre las etapas en escritorio. En móvil, utilizar una lista vertical con separadores; no forzar cuatro columnas con texto ilegible.

4.7 Comunidad / identidad

Capa: Tribu.
Fondo: carbón, con detalles lineales en crema.
Título: Empresas que Piensan.

> Un espacio para compartir experiencias y descubrir nuevas posibilidades.

CTA: Conocé la iniciativa →.

Estado: es una propuesta de comunidad/movimiento. No presentar encuentros, cantidad de miembros ni programas como existentes antes de confirmarlos. El CTA puede dirigir a una página explicativa simple o a una lista de interesados.

4.8 Cierre — manifiesto + conversión

Capa: Movimiento, con CTA comercial.
Fondo: carbón, con hilos/circuitos sutiles en los bordes.

> **Tu negocio sabe más de lo que imaginás.**  
> Hacé que su inteligencia trabaje para vos.

Botón principal centrado: Conversemos sobre tu negocio →.

El CTA debe abrir el formulario de contacto o el WhatsApp configurado; no dejarlo sin acción.

4.9 Footer / pie de página

Aspecto visual: fondo carbón, divisor sutil y logotipo original en versión crema.

• Ciudad del Este · Paraguay.
• Enlaces: Privacidad, Contacto.
• Agregar políticas y datos reales de contacto antes de publicar.

5. Funcionalidad de los CTA y conversión

La imagen no muestra un formulario detallado, pero la versión implementada necesita un destino de conversión.

MVP de conversión propuesto: sección o ventana modal Hablemos de tu negocio con campos Nombre, Empresa, WhatsApp o correo, ¿Qué querés crear o mejorar?, ¿Con cuál situación te identificás? [Tengo una idea / Quiero resolver un problema], consentimiento de privacidad y CTA Enviar consulta.

• Validar los campos; mostrar confirmación de éxito o error solo después de recibir el resultado del envío.
• Enviar los datos al CRM o al canal comercial efectivamente conectado; no inventar integraciones.
• Registrar la procedencia (utm_source, utm_medium, utm_campaign, cuando existan), el CTA utilizado, la intención y la página de origen, según consentimiento y normativa aplicable.
• Como alternativa mediante WhatsApp, abrir el número oficial confirmado con un mensaje precargado que refleje la intención; no incluir un número ficticio en el código final.
• Incluir medidas antispam, protección de datos y confirmación de recepción.

6. Componentes para desarrollo

LandingPage
├── SiteHeader
│   ├── BrandLogo
│   ├── PrimaryNavigation
│   └── HeaderCTA
├── HeroSection
│   ├── HeroCopy
│   ├── IntentButtons
│   └── BrandCircuitIllustration
├── BenefitsSection
│   └── BenefitCard × 4
├── PortfolioSection
│   └── ProjectCard × 3 + AdditionalProjectLink
├── AspirationSection
├── ProcessSection
│   └── ProcessStep × 4
├── CommunitySection
├── FinalCTASection
├── ContactFormOrWhatsAppFlow
└── SiteFooter

Preferir textos, imágenes y proyectos configurables desde un CMS o un objeto de contenido, con tarjetas accesibles. Separar la presentación de la captura de leads. No integrar API financieras ni datos sensibles en la landing page solo porque la empresa desarrolla soluciones de ese tipo.

7. Diseño responsive

|Ancho sugerido|Comportamiento                                                                                                         |
|--------------|-----------------------------------------------------------------------------------------------------------------------|
|`≥ 1024px`    |Hero de 2 columnas; beneficios en 4; proyectos en 3; proceso en 4                                                      |
|`768–1023px`  |Hero adaptado; beneficios 2 × 2; proyectos en 2 columnas o con desplazamiento controlado; proceso 2 × 2                |
|`< 768px`     |Una columna principal; en el hero aparecen primero texto y CTA, luego ilustración; proyectos apilados; proceso vertical|

• CTA amplios y fáciles de tocar en móvil.
• Menú móvil accesible, con botón para abrir/cerrar y gestión correcta del foco.
• Evitar que el símbolo se superponga al texto del hero en pantallas pequeñas.
• Reducir u ocultar el símbolo de circuitos cuando perjudique la lectura del contenido.
• No sustituir el HTML responsive por imágenes completas de la página.

8. Animación e interacción

• Efectos hover sutiles en botones y tarjetas; transición sugerida de 150–250ms.
• Aparición discreta y opcional de las secciones; ninguna animación debe ser necesaria para entender la página.
• Los trazos de circuitos pueden tener un brillo o efecto de dibujo progresivo muy leve, sin neón, solo si el rendimiento lo permite.
• Respetar prefers-reduced-motion.
• Evitar parallax excesivo, bloqueo de desplazamiento y animaciones que retrasen el acceso al CTA.

9. Accesibilidad y rendimiento

• Implementar HTML semántico, con un único h1 y una jerarquía coherente de h2/h3.
• Cumplir contraste WCAG AA para textos y componentes; comprobar el contraste de los colores definitivos en el navegador.
• Estados de foco visibles; enlaces y botones con etiquetas descriptivas.
• Áreas táctiles cómodas (idealmente de al menos 44 × 44px).
• No depender únicamente de íconos o colores para transmitir información.
• Ilustraciones decorativas: aria-hidden; capturas de productos: texto alt descriptivo.
• Imágenes optimizadas (WebP/AVIF cuando corresponda), lazy loading para contenido debajo del primer pantallazo; logotipo en SVG aprobado.
• Definir dimensiones de las imágenes para evitar desplazamientos del diseño y minimizar JavaScript innecesario.

10. SEO, contenido y medición

Meta title sugerido: Fluxo Web | Tecnología para convertir ideas en soluciones.

Meta description sugerida: ¿Tenés una idea o un desafío en tu empresa? En Fluxo Web desarrollamos soluciones tecnológicas junto a empresarios de Ciudad del Este.

• Idioma del documento: lang="es-PY" (o configuración equivalente).
• Open Graph con arte de marca y texto revisado.
• Datos estructurados de la organización solo con nombre, dirección, teléfono y canales verificados.
• Medir clics por CTA, intención declarada, procedencia, formularios iniciados, leads recibidos y oportunidades calificadas. No tratar un clic como un contrato.
• Elaborar una política de privacidad adecuada a los datos que realmente se recopilen.

11. Criterios de aceptación antes de publicar

☐ El logotipo coincide con la identidad enviada, sin cambios de proporción ni colores no aprobados.
☐ El texto está en español natural y consistente, con voseo.
☐ Se ven claramente las dos opciones Tengo una idea / Quiero resolver un problema.
☐ Todos los botones tienen destinos funcionales y pruebas de extremo a extremo.
☐ Los nombres, descripciones e imágenes de los proyectos están aprobados por sus responsables.
☐ No hay porcentajes de resultados, testimonios, clientes ni promesas de soporte 24/7 inventados.
☐ El sitio funciona en móvil, tablet y escritorio.
☐ Se validaron el formulario/WhatsApp, la privacidad, la accesibilidad y las herramientas de analítica.
☐ La comunidad no promete actividades que todavía no se lanzaron.
☐ La información técnica profunda puede presentarse en la conversación comercial y en materiales adicionales, sin sobrecargar la landing page.

12. Archivos de referencia

1. Identidad visual proporcionada: IMG_4583.jpeg.
2. Mockup vigente, negro y crema: fluxo_web_ideias_que_viram_soluções.png.
3. Mockup exploratorio anterior, azul y blanco: fluxo_web_ideias_em_movimento.png — no implementar esta paleta.

Este documento describe la nueva propuesta visual acordada en la conversación; no es una auditoría ni una copia píxel por píxel del sitio publicado en fluxoweb.net.