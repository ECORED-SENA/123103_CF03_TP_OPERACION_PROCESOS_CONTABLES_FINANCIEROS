<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de información y comunicación en la producción
    p.mb-5 A continuación, se presenta un pódcast sobre la gestión de la información en producción, destacando su importancia para coordinar las operaciones, comunicar el estado de los procesos y fortalecer el control del sistema productivo.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.box___style_15(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img128.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Gestión de información y comunicación en la producción"
              :audio="require('@/assets/componentes/audios/podcast_gestion_informacion_comunicacion_produccion.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img129.png" ).m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Sistemas de información para la gestión de producción
    p.mb-5 Un sistema de información para la gestión de producción corresponde al conjunto de procedimientos, registros, medios y herramientas que permiten captar datos del proceso, organizarlos y convertirlos en información útil para la toma de decisiones. En el contexto productivo, estos sistemas facilitan la relación entre órdenes, materiales, operaciones, responsables y resultados, evitando que la información permanezca dispersa y asegurando su articulación con la realidad del proceso. Su valor radica en que contribuyen a reducir la incertidumbre, mejorar la coordinación y apoyar la toma de decisiones en los niveles operativos y de supervisión (Universidad de Valencia, s. f.).
    .box___style_4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img130.png', alt='').m-auto
        .col-xl
          p.mb-0 Llevado a un ejemplo sencillo, si una empresa cuenta con tres órdenes abiertas y solo una máquina disponible para una operación crítica, el sistema de información debe permitir identificar cuál orden tiene prioridad, cuál se encuentra detenida por falta de material, cuál ya inició y cuál está lista para continuar. Si esta información no existe o se encuentra desactualizada, las decisiones dependen de llamadas, registros dispersos o la memoria de los operarios. En cambio, cuando la información está organizada, la producción responde con mayor rapidez y menor nivel de improvisación.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Flujo operacional e integración de la información
    p.mb-5 El flujo operacional representa el recorrido de una orden desde que se libera hasta que se cierra. En ese trayecto, la información también avanza, ya que se registra la orden, se asignan recursos, se reporta el inicio de la operación, se actualiza el avance, se informan incidencias y se documenta el cierre. Por ello, la gestión de información en producción no consiste solo en almacenar datos, sino en asegurar que en cada etapa exista información útil, verificable y oportuna.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img131.png', alt='').m-auto
      .col-xl
        .box___style_10(data-aos="fade-left")
          h5.mb-0 Caso práctico 
          p.mb-0 Supóngase una orden que debe pasar por corte, ensamble e inspección. Al iniciar corte, debe registrarse fecha, hora, cantidad y responsable; al terminar, debe quedar constancia de cuántas unidades avanzan a ensamble. Si durante el ensamble se detiene la orden por falta de material, esa novedad debe quedar visible para programación y abastecimiento. Cuando la información acompaña el recorrido de la orden, la operación gana trazabilidad; cuando no lo hace, aparecen pérdidas de control (Gómez, 2021).
    .color___box_1
      .px-5
        p.mb-5 En el seguimiento operativo de una orden de trabajo, es necesario registrar su evolución a lo largo del proceso productivo, lo que permite controlar su estado, identificar desviaciones y garantizar la trazabilidad de la ejecución.
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Liberación")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img132.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Liberación
                p.mb-0 Registra código, cantidad, fecha, responsable y centro de trabajo. En la operación, permite autorizar y ubicar la orden dentro del sistema productivo.
          .py-3.py-md-4(titulo="Inicio")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img133.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Inicio
                p.mb-0 Incluye la hora de inicio, el operario y el recurso asignado. En la operación, confirma el arranque de la ejecución.
          .py-3.py-md-4(titulo="Avance")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img134.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Avance
                p.mb-0 Contiene la cantidad parcial, el tiempo consumido y observaciones. En la operación, permite realizar seguimiento al progreso.
          .py-3.py-md-4(titulo="Incidencia")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img135.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Incidencia
                p.mb-0 Registra el tipo de novedad, la hora, la causa y el responsable de atención. En la operación, facilita la corrección y el escalamiento de situaciones.
          .py-3.py-md-4(titulo="Terminación")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img136.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Terminación
                p.mb-0 Incluye la cantidad terminada, la hora de cierre y el resultado. En la operación, permite actualizar el estado de la ejecución.
          .py-3.py-md-4(titulo="Cierre final")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img137.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Cierre final
                p.mb-0 Consolida el estado total de la orden y el reporte final. En la operación, apoya el control y la trazabilidad del proceso.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Puntos de control, inspecciones y transferencias
    p.mb-5 Los puntos de control son momentos del proceso en los que la organización verifica si la orden puede continuar y si la información registrada sigue siendo confiable. Estos puntos pueden ubicarse al inicio de una orden, al finalizar una operación importante, antes de transferir un lote a otra área o antes del cierre, con el objetivo de evitar que un error avance por el sistema sin ser detectado (Pisa, 2013). En la gestión de producción, controlar también implica revisar las variables que afectan el rendimiento del proceso y actuar antes de que se conviertan en un problema mayor.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_10.fit___box_10(data-aos="fade-right")
          h5.mb-0  Ejemplo
          p.mb-0 Si un lote sale de ensamble con 100 unidades y en inspección solo aparecen 96, debe existir un punto de control que obligue a registrar qué ocurrió con los 4 restantes. Pudo tratarse de descarte, reproceso o error de conteo, pero si no se documenta, el sistema pierde confiabilidad. Lo mismo ocurre con una transferencia entre áreas, ya que mover un producto físicamente no es suficiente; debe registrarse qué se entrega, en qué estado y a quién se transfiere (Gómez, 2021).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img138.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Registros, alertas y trazabilidad
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Los registros permiten conservar la memoria del proceso, ya que gracias a ellos se puede saber qué ocurrió, en qué momento, con qué resultado y bajo la intervención de quién. En producción, estos registros suelen incluir cantidades ejecutadas, tiempos reales, novedades, paros, materiales consumidos y estados de las órdenes, constituyendo la base para el control, el análisis posterior y la mejora del proceso (Gómez, 2021).
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        p Su utilidad radica en que convierten los datos en información operativa, permitiendo identificar patrones, evaluar desempeño y tomar decisiones correctivas con mayor fundamento.
        .box___style_10(data-aos="fade-right")
          h5.mb-0  Ejemplo
          p.mb-0 Si una máquina presenta tres paros en el mismo turno y el sistema solo registra “orden incompleta”, la información es insuficiente. Sin embargo, si el registro incluye la hora del paro, su duración, la causa y el efecto sobre la orden, es posible detectar recurrencia, analizar el impacto y tomar decisiones correctivas, lo que convierte el dato en información útil.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img139.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Procedimientos de comunicación de órdenes
    p.mb-5 Llega a quienes deben ejecutarlo, supervisarlo o apoyarlo. En un entorno productivo, esta comunicación debe ser clara, oportuna y verificable, ya que no basta con dar la orden, sino que es necesario que el contenido llegue completo, que el responsable lo entienda y que exista evidencia o confirmación de la instrucción cuando el proceso lo requiera. La distribución y la comunicación de la información son funciones esenciales de los sistemas de información organizacionales (Universidad de Valencia, s. f.).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img140.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, una orden mal comunicada genera errores tan graves como una orden mal calculada, ya que si se informa la cantidad pero no la prioridad, si se indica el producto pero no la fecha, o si se comunica una modificación sin verificar que el responsable la recibió, la ejecución queda expuesta a interpretaciones. Por ello, los procedimientos de comunicación deben definir qué se informa, por qué medio, a quién, en qué momento y cómo se confirma la recepción.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Canales de comunicación de órdenes
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 En producción suelen coexistir varios canales de comunicación, como órdenes escritas o digitales, reuniones breves de arranque, tableros visuales, reportes del sistema y comunicación verbal complementaria, cada uno con una función específica dentro de la operación.
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img16.svg', alt='').m-auto
        .box___style_1(data-aos="zoom-in")
          p.mb-0 El documento escrito permite dejar evidencia, la reunión facilita aclarar prioridades, el tablero hace visible el trabajo y el mensaje verbal ayuda a resolver dudas inmediatas, por lo que resulta importante no depender de un solo canal cuando la operación exige coordinación entre varias personas o áreas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img141.png', alt='').m-auto
    p.mb-5 Un ejemplo común se presenta al inicio de turno, cuando el supervisor revisa con el equipo las órdenes del día, confirma en el sistema qué materiales están liberados y mantiene visible en un tablero la secuencia de trabajo. Si durante la jornada una orden cambia de prioridad, el sistema registra la actualización, el tablero se modifica y el supervisor lo confirma verbalmente, fortaleciendo la comunicación y reduciendo el riesgo de errores (Gómez, 2021). Para sintetizar, se presentan los principales medios de comunicación utilizados en la operación, destacando su aporte al control del proceso y sus posibles limitaciones en la práctica.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img142.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Orden escrita o digital").ajuste-cajaAcordion
            p.mb-3 Permite dejar trazabilidad y detalle de la información. Como limitación, puede no resolver dudas inmediatas durante la ejecución.
          .row(titulo="Reunión diaria corta").ajuste-cajaAcordion
            p.mb-3 Facilita alinear prioridades y coordinar el turno. Sin embargo, puede perder evidencia si no se registra adecuadamente.
          .row(titulo="Tablero visual").ajuste-cajaAcordion
            p.mb-3 Permite hacer visible la secuencia de trabajo y el avance. Como limitación, puede quedar desactualizado si no se mantiene.
          .row(titulo="Sistema de información").ajuste-cajaAcordion
            p.mb-3 Permite actualizar estados, cambios y registros del proceso. Requiere disciplina en el registro para asegurar confiabilidad.
          .row(titulo="Comunicación verbal").ajuste-cajaAcordion
            p.mb-3 Facilita la resolución rápida de dudas operativas. Puede generar ambigüedad si no se respalda en otros medios.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Claridad, confirmación y escalamiento
    p.mb-5 En los procesos productivos, la correcta ejecución de una orden no depende únicamente de su emisión, sino de la calidad de la comunicación que la acompaña. Para ello, es fundamental garantizar tres elementos: claridad, confirmación y escalamiento, los cuales permiten reducir errores, mejorar la coordinación y asegurar la continuidad de la operación. A continuación, se explica el papel de cada uno dentro del proceso:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Claridad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img143.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Claridad
            p.mb-0 Se refiere a que la orden contenga toda la información necesaria para su ejecución, como qué se debe hacer, cuánto, para cuándo, con qué prioridad y bajo qué condiciones. Cuando la orden no es clara, el personal operativo debe interpretar o asumir información, lo que incrementa el riesgo de errores y reprocesos.
      .py-3.py-md-4(titulo="Confirmación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img144.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Confirmación
            p.mb-0 Consiste en verificar que la orden ha sido comprendida y puede ejecutarse correctamente. Puede realizarse mediante firma, validación en sistema, confirmación en reuniones o comunicación verbal. Su función es asegurar alineación entre quien emite la orden y quien la ejecuta.
      .py-3.py-md-4(titulo="Escalamiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img145.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Escalamiento
            p.mb-0 Se presenta cuando una situación supera la capacidad de decisión del nivel operativo, como faltantes de materiales, inconsistencias técnicas o conflictos de prioridad. En estos casos, el proceso debe definir a quién informar y cómo gestionar la novedad para evitar retrasos.
    p.mb-5 Estos tres elementos funcionan de manera integrada dentro de la operación. La claridad evita ambigüedades desde el inicio, la confirmación asegura que la instrucción fue comprendida correctamente y el escalamiento permite resolver oportunamente situaciones que no pueden atenderse en el nivel operativo.
    .row.justify-content-center.mb-5
      .col-xl-9
        .box___style_10(data-aos="flip-up")
          h5.mb-0 Ejemplo 
          p.mb-0 Si una orden llega al operario con cantidad y fecha, pero sin material asignado, el responsable no debería iniciar por ensayo y error, sino que debe existir una regla de escalamiento que indique si debe informar a almacén, a programación o a supervisión, y en qué momento, evitando tiempos muertos y reduciendo decisiones improvisadas (Vargas, 2019).
    .color___box_1
      .px-5
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Comunicación de novedades e incidencias
        p.mb-5 La comunicación no termina cuando la orden se emite, ya que durante la ejecución surgen novedades como faltantes, reprocesos, pausas, cambios de prioridad o diferencias de cantidad, las cuales deben informarse de manera oportuna. Si la novedad no se comunica, la programación continúa operando sobre una realidad que ya cambió, generando no solo un problema operativo, sino también informativo (Gómez, 2021).
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img146.png', alt='').m-auto
          .col-xl
            .box___style_10.fit___box_10(data-aos="fade-left")
              h5.mb-0 Ejemplo 
              p.mb-0 Si una orden se detiene por falta de material a las 10:00 a. m. y la incidencia se reporta a las 2:00 p. m., se pierden cuatro horas de reacción posible. En cambio, si se informa en el momento en que ocurre, programación puede liberar otra orden, compras puede acelerar la reposición o supervisión puede reasignar el recurso, evidenciando que la oportunidad de la comunicación influye directamente en el desempeño del sistema.
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Técnicas de monitoreo y seguimiento de órdenes
        p.mb-5 El monitoreo de órdenes consiste en observar, registrar y analizar el avance real de cada orden frente a lo programado, con el propósito de responder preguntas clave como en qué estado está la orden, cuánto lleva ejecutado, qué incidencias ha tenido, si va a tiempo y qué acción debe tomarse. En la gestión de producción, controlar el proceso implica seguir las variables que afectan el rendimiento y actuar sobre ellas (Pisa, 2013).
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img147.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Desde un enfoque práctico, el seguimiento no se limita a revisar resultados al final del día, sino que implica observar el avance durante la ejecución, apoyándose en actualización de estados, reportes de avance, tableros visuales, cortes parciales y reuniones cortas de seguimiento. Cuanto más cercana esté la información al momento real del proceso, más útil será para corregir desviaciones (Gómez, 2021).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Actualización de estados de las órdenes
    p.mb-5 Actualizar estados significa registrar de forma ordenada si una orden está liberada, en proceso, detenida, terminada o cerrada, lo que permite que todos los responsables manejen una misma lectura del proceso y evita que el sistema refleje una realidad distinta a la del piso de trabajo. La actualización oportuna es una condición básica para que el seguimiento tenga sentido (Gómez, 2021).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_10.fit___box_10(data-aos="fade-right")
          p.mb-0 #[b Un ejemplo lo evidencia con claridad]: si una orden aparece “en proceso” en el sistema, pero lleva una hora detenida por una avería que no se registró, la programación y la supervisión tomarán decisiones equivocadas. En cambio, si el estado cambia de inmediato a “detenida”, se cuenta con un insumo confiable para decidir si se espera, se reprograma o se reasigna el recurso.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img148.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Reportes de avance, tableros e indicadores básicos
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img3.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Los reportes de avance consolidan información sobre cantidades ejecutadas, tiempos consumidos, incidencias y cumplimiento parcial de las órdenes, mientras que los tableros visuales permiten que esta información esté disponible para el equipo y facilitan identificar con rapidez qué está atrasado, qué está detenido y qué ya terminó. Por su parte, los indicadores traducen el seguimiento en medidas que facilitan la interpretación y la comparación del desempeño (Gómez, 2021).
    .color___box_1
      .px-5
        p.mb-5 En una operación cotidiana, el supervisor puede revisar al mediodía cuántas órdenes se liberaron, cuántas están en proceso, cuántas ya terminaron y cuáles presentan atraso, y esta revisión, cuando se apoya en datos confiables, permite actuar antes de que el problema se vuelva más grande, evidenciando que el valor del monitoreo está en anticipar y no solo en registrar después.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Indicadores básicos para el seguimiento de órdenes
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Indicador
                    th.ajuste-border-tabla.texto-left Fórmula básica
                    th.texto-left Utilidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Avance de la orden
                    td.ajuste-border-tabla.texto-left Cantidad ejecutada / cantidad programada x 100
                    td.texto-left Muestra el progreso real
                  tr
                    td.ajuste-border-tabla.texto-left Cumplimiento de órdenes
                    td.ajuste-border-tabla.texto-left Órdenes terminadas en plazo / órdenes programadas x 100
                    td.texto-left Evalúa cumplimiento del programa
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Órdenes detenidas
                    td.ajuste-border-tabla.texto-left Órdenes detenidas / órdenes abiertas x 100
                    td.texto-left Señala afectación por incidencias
                  tr
                    td.ajuste-border-tabla.texto-left Tiempo de respuesta a incidencias
                    td.ajuste-border-tabla.texto-left Tiempo total de atención / número de incidencias
                    td.texto-left Mide agilidad de reacción
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cierre oportuno
                    td.ajuste-border-tabla.texto-left Órdenes cerradas a tiempo / órdenes cerradas x 100
                    td.texto-left Mide puntualidad de terminación
        .box___style_5.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img17.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Seguimiento de incidencias y acciones correctivas
              p.mb-0 Se invita a leer el documento, donde se aborda la importancia de registrar, comunicar y dar seguimiento a las incidencias dentro de un proceso productivo, así como la aplicación de acciones correctivas para evitar su repetición.
            .col-xl-2
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Seguimiento_incidencias_acciones_correctivas_Instruccional.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema4',
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
