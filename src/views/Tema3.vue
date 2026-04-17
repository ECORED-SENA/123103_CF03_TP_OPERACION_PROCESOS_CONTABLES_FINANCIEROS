<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Planificación operativa y documentación de la producción 
    p.mb-3 Después de definir qué se necesita producir, con qué capacidad se cuenta y cómo debe secuenciarse el trabajo, la organización debe traducir esas decisiones en planes verificables, asignación de recursos y documentos que orienten la operación.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.mb-3(data-aos="zoom-in")
          p.mb-0 En administración de operaciones, esta fase se relaciona con la planeación y control de la oferta y la demanda, la planeación de requerimientos y la programación del centro de trabajo, porque es allí donde el programa deja de ser una estimación y se vuelve una guía operativa (Jacobs y Chase, 2022).
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img95.svg', alt='').m-auto
          .col-xl
            p.mb-0 Su importancia radica en que una operación puede estar bien planeada en teoría, pero fracasar en la práctica si no queda formalizada y comunicada. La planificación operativa permite definir qué se hará, en qué cantidad, en qué fecha, con qué recursos y bajo la responsabilidad de quién, mientras que la documentación asegura trazabilidad, control y posibilidad de ajuste.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img94.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Plan de producción documentado 
    p.mb-5 En la gestión de operaciones, el plan de producción documentado constituye el instrumento que formaliza la manera en que se ejecutará la producción durante un periodo determinado, integrando información clave para garantizar coherencia y control en la operación.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img96.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este plan registra aspectos como los volúmenes por producto, las fechas de producción, los recursos comprometidos, los responsables, las contingencias previstas y los mecanismos de aprobación y distribución. Su propósito es dar orden y claridad a la ejecución, evitando que las decisiones queden limitadas a acuerdos verbales o a instrucciones dispersas (Chapman, 2006).
    .color___box_1
      .px-5
        p.mb-5 La importancia de documentar el plan radica en su capacidad para articular diferentes áreas del sistema productivo, asignar cargas de trabajo de manera estructurada, prever necesidades de materiales y establecer un referente que permita comparar posteriormente lo planificado con lo ejecutado. Además, se convierte en un soporte fundamental para el control del proceso, la comunicación interna y la toma de decisiones frente a cambios o desviaciones (Chapman, 2006). Este conjunto de elementos permite estructurar de manera clara y organizada la programación de la producción, asegurando que cada componente del proceso cuente con información precisa para su ejecución, seguimiento y control:
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img97.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Producto o referencia
            p.mb-0.text-center Identifica qué se va a producir dentro del programa.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img98.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Volumen programado
            p.mb-0.text-center  Define la cantidad prevista de producción.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img99.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fecha o periodo de producción
            p.mb-0.text-center Ubica el momento en que se ejecutarán las actividades.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img100.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recursos asignados
            p.mb-0.text-center Relaciona los materiales, la mano de obra y los equipos necesarios.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Responsable
            p.mb-0.text-center Indica quién coordina o ejecuta las actividades.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Contingencias previstas
            p.mb-0.text-center Establece acciones frente a posibles desvíos o restricciones.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Aprobación
            p.mb-0.text-center Formaliza la validación del plan por parte de la organización.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Distribución
            p.mb-0.text-center Define a quién se comunica el plan dentro del sistema productivo.
        p.mb-5 En conjunto, estos elementos permiten consolidar el plan de producción como una herramienta estructurada que integra información operativa, facilita la coordinación entre áreas y respalda el seguimiento y control del desempeño del proceso productivo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Propósito y función del plan de producción
    p.mb-5 El propósito principal del plan de producción es servir como guía de ejecución, lo que implica que no se limita a expresar una intención de producir, sino que organiza la operación con base en metas, tiempos, recursos y responsabilidades. En términos prácticos, el plan ayuda a coordinar lo que se necesita fabricar con la disponibilidad real del sistema, evitando sobrecargas, omisiones o contradicciones entre áreas (Chapman, 2006).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img105.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, su función es de control, porque permite comparar lo programado con lo ejecutado. Cuando una organización tiene un plan claramente documentado, puede hacer seguimiento al cumplimiento de cantidades, fechas y uso de recursos, y detectar más rápido desviaciones del proceso. Por eso, el plan no solo orienta la acción, sino que también se convierte en una base de evaluación y ajuste (Chapman, 2006).
    .color___box_1
      .px-5
        .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Componentes del plan: volúmenes, fechas, recursos y responsables
        p.mb-5 En la elaboración del plan de producción, la definición clara de sus componentes garantiza que la operación pueda ejecutarse de manera coherente, controlada y alineada con los objetivos del sistema productivo. En primer lugar, el plan debe establecer con precisión qué se va a producir y en qué cantidad.  Los elementos conforman la base para organizar y documentar la programación de la producción dentro del proceso operativo: 
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_14.h-100
              h4.mb-0.text-center Volumen programado
              p.mb-0.text-center Determina la carga de trabajo y las necesidades del sistema productivo.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_14.h-100
              h4.mb-0.text-center Fecha o periodo
              p.mb-0.text-center Define el momento en que se ejecutarán las actividades.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_14.h-100
              h4.mb-0.text-center Recursos asignados
              p.mb-0.text-center Establece los medios necesarios para realizar la producción, como materiales, equipos y mano de obra.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_14.h-100
              h4.mb-0.text-center Responsable
              p.mb-0.text-center Indica quién coordina, ejecuta o supervisa las actividades.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejemplo práctico
        p.mb-5 Si una empresa programa 500 unidades de un producto para la segunda semana del mes, pero no define qué línea de trabajo las fabricará ni qué supervisor responderá por el proceso, el plan queda incompleto. En cambio, si el documento señala cantidad, semana de ejecución, máquina asignada, operarios requeridos y responsable, la operación puede organizarse y monitorearse con mayor precisión.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Contingencias, aprobación, distribución y control del plan
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-5.mb-4.mb-lg-0
        p.mb-0 Todo plan de producción debe contemplar contingencias, ya que la operación está expuesta a retrasos en materiales, fallas de equipos, ausentismo o variaciones en la demanda. Incluir contingencias no significa anticipar todos los problemas posibles, sino prever acciones de respuesta que permitan sostener la operación cuando surjan desviaciones, fortaleciendo la capacidad de ajuste y evitando que cualquier imprevisto paralice completamente el cumplimiento del programa (Chapman, 2006).
      .col-xl.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img106.jpg', alt='').m-auto
      .col-xl-3
        .box___style_2.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 La aprobación y la distribución del plan son igualmente necesarias, ya que la aprobación formaliza su validez y compromiso institucional, mientras que la distribución asegura que las áreas involucradas conozcan sus tareas y tiempos.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Asignación de recursos: materiales, mano de obra y máquinas  
    p.mb-5 En la planificación de la producción, la asignación de recursos permite asegurar que los insumos, el personal y los equipos necesarios estén disponibles para ejecutar el plan de manera coherente y eficiente.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img107.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso integra tres componentes fundamentales: materiales, mano de obra y máquinas, los cuales deben analizarse de forma conjunta para evitar desbalances en la operación. No basta con calcular cada recurso por separado; es necesario articularlos con la capacidad real del sistema y con las condiciones del proceso productivo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Asignación de materiales
    .box___style_13.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Este proceso parte de identificar qué materiales requiere cada producto y en qué cantidad. Para ello, se utilizan herramientas como listas de materiales, consumos estándar o fichas técnicas, las cuales permiten calcular el requerimiento bruto del periodo. En términos operativos, no es suficiente conocer qué material utiliza un producto; también es indispensable determinar cuánto consume por unidad o por lote, con el fin de programar compras, reservas o abastecimiento interno de manera adecuada (Jacobs y Chase, 2022).
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
    p.mb-5 Sin embargo, la asignación de materiales no se limita al cálculo teórico. Es necesario contrastar este requerimiento con la disponibilidad real, ya que pueden presentarse situaciones como inventarios insuficientes, materiales comprometidos con otras órdenes o tiempos de reposición que impiden cubrir la necesidad en la fecha prevista. En este sentido, la asignación de materiales implica un análisis conjunto entre necesidad y disponibilidad (Jacobs y Chase, 2022). Para comprender su aplicación, se presentan las expresiones básicas utilizadas en este cálculo:
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="flip-up")
          .row.justify-content-center.text-center.mb-2
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Fórmula básica de materiales requeridos]
                p.mb-0 Material requerido = cantidad a producir x consumo estándar por unidad
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Si existe merma prevista:]
                p.mb-0 Material requerido ajustado = cantidad a producir x consumo estándar x (1 + porcentaje de merma)
          h5.mb-0 Ejemplo:
          p.mb-0 Si se van a producir 200 unidades y cada una consume 1,5 kg de material, el requerimiento base es:
          p 200 x 1,5 = 300 kg
          p.mb-0 Si además se contempla una merma del 4 %:
          p.mb-0 300 x 1,04 = 312 kg
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Asignación de mano de obra
    p.mb-5 En la planificación de la producción, la asignación de mano de obra permite determinar cuántas horas de trabajo o cuántos operarios se requieren para cumplir con el volumen programado, garantizando un uso eficiente de los recursos humanos.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img108.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso se basa en el uso de tiempos estándar, tiempos unitarios o cargas de trabajo previstas, lo que facilita balancear las actividades entre los operarios, evitar sobrecargas y verificar si la jornada disponible es suficiente para cumplir con el programa establecido (Jacobs y Chase, 2022).
    p.mb-5 No obstante, la asignación de mano de obra no se limita a un cálculo numérico. También debe considerar factores como las competencias, los turnos, la experiencia y la disponibilidad real del personal. Esto se debe a que no todos los operarios pueden ejecutar cualquier actividad con el mismo nivel de desempeño, ni todas las jornadas tienen la misma capacidad efectiva. Por esta razón, en producción se combina el análisis cuantitativo con el criterio operativo (Jacobs y Chase, 2022). Para estructurar este cálculo, se presentan las expresiones básicas utilizadas:
    .row.justify-content-center.mb-5
      .col-xl-7
        .box___style_10(data-aos="flip-up")
          h5.mb-0 Fórmulas básicas de mano de obra
          p Horas de mano de obra requeridas = cantidad a producir x tiempo estándar por unidad.
          p #[b Número de operarios requeridos] = horas de mano de obra requeridas / horas disponibles por operario en el periodo
          h5.mb-0 Ejemplo:
          p.mb-0 Si se programan 150 unidades y el tiempo estándar es 0,4 horas por unidad:
          p Horas requeridas = 150 x 0,4 = 60 horas
          p.mb-0 Si cada operario dispone de 8 horas por jornada:
          p.mb-0 Operarios requeridos = 60 / 8 = 7,5
          p.mb-0 Se requerirían 8 operarios si se quiere cumplir en una sola jornada.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Asignación de máquinas y centros de trabajo
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Este análisis se basa en el tiempo de proceso por unidad o por lote y en la capacidad efectiva de los recursos, con el objetivo de evitar la sobrecarga de máquinas o la subutilización de ciertos centros de trabajo. De esta manera, se busca un equilibrio en la distribución del trabajo dentro del sistema productivo (Jacobs y Chase, 2022).
    p.mb-5 Además, la asignación de máquinas debe considerar aspectos operativos clave como la secuencia de las operaciones, los tiempos de setup y la disponibilidad real de los equipos. No todas las máquinas están disponibles al mismo tiempo ni presentan la misma velocidad o flexibilidad, por lo que esta asignación debe articularse con la ruta de producción y las restricciones propias del proceso (Jacobs y Chase, 2022). Para estructurar este cálculo, se presentan las relaciones básicas utilizadas:
    .row.justify-content-center.mb-5
      .col-xl-7
        .box___style_10(data-aos="flip-up")
          h5 Fórmulas básicas de máquinas:
          p Horas máquina requeridas = cantidad a producir x tiempo máquina por unidad
          p Número de máquinas requeridas = horas máquina requeridas / horas disponibles por máquina en el periodo
          h5 Ejemplo:
          p.mb-0 Si se programan 240 unidades y cada una requiere 0,2 horas máquina:
          p Horas máquina = 240 x 0,2 = 48 horas
          p.mb-0 Si cada máquina dispone de 8 horas por jornada:
          p.mb-0  Máquinas requeridas = 48 / 8 = 6 máquinas
    .color___box_1
      .px-5
        p.mb-5 La tabla resume relaciones operativas sencillas para estimar materiales, mano de obra y máquinas requeridas.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Relaciones básicas para la asignación de recursos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Recurso
                    th.ajuste-border-tabla.texto-left Relación básica de cálculo
                    th.texto-left Aplicación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Materiales
                    td.ajuste-border-tabla.texto-left Cantidad a producir x consumo estándar
                    td.texto-left Estimar insumos requeridos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Materiales con merma
                    td.ajuste-border-tabla.texto-left Cantidad x consumo x (1 + merma)
                    td.texto-left Ajustar pérdidas esperadas
                  tr
                    td.ajuste-border-tabla.texto-left Mano de obra
                    td.ajuste-border-tabla.texto-left Cantidad x tiempo estándar
                    td.texto-left Calcular horas de trabajo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Operarios
                    td.ajuste-border-tabla.texto-left Horas requeridas / horas disponibles por operario
                    td.texto-left Estimar personal necesario
                  tr
                    td.ajuste-border-tabla.texto-left Horas máquina
                    td.ajuste-border-tabla.texto-left Cantidad x tiempo máquina por unidad
                    td.texto-left Calcular ocupación del equipo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Máquinas
                    td.ajuste-border-tabla.texto-left Horas máquina requeridas / horas disponibles por máquina
                    td.texto-left Estimar recursos físicos requeridos
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Balance y documentación de la asignación de recursos
        .box___style_12.mb-5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-0 En la planificación de la producción, la asignación de recursos no solo debe realizarse, sino también documentarse de manera clara para facilitar su comunicación, verificación y control dentro del sistema productivo. Documentar la asignación implica registrar qué materiales se reservan, qué personal se programa, qué máquinas quedan comprometidas y bajo qué periodo o centro de trabajo se ejecutarán las actividades. Este registro permite evitar duplicidades, mejorar la trazabilidad de las decisiones y facilitar la actualización del estado del plan (Chapman, 2006).
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img109.png', alt='').m-auto
    p.mb-5 Sin embargo, una vez realizada la asignación, es necesario analizar el equilibrio del sistema. Puede ocurrir que una orden concentre demasiada carga en un recurso específico o que se programen más horas de trabajo de las realmente disponibles. En estos casos, se requiere ajustar la programación mediante redistribución de cargas, cambios en la secuencia o modificación del volumen planificado (Jacobs y Chase, 2022). Para sintetizar este análisis, se presenta la siguiente relación:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Sobrecarga de recursos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img110.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Sobrecarga de recursos
            p.mb-0 Requiere redistribución de actividades o ajuste del plan para evitar cuellos de botella.
      .py-3.py-md-4(titulo="Subutilización")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img111.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Subutilización
            p.mb-0 Indica un uso ineficiente de la capacidad disponible, lo que puede afectar la productividad.
      .py-3.py-md-4(titulo="Asignación equilibrada")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img112.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Asignación equilibrada
            p.mb-0 Permite un flujo estable de trabajo y favorece el cumplimiento del programa.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl
        p Este análisis evidencia que la asignación de recursos trasciende el cálculo inicial y se convierte en una decisión operativa de balance, en la cual se ajustan cargas y capacidades para mantener la coherencia del plan de producción.
        .box___style_1.fit___box_1.mb-4.mb-lg-0(data-aos="fade-right")
          .row.align-items-center
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img16.svg', alt='' style="max-width: 85px").m-auto
            .col-xl
              p.mb-0 En este sentido, documentar y equilibrar la asignación de recursos contribuye a mejorar la coordinación del sistema, optimizar el uso de la capacidad instalada y fortalecer el control sobre la ejecución del proceso productivo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img113.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Seguimiento, control y actualización de la producción
    p.mb-5 La orden de trabajo es el documento que autoriza y orienta la ejecución de una operación específica dentro del proceso productivo. En ella se concreta el trabajo que debe realizarse, la cantidad, las fechas, las especificaciones, los recursos requeridos y los responsables involucrados, cumpliendo la función de traducir el plan general en instrucciones particulares para una orden, lote o referencia determinada.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img114.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La documentación de producción incluye no solo la orden de trabajo, sino también registros complementarios como listas de materiales, hojas de ruta, formatos de control, reportes de avance y evidencias de ejecución. Todo este conjunto documental permite sostener trazabilidad sobre lo que se programó, lo que se hizo y bajo qué condiciones se ejecutó, por lo que resulta esencial para la coordinación, el control y el análisis posterior de la operación.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Propósito y estructura de la orden de trabajo
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Dentro del sistema productivo, la orden de trabajo tiene como propósito principal formalizar la instrucción de producción. A diferencia del plan general, que organiza el conjunto de la operación, la orden de trabajo se enfoca en una ejecución específica, como un lote, una referencia o una actividad puntual. Esto permite que el personal operativo tenga claridad sobre qué debe hacer y bajo qué condiciones debe hacerlo (Chapman, 2006).
    .color___box_1
      .px-5
        p.mb-5 Para cumplir esta función, la orden debe contener información suficiente, precisa y sin ambigüedades, de modo que facilite la ejecución y reduzca el riesgo de errores o interpretaciones inconsistentes entre áreas. A continuación, se presenta la estructura básica que debe contener una orden de trabajo:
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img115.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Identificación de la orden
            p.mb-0.text-center Permite reconocer, rastrear y controlar la orden dentro del sistema.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img116.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Producto o referencia
            p.mb-0.text-center Define qué se va a producir.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img117.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cantidad
            p.mb-0.text-center Establece el volumen de trabajo a ejecutar.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img118.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fechas
            p.mb-0.text-center Determinan el inicio, término o plazo de la ejecución.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img119.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Especificaciones
            p.mb-0.text-center Indican cómo debe realizarse la operación según requisitos técnicos o de calidad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img120.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Centro de trabajo
            p.mb-0.text-center Señala dónde se ejecutará la actividad dentro del proceso productivo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img121.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recursos asignados
            p.mb-0.text-center Define los materiales, equipos y mano de obra necesarios.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img122.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Responsable
            p.mb-0.text-center Indica quién ejecuta o supervisa la operación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Observaciones
            p.mb-0.text-center Incluye instrucciones adicionales o condiciones especiales de ejecución.
        p.mb-5 Cuando esta estructura no se encuentra completa o presenta ambigüedades, la ejecución del proceso queda expuesta a errores, reprocesos o descoordinación entre áreas, afectando la eficiencia y el cumplimiento del programa (Chapman, 2006).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Especificaciones, cantidades y fechas en la orden
    p.mb-5 Las especificaciones técnicas dentro de la orden de trabajo indican cómo debe ejecutarse la operación y qué condiciones debe cumplir el producto o el proceso. Pueden incluir medidas, materiales, secuencias específicas, controles requeridos o criterios de calidad. Estas especificaciones resultan necesarias porque una orden no debe limitarse a indicar “qué producir”, sino también “cómo debe realizarse” para garantizar que el resultado sea conforme (Chapman, 2006).
    .box___style_12.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La cantidad y las fechas también cumplen una función clave. La cantidad define la magnitud del trabajo a ejecutar, mientras que las fechas delimitan el inicio, la finalización o el plazo comprometido. Si una orden presenta una cantidad clara pero no una fecha, se dificulta su priorización; si incluye una fecha pero no una cantidad precisa, se complica la asignación de recursos. Por esta razón, ambos elementos deben estar definidos de manera explícita dentro del documento (Jacobs y Chase, 2022).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img124.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Responsables, recursos y distribución de la orden
    p.mb-5 En la ejecución de la producción, la orden de trabajo debe contener información clara sobre quién ejecuta, quién supervisa y con qué recursos se desarrollará la tarea. Esta precisión permite evitar vacíos de responsabilidad, facilita el seguimiento del avance y asegura la articulación de la orden con el sistema productivo en su conjunto (Jacobs y Chase, 2022).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img125.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de la orden con los materiales, la mano de obra y las máquinas garantiza que la ejecución no se realice de manera aislada, sino alineada con la disponibilidad y la planificación general de los recursos.
    .color___box_1
      .px-5 
        p.mb-5 Asimismo, la distribución de la orden constituye un aspecto clave dentro del proceso. Una vez emitida, debe llegar a todas las áreas y personas involucradas en la ejecución, incluyendo producción, abastecimiento, control de calidad y programación, según corresponda. Si la orden no se distribuye correctamente, pierde su valor como instrumento de coordinación, aun cuando esté bien estructurada. Por esta razón, la emisión y circulación del documento hacen parte integral del proceso productivo (Chapman, 2006). Para organizar los campos necesarios en una orden de trabajo, se  debe tener:
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            p 
            ul.fa-ul.estilo___ul.mb-3
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Número o código de orden]: identifica y permite controlar el documento dentro del sistema.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Producto o referencia]: define el objeto de la producción.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cantidad]: señala el volumen a ejecutar.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fecha de emisión]: formaliza el inicio documental de la orden.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fecha requerida]: delimita el plazo o compromiso de entrega.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Especificaciones]: indican las condiciones técnicas de ejecución.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Recursos asignados]: relacionan materiales, personal y equipos necesarios.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Responsable]: define quién ejecuta o supervisa la operación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Observaciones]: registra instrucciones adicionales o condiciones especiales.
            p.mb-4.mb-lg-0 Esta estructura permite consolidar la orden como un documento completo, capaz de orientar la ejecución sin ambigüedades.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
                img(src='@/assets/curso/temas/img126.png', alt='').m-auto
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Ejemplo práctico de orden de trabajo
    p.mb-5 Supóngase que una empresa debe fabricar 120 unidades de una referencia durante la tercera semana del mes. La orden de trabajo debe indicar el código de la referencia, la cantidad, la fecha requerida, la línea o centro de trabajo asignado, el operario o supervisor responsable y las especificaciones del proceso. Si el producto requiere una revisión de calidad antes del despacho, esta instrucción debe registrarse en el mismo documento o en su anexo correspondiente.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img127.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este caso, la orden actúa como puente entre el plan general y la ejecución real, ya que traduce la programación en una instrucción concreta, medible y trazable. Esto permite a la organización controlar qué se realiza, cuándo se ejecuta y bajo qué condiciones.
</template>

<script>
export default {
  name: 'Tema3',
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
