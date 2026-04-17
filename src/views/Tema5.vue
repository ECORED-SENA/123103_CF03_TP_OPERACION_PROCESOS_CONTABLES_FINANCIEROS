<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Control y actualización de la ejecución productiva
    p.mb-5 Este apartado se ocupa de una etapa que en la empresa real ocurre todos los días: registrar lo que efectivamente se hizo y actualizar el estado de las órdenes a medida que avanzan. Una cosa es lo programado y otra muy distinta lo que realmente sucede en planta, por lo que el control de la ejecución productiva parte de comparar lo previsto con lo ejecutado, registrar cantidades, tiempos, recursos utilizados, incidencias y resultados, y convertir esa información en decisiones de ajuste. En la bibliografía de planeación y control de la producción, los registros de producción se utilizan para conocer la capacidad real, detectar cuellos de botella y evaluar el comportamiento efectivo del sistema (Sipper & Bulfin, 1998).
    .box___style_12.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 En la práctica, una empresa necesita saber si una orden ya empezó, cuánto lleva producido, si está detenida, si terminó o si debe reprogramarse, y esta información no puede depender de la memoria del operario o de comunicaciones aisladas. Debe quedar documentada en registros que permitan hacer seguimiento, alimentar indicadores y mantener trazabilidad. Además, los sistemas integrados de información empresarial y los ERP incorporan módulos para planificar, gestionar y actualizar procesos de producción, materiales y estados de órdenes (Hormigo, 2011).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img149.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Registros de producción ejecutada
    p.mb-5 Los registros de producción ejecutada son los documentos, formatos o datos en sistema donde se consigna lo que realmente ocurrió durante la ejecución de una orden. Allí se anotan, por ejemplo, cantidades producidas, horas trabajadas, tiempos reales, consumos de materiales, recursos utilizados, puntos de control superados, incidencias y observaciones del proceso. Su propósito es dejar evidencia verificable de la ejecución y servir de base para el control operativo. Sin estos registros, la empresa no puede saber con certeza si cumplió lo programado o si solo cree haberlo cumplido (Chapman, 2006).
    .box___style_4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img150.png', alt='').m-auto
        .col-xl
          p.mb-0 En una empresa real, estos registros no se elaboran “por formalidad”. Se usan para responder preguntas concretas: cuántas unidades salieron realmente, cuánto tiempo tomó la operación, qué recurso se ocupó más de lo previsto, en qué punto apareció una incidencia y qué orden quedó pendiente. En una empresa de confecciones, por ejemplo, no basta con decir “ya salió el lote”; se necesita registrar cuántas prendas se terminaron, cuántas quedaron en reproceso, cuánto duró la jornada y qué observaciones dejó calidad. Ese nivel de detalle es el que permite controlar de verdad la ejecución productiva (Sipper y Bulfin, 1998).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Qué se registra durante la ejecución
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in").mb-3
          p.mb-0 Durante la ejecución productiva conviene registrar, como mínimo, la cantidad programada, la cantidad realmente producida, la hora de inicio, la hora de terminación, los tiempos de paro, los recursos utilizados, las novedades presentadas y el resultado de los controles de calidad. Estos datos permiten reconstruir lo ocurrido en la operación y comparar el comportamiento real con el plan inicial, siendo fundamentales para medir capacidad demostrada, eficiencia y utilización.
        .row.align-items-center
          .col-xl
            p.mb-0 Un ejemplo permite comprender su importancia. Si la orden OP-4587 tenía programadas 300 camisetas en dos días, pero el primer día se produjeron 180 unidades, el segundo solo 90 por falta de insumo y el tercero se completó el lote, registrar únicamente que la orden terminó implicaría perder información clave. En cambio, al registrar cantidades por día, causa del retraso, tiempo detenido y recursos utilizados, es posible explicar el desvío y tomar acciones para evitar su repetición.
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img16.svg', alt='').m-auto
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img151.png', alt='').m-auto
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Información básica que debe contener un registro de producción ejecutada
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Dato registrado
                    th.ajuste-border-tabla.texto-left Qué muestra
                    th.texto-left Utilidad en el control
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Orden o lote
                    td.ajuste-border-tabla.texto-left Identifica el trabajo ejecutado
                    td.texto-left Permite trazabilidad
                  tr
                    td.ajuste-border-tabla.texto-left Cantidad programada
                    td.ajuste-border-tabla.texto-left Meta prevista
                    td.texto-left Sirve de referencia para comparar
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cantidad ejecutada
                    td.ajuste-border-tabla.texto-left Resultado real
                    td.texto-left Mide avance y cumplimiento
                  tr
                    td.ajuste-border-tabla.texto-left Hora de inicio
                    td.ajuste-border-tabla.texto-left Momento real de arranque
                    td.texto-left Ayuda a controlar tiempos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Hora de terminación
                    td.ajuste-border-tabla.texto-left Momento real de cierre
                    td.texto-left Permite medir duración real
                  tr
                    td.ajuste-border-tabla.texto-left Tiempo detenido
                    td.ajuste-border-tabla.texto-left Paros o esperas
                    td.texto-left Ayuda a explicar retrasos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Recurso utilizado
                    td.ajuste-border-tabla.texto-left Operario, línea, máquina o área
                    td.texto-left Muestra ocupación real
                  tr
                    td.ajuste-border-tabla.texto-left Incidencia
                    td.ajuste-border-tabla.texto-left Novedad presentada.
                    td.texto-left Facilita análisis y corrección
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Observación de calidad
                    td.ajuste-border-tabla.texto-left Resultado del control
                    td.texto-left Relaciona producción y conformidad
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Registros de tiempos reales, recursos e incidencias
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img95.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Los tiempos reales son especialmente importantes porque muestran cuánto tardó en verdad la operación y no cuánto se esperaba que tardara. Esta diferencia entre tiempo programado y tiempo ejecutado constituye una señal clave para detectar problemas de método, faltantes de material, fallas de equipo o sobrecarga del recurso. De igual manera, el registro de los recursos realmente utilizados permite verificar si la operación se ejecutó como estaba prevista o si fue necesario reasignar personal, cambiar de línea o utilizar equipos alternos (Chapman, 2006).
    p.mb-5 Las incidencias también deben registrarse con detalle, ya que no es suficiente indicar que hubo un retraso o un problema. Es necesario documentar la causa, la hora en que ocurrió, el tiempo que afectó la orden y la acción tomada, de modo que el registro se convierta en una herramienta de mejora y no solo en una bitácora histórica. En muchas empresas, los problemas se repiten porque las incidencias se recuerdan, pero no se documentan con la claridad necesaria (Chapman, 2006). A continuación, se presentan fórmulas básicas de apoyo para el análisis de la ejecución:     
    .row.justify-content-center.mb-5
      .col-xl-7
        .box___style_10(data-aos="flip-up")
          h5 Fórmulas básicas de apoyo
          p.mb-0 Avance de producción:
          p Avance % = (cantidad ejecutada / cantidad programada) x 100
          p.mb-0 Desviación de tiempo:
          p Desviación = tiempo real - tiempo estándar
          p.mb-0 Utilización del recurso:
          p Utilización % = (tiempo utilizado / tiempo disponible) x 100
          h5 Ejemplo:
          p.mb-0 Si una orden programó 300 unidades y al cierre del día solo se ejecutaron 180:
          p Avance % = (180 / 300) x 100 = 60 %
          p.mb-0 Si el tiempo estándar de una operación era 6 horas y en realidad tomó 7,5 horas:
          p.mb-0 Desviación = 7,5 - 6 = 1,5 horas de exceso.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Reportes diarios e indicadores de avance y calidad
    p.mb-5 En la gestión de la producción, los reportes diarios permiten consolidar la información de ejecución, facilitando que áreas como supervisión y programación analicen el estado de las órdenes sin necesidad de revisar datos individuales.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img152.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, estos reportes responden a preguntas clave como: qué órdenes se terminaron, cuáles continúan en proceso, cuáles se detuvieron, cuánto se produjo realmente y qué incidencias se presentaron. Cuando el reporte es claro, la empresa puede reaccionar con rapidez; en cambio, si es incompleto, el seguimiento se vuelve lento e impreciso (Pisa, 2013).
    .color___box_1
      .px-5
        p.mb-5 A partir de esta información consolidada, se construyen indicadores que permiten transformar la ejecución en datos útiles para la toma de decisiones. Estos indicadores facilitan identificar desviaciones en el proceso, como aumentos en órdenes detenidas o disminuciones en el cumplimiento de plazos, lo que puede evidenciar problemas en materiales, capacidad o comunicación (Chapman, 2006). Para organizar estos indicadores, se presenta la siguiente tabla:
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Indicadores de control en la producción
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Indicador
                    th.ajuste-border-tabla.texto-left Fórmula
                    th.texto-left Qué permite observar
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Cumplimiento de producción]
                    td.ajuste-border-tabla.texto-left (cantidad ejecutada / cantidad programada) x 100
                    td.texto-left Permite identificar si la meta de producción se alcanzó
                  tr
                    td.ajuste-border-tabla.texto-left #[b Cierre oportuno de órdenes]
                    td.ajuste-border-tabla.texto-left (órdenes cerradas en plazo / órdenes cerradas) x 100
                    td.texto-left Mide la puntualidad en la ejecución del proceso
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Órdenes detenidas]
                    td.ajuste-border-tabla.texto-left (órdenes detenidas / órdenes abiertas) x 100
                    td.texto-left Indica el nivel de afectación por incidencias operativas
                  tr
                    td.ajuste-border-tabla.texto-left #[b Utilización del recurso]
                    td.ajuste-border-tabla.texto-left (tiempo utilizado / tiempo disponible) x 100
                    td.texto-left Evalúa el grado de aprovechamiento de los recursos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Producto conforme]
                    td.ajuste-border-tabla.texto-left (unidades conformes / unidades producidas) x 100
                    td.texto-left Permite analizar el resultado en términos de calidad
            .box___style_9.mb-0(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Estos indicadores permiten realizar un seguimiento estructurado del desempeño productivo, facilitando la detección de desviaciones y la implementación de acciones correctivas.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Actualización del estado de órdenes de producción
    p.mb-5 Actualizar el estado de las órdenes significa reflejar en el sistema o en los registros la situación real en la que se encuentra cada orden, teniendo en cuenta que estas pueden pasar por diferentes estados como liberada, en preparación, en proceso, detenida, finalizada o cerrada. Si estos cambios no se actualizan oportunamente, la empresa toma decisiones sobre una realidad desactualizada, lo que afecta la coordinación del sistema productivo. En los sistemas de gestión de producción, el estado de la orden se utiliza precisamente para controlar el avance, consultar el trabajo pendiente y coordinar la siguiente acción (ByDesign, 2025).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          p.mb-0 En la práctica, esto se evidencia cuando una orden ya terminó una operación, pero en el sistema sigue apareciendo en un estado anterior, lo que impide que la siguiente área se prepare a tiempo. Por el contrario, cuando el estado se actualiza correctamente, las áreas involucradas pueden actuar con oportunidad, lo que confirma que la actualización no es un aspecto administrativo, sino una condición para la coordinación real de la producción (ByDesign, 2025).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img153.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Estados frecuentes de una orden de producción
    p.mb-5 Aunque cada empresa puede manejar su propia nomenclatura, en general las órdenes de producción atraviesan estados como liberada, iniciada, en proceso, detenida, terminada y cerrada. Cada estado indica la posición real de la orden dentro del flujo productivo y permite interpretar su situación operativa. Más que memorizar una lista, es importante comprender qué comunica cada estado: 
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img154.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img155.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Liberada
                p.mb-0.text-center La orden fue autorizada para iniciar.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img156.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Iniciada
                p.mb-0.text-center Ya comenzó el procesamiento de al menos una operación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img157.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text En proceso
                p.mb-0.text-center La orden sigue ejecutándose en el sistema productivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img158.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Detenida
                p.mb-0.text-center La ejecución se interrumpió por una incidencia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img159.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Terminada
                p.mb-0.text-center La producción física ya concluyó.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img160.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cerrada
                p.mb-0.text-center La orden fue finalizada y registrada completamente.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Cuándo y cómo actualizar el estado de una orden
        p.mb-5 El estado de una orden debe actualizarse cada vez que ocurre un cambio significativo en su ejecución, como el inicio de la operación, el paso a otra etapa, una detención, la finalización física o el cierre administrativo. La oportunidad del registro es tan importante como su contenido, ya que una actualización tardía impide que el sistema represente la realidad del proceso y reduce su utilidad como herramienta de seguimiento (ByDesign, 2025).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img16.svg', alt='').m-auto
          .col-xl
            p.mb-0 En la práctica, la actualización puede realizarse en sistemas digitales, formatos físicos o ambos, dependiendo del nivel de digitalización de la empresa. Lo esencial es que exista una regla clara sobre quién actualiza, en qué momento y con qué evidencia, como ocurre cuando el supervisor registra el inicio y fin de operaciones y el operario reporta incidencias y avances parciales, lo que distribuye la responsabilidad y mejora la confiabilidad del seguimiento (ByDesign, 2025).
        .box___style_10.fit___box_10(data-aos="zoom-in")
          h5.mb-0 Ejemplo 
          p.mb-0 La orden OP-4587 fue liberada el lunes a las 8:00 a. m., inició a las 8:30 a. m. con el proceso de corte, pasó a en proceso en confección, se detuvo el miércoles por falta de insumo, retomó su ejecución ese mismo día y finalmente se marcó como terminada y luego cerrada al completar el registro del lote. Este recorrido evidencia cómo la actualización de estados permite reconstruir la historia operativa de la orden (ByDesign, 2025).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img161.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Actualización, trazabilidad y toma de decisiones
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 La actualización de estados no solo permite mantener el sistema al día, sino que hace posible la trazabilidad del proceso, ya que permite identificar por qué etapas pasó la orden, qué problemas enfrentó y cuánto tiempo permaneció en cada situación. Esta información resulta clave para el análisis posterior, la mejora de la programación y la evaluación del desempeño de los recursos (Chapman, 2006).
    p.mb-5 Cuando la empresa identifica en qué etapas se detienen más órdenes o en cuáles se presentan mayores tiempos de cierre, puede actuar con mayor precisión, utilizando la información registrada como base para la toma de decisiones y la mejora continua del sistema productivo.
    .box___style_5.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img17.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejemplo integrador: control y actualización de la ejecución productiva
          p.mb-0 Se invita a leer el documento, donde se aborda el control y la actualización de la ejecución productiva a partir del seguimiento diario de las órdenes de producción y el registro de avances, tiempos e incidencias.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejemplo_Integrador_instruccional.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
