<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Programación y secuenciación de la producción 
    p.mb-5 Una vez reconocida la demanda, la capacidad y los parámetros técnicos del proceso, la organización debe definir cómo organizará las actividades, qué método utilizará para programarlas, qué ruta seguirá cada orden y cómo estructurará esta información en un cronograma de trabajo. En este contexto, la programación de la producción responde principalmente a tres preguntas: #[b qué se realizará primero, por dónde transitará cada orden y en qué momento debe ejecutarse cada actividad] (Rodríguez, M. Eliana, 2010).
    .box___style_4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img62.png', alt='').m-auto
        .col-xl
          p.mb-0 Su relevancia radica en que una operación no solo requiere determinar cuánto producir, sino también cómo organizar la secuencia de trabajo para evitar tiempos de espera, reducir cambios innecesarios, asignar de manera adecuada los recursos y cumplir con las fechas establecidas. La literatura sobre programación y secuenciación señala que estas decisiones inciden directamente en la utilización de los centros de trabajo, en el flujo de los pedidos y en el desempeño general del sistema productivo.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Métodos de programación de la producción 
    p.mb-5 En la gestión de operaciones, los métodos de programación de la producción permiten estructurar la ejecución del trabajo, definiendo cómo se organizan las actividades en el tiempo y cómo se asignan los recursos disponibles. En términos prácticos, estos métodos facilitan el paso de una intención general de producir hacia una lógica operativa concreta, en la cual se establecen criterios claros para la toma de decisiones:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img63.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Qué se procesa primero. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img63.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Qué actividades pueden desarrollarse en paralelo. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img63.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Qué tareas dependen de la finalización de otras. 
    p.mb-5 Su función principal es reducir la improvisación y proporcionar orden y coherencia a la ejecución del sistema productivo (Rodríguez, 2010). Para comprender mejor su aplicación, es conveniente agrupar estos métodos según su propósito dentro de la programación:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reglas de prioridad
                p.mb-0 Ayudan a decidir el orden de atención de las órdenes en un recurso determinado, especialmente en entornos donde existen múltiples trabajos en espera.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Métodos de actividades interdependientes
                p.mb-0 Permiten representar las relaciones entre tareas, identificar dependencias y calcular tiempos de ejecución dentro de un conjunto de actividades.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Métodos basados en materiales o flujo
                p.mb-0 Apoyan la programación a partir de los requerimientos de materiales y la continuidad del proceso, asegurando la disponibilidad y sincronización de los recursos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/temas/img67.png', alt='').m-auto
      .col-xl
        .box___style_1.mb-3(data-aos="zoom-in")
          p.mb-0 Esta clasificación permite comprender que no todos los métodos responden al mismo tipo de problema operativo. Algunos se orientan a priorizar pedidos en centros de trabajo, otros se enfocan en analizar actividades interdependientes y calcular tiempos, mientras que otros estructuran la programación a partir del flujo de materiales o principios de continuidad.
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img16.svg', alt='').m-auto
          .col-xl
            p.mb-0 En este sentido, agrupar los métodos según su propósito facilita su selección y aplicación adecuada dentro del sistema productivo, evitando tratarlos como herramientas aisladas y promoviendo una visión más integral de la programación de la producción. 
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Reglas de prioridad y secuenciación simple
    .box___style_12.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Las reglas de prioridad se utilizan cuando varias órdenes compiten por un mismo recurso y es necesario definir cuál se atiende primero. Una de las más conocidas es FIFO (#[i First In, First Out] primero en entrar, primero en salir), que consiste en procesar primero la orden que llegó en primer lugar. Esta regla es sencilla, fácil de aplicar y útil cuando se busca conservar el orden de llegada; sin embargo, no siempre resulta la más conveniente si existen pedidos urgentes, tiempos de proceso muy distintos o restricciones de entrega. En producción, este tipo de reglas se emplea para organizar las colas de trabajo y facilitar la secuenciación diaria.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img68.png', alt='').m-auto
    p.mb-5 Además de FIFO, resulta pertinente considerar otras reglas básicas de forma comparativa, como procesar primero la orden con menor tiempo de proceso o priorizar la fecha de entrega más próxima. Lo relevante para el aprendiz no es memorizar múltiples siglas, sino comprender que cada regla de prioridad responde a un criterio distinto y puede generar efectos diferentes en los tiempos de espera, el cumplimiento de entregas o la utilización del recurso. La tabla presenta cómo se organiza una cola de trabajo cuando se aplica la regla FIFO.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img69.png', alt='').m-auto
      .col-xl
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Ejemplo de secuenciación de órdenes con regla FIFO
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Orden
                th.ajuste-border-tabla.texto-left Hora de llegada
                th.ajuste-border-tabla.texto-left Tiempo de proceso (min)
                th.texto-left Secuencia FIFO
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b A]
                td.ajuste-border-tabla.texto-left 8:00
                td.ajuste-border-tabla.texto-left 20
                td.texto-left 1
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b B]
                td.ajuste-border-tabla.texto-left 8:10
                td.ajuste-border-tabla.texto-left 15
                td.texto-left 2
              tr
                td.ajuste-border-tabla.texto-left #[b C]
                td.ajuste-border-tabla.texto-left 8:15
                td.ajuste-border-tabla.texto-left 30
                td.texto-left 3
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b D]
                td.ajuste-border-tabla.texto-left 8:20
                td.ajuste-border-tabla.texto-left 10
                td.texto-left 4
        .box___style_10(data-aos="fade-left")
          h5 Ejemplo práctico 
          p.mb-0 Si un centro de trabajo recibe cuatro órdenes entre las 8:00 a. m. y las 8:20 a. m., y decide aplicar FIFO, la secuencia será A-B-C-D, aunque la orden D tarde menos tiempo. Esta decisión puede ser apropiada si la política interna privilegia el orden de llegada, pero podría no ser la mejor si la prioridad del sistema es reducir tiempo de espera total o cumplir entregas urgentes.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Programación por redes: CPM y PERT
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 En contextos donde las actividades presentan relaciones de precedencia y no pueden organizarse mediante secuencias simples, resulta necesario emplear métodos de programación por redes. Entre los más utilizados se encuentran CPM (#[i Critical Path Method]) y PERT (#[i Program Evaluation and Review Technique]), los cuales permiten estructurar, analizar y controlar proyectos con múltiples actividades interdependientes.
    p.mb-5 Estos métodos representan las actividades, sus dependencias y sus duraciones, facilitando la identificación de la secuencia de tareas que determina la duración total del programa. Para comprender sus diferencias y aplicaciones, se presenta la siguiente comparación:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 CPM (#[i Critical Path Method])
        p.mb-0 Se utiliza cuando las duraciones de las actividades son conocidas o relativamente estables. Permite identificar la ruta crítica, es decir, la secuencia de actividades con mayor duración acumulada, que define el tiempo mínimo de finalización del proyecto. Se enfoca en el control del plazo.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img36.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 PERT (#[i Program Evaluation and Review Technique])
        p.mb-0 Se emplea cuando existe incertidumbre en las duraciones. Utiliza estimaciones probabilísticas a partir de tres tiempos: optimista, más probable y pesimista, con el fin de calcular un tiempo esperado para cada actividad. Facilita la programación en entornos variables.
    p.mb-5 Esta distinción permite entender que CPM se orienta principalmente al control del tiempo bajo condiciones relativamente estables, mientras que PERT introduce un enfoque probabilístico que permite trabajar con incertidumbre. En términos operativos, ambos métodos son complementarios. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="flip-up")
          h5.mb-0 Ejemplo 
          p En un proceso que incluye actividades como corte, ensamble, acabado e inspección, CPM permite identificar qué secuencia determina la duración total del proceso, mientras que PERT ayuda a estimar la duración de cada actividad cuando no se dispone de datos completamente definidos. A continuación, se presentan las principales expresiones utilizadas en estos métodos:
          h5.text-center Tiempo esperado en PERT:
          .row.justify-content-center.text-center.mb-2
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 Tiempo esperado = (tiempo optimista + 4 x tiempo más probable + tiempo pesimista) / 6
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 te = (to + 4tm + tp) / 6
          p.mb-0 Dónde:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | te = tiempo esperado
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | to = tiempo optimista
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | tm = tiempo más probable
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | tp = tiempo pesimista
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Holgura:]
                p.mb-0 H = IT - ITp
          p.mb-0 Dónde:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | H = holgura
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | IT = inicio tardío
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ITp = inicio temprano
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Ruta crítica:]
                p.mb-0 Ruta crítica = secuencia con mayor duración acumulada y holgura igual a cero.
          h5.mb-0 Ejemplo práctico 
          p Si una actividad tiene un tiempo optimista de 2 días, un tiempo más probable de 4 días y un tiempo pesimista de 8 días, su tiempo esperado sería:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 te = (2 + 4x4 + 8) / 6 = 26 / 6 = 4,33 días
          p.mb-0 Este valor ayuda a programar la actividad cuando no se tiene una duración completamente fija. 
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Programación basada en requerimientos y flujo
    p.mb-0 En producción también se utilizan enfoques que programan a partir de materiales disponibles, necesidades del cliente o flujo continuo del proceso. En ese grupo se ubican sistemas basados en requerimientos de materiales y enfoques de flujo como #[i Just in Time] o prácticas lean. La idea común es que la programación no se haga de manera aislada, sino coordinada con abastecimiento, tiempos de reposición, secuencia operativa y reducción de desperdicios.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    .color___box_1
      .px-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Secuencias y rutas de producción  
        p.mb-5 En la programación de la producción, comprender la diferencia entre secuencia y ruta permite estructurar adecuadamente el flujo de trabajo y evitar errores en la ejecución de las operaciones. La #[b secuencia de producción] corresponde al orden en que se ejecutan las actividades, mientras que la #[b ruta de producción] indica el recorrido que sigue un producto, orden o lote a través de los diferentes puestos, máquinas o centros de trabajo. Ambos conceptos están estrechamente relacionados: la secuencia responde al “en qué orden” y la ruta al “por dónde”. Para precisar esta relación:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img162.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Secuencia
                p.mb-0.text-center Define el orden de ejecución de las actividades dentro del proceso productivo.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img163.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Ruta
                p.mb-0.text-center Define el recorrido que sigue el producto o la orden a través de los distintos centros de trabajo.
        .box___style_9.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 Esta distinción resulta clave porque una misma familia de productos puede compartir una ruta general, pero requerir secuencias distintas según factores como la prioridad de los pedidos, el tamaño del lote o las condiciones técnicas del proceso.
    p.mb-5 Trabajar de manera integrada las rutas y las secuencias permite comprender el proceso en su totalidad y reducir errores operativos, tales como enviar un lote a un centro de trabajo que no corresponde o programar actividades sin respetar sus relaciones de precedencia. Además, su análisis facilita:
    .row.justify-content-center.mb-5
      .col-xl-11
        .row.justify-content-center
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img71.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Identificar operaciones que pueden ejecutarse en paralelo. 
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img71.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Reconocer actividades que dependen de otras. 
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img71.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Detectar puntos donde los cambios de referencia pueden afectar el flujo. 
    p.mb-5 En este sentido, la correcta definición de rutas y secuencias contribuye a mejorar la coordinación de los recursos, la eficiencia del proceso y la coherencia en la programación de la producción.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Definición de la ruta de producción
    p.mb-5 La ruta de producción es la descripción ordenada de las operaciones por las que debe pasar un producto desde el inicio hasta su terminación. Incluye normalmente los centros de trabajo involucrados, la secuencia de operaciones, los tiempos de referencia y, en algunos casos, las herramientas o controles requeridos.
    .color___box_1
      .px-5
        p Su función es servir como guía para la programación, el seguimiento y la trazabilidad del proceso.
        p.mb-5 Cuando la ruta está bien definida, la programación se vuelve más confiable porque cada orden tiene claro su recorrido y sus dependencias. En cambio, cuando la ruta no está documentada o cambia constantemente sin control, se generan demoras, retrabajos, pérdidas de información y dificultades para calcular tiempos y cargas de trabajo. A continuación, se presenta un ejemplo básico de ruta de producción:
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Ejemplo básico de ruta de producción
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Operación
                    th.ajuste-border-tabla.texto-left Centro de trabajo
                    th.ajuste-border-tabla.texto-left Tiempo estimado
                    th.texto-left Precedencia
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Corte
                    td.ajuste-border-tabla.texto-left Mesa de corte
                    td.ajuste-border-tabla.texto-left 12 min
                    td.texto-left Inicio
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Ensamble
                    td.ajuste-border-tabla.texto-left Estación 1
                    td.ajuste-border-tabla.texto-left 18 min
                    td.texto-left Después de corte
                  tr
                    td.ajuste-border-tabla.texto-left Acabado
                    td.ajuste-border-tabla.texto-left Estación 2
                    td.ajuste-border-tabla.texto-left 10 min
                    td.texto-left Después de ensamble
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Inspección
                    td.ajuste-border-tabla.texto-left Control de calidad
                    td.ajuste-border-tabla.texto-left 5 min
                    td.texto-left Después de acabado
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Dependencias, precedencias y paralelización
        p.mb-5 Las dependencias indican qué actividad requiere que otra termine, comience o avance para poder ejecutarse. En una secuencia simple, la relación más común es fin a inicio: una tarea no puede comenzar hasta que la anterior finaliza. No obstante, también pueden existir actividades paralelas, es decir, operaciones que pueden desarrollarse simultáneamente sin afectar el orden lógico del proceso. Este análisis resulta relevante porque no todas las secuencias deben ser lineales.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La paralelización, cuando se aplica de manera adecuada, contribuye a reducir la duración total del programa, siempre que existan recursos disponibles y que las actividades no presenten dependencia directa entre sí. Por ejemplo, mientras una orden atraviesa un proceso mecánico, puede adelantarse la preparación de empaques o la documentación de despacho. Esto favorece el flujo y disminuye tiempos improductivos, aunque requiere coordinación entre áreas y una adecuada gestión de los recursos.
        .box___style_10(data-aos="flip-up")
          h5.mb-0 Ejemplo práctico 
          p.mb-0 Si una orden incluye actividades de corte, ensamble y embalaje, y el embalaje solo requiere que el producto haya sido inspeccionado, entonces el corte y la preparación del embalaje pueden ejecutarse en paralelo, siempre que no utilicen el mismo recurso. Esta organización reduce la duración total del proceso en comparación con una secuencia completamente lineal.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img72.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Minimización de cambios y eficiencia del flujo
    p.mb-5 Una buena secuenciación busca reducir la frecuencia de cambios de referencia, herramientas o configuración, porque cada cambio consume tiempo de preparación y reduce la capacidad útil del sistema. Por esta razón, al ordenar trabajos, muchas empresas agrupan órdenes semejantes para disminuir tiempos de setup, aprovechar mejor las condiciones del proceso y reducir interrupciones en la operación, lo que contribuye a mantener una mayor continuidad en la producción. Para sintetizar este principio, se presenta la siguiente relación:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Alta frecuencia de cambios
        p.mb-0 Aumenta tiempos de preparación y reduce capacidad útil.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img36.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Agrupación de órdenes similares
        p.mb-0 Disminuye #[i setups] y mejora continuidad del proceso.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img38.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 En consecuencia, la secuenciación no solo define el orden de las actividades, sino que también influye directamente en el uso eficiente de los recursos y en la estabilidad del flujo productivo.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Estructura de cronogramas de producción 
    p.mb-5 El cronograma de producción es la representación temporal de las actividades, órdenes o lotes que deben ejecutarse dentro de un periodo. Su valor principal es que permite ver de manera integrada qué se hará, cuándo empezará, cuándo terminará, quién es responsable y qué dependencias existen entre tareas, convirtiendo la programación en una herramienta visible de coordinación y seguimiento (Martins, 2026).
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img73.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto productivo, un cronograma no es solo una lista de fechas; es una forma de vincular tareas, tiempos, recursos y hitos. Por ello, debe construirse con suficiente detalle para orientar la ejecución, pero sin perder claridad. Cuando el cronograma está bien estructurado, facilita la comunicación, el control del avance y la actualización de cambios frente a la realidad operativa (Martins, 2026).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Elementos básicos del cronograma
    .box___style_13.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Un cronograma de producción suele incluir actividades u órdenes, fecha de inicio, fecha de término, duración, responsable, recurso asignado, dependencias e hitos principales. Estos elementos permiten relacionar el qué, el cuándo y el con quién de la operación, y en herramientas como el diagrama de #[i Gantt] se representan mediante barras horizontales que indican la duración y la posición temporal de cada tarea (Martins, 2026).
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
    p.mb-5 La claridad de estos elementos es fundamental porque el cronograma cumple una función de comunicación. Si no están bien definidos los responsables, los plazos o las dependencias, el cronograma pierde utilidad como guía de trabajo y se convierte en un cuadro estático, por lo que su elaboración debe mantener coherencia con la ruta de producción, los recursos disponibles y las prioridades del programa.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img75.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Actividad u orden
                p.mb-0.text-center Define el trabajo a ejecutar.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img76.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fecha de inicio
                p.mb-0.text-center Indica el momento previsto de arranque.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img77.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fecha de término
                p.mb-0.text-center Indica el momento previsto de finalización.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Duración
                p.mb-0.text-center Muestra el tiempo programado de la tarea.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img79.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Responsable
                p.mb-0.text-center Identifica quién ejecuta o supervisa.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Recurso asignado
                p.mb-0.text-center Relaciona la actividad con máquina, persona o área.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Dependencia
                p.mb-0.text-center Señala relación con tareas anteriores o posteriores.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Hito
                p.mb-0.text-center Marca eventos relevantes del programa.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Diagrama de #[i Gantt] básico
    .box___style_12.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 En la programación de la producción, el #[b diagrama de #[i Gantt]] constituye una herramienta fundamental para organizar y comunicar la ejecución de las actividades a lo largo del tiempo. Este diagrama permite representar tareas, duración, hitos y dependencias dentro de una línea temporal, facilitando la comprensión de cómo se distribuyen las actividades y cómo se articulan entre sí. Por esta razón, resulta especialmente útil para comunicar el programa de trabajo a los responsables operativos y a las áreas de apoyo (Martins, 2026).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img83.png', alt='').m-auto
    p.mb-5 En entornos productivos, el #[i Gantt] puede emplearse para programar órdenes, operaciones o etapas del proceso. Aunque no sustituye herramientas más detalladas, contribuye a estructurar el plan general, identificar traslapes, detectar retrasos y reconocer dependencias mal definidas. Además, su actualización permite contrastar lo programado con lo ejecutado, fortaleciendo el seguimiento del avance del proceso. Para comprender su aplicación operativa, se presentan las principales relaciones utilizadas en su gestión:
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="flip-up")
          h5 Fecha de terminación:
          .row.justify-content-center.text-center.mb-2
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 FT = FI + D
          p.mb-0 Dónde:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | FT = fecha o momento de terminación
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | FI = fecha o momento de inicio
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | D = duración
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Avance porcentual:]
                p.mb-0 Avance % = (trabajo ejecutado / trabajo programado) × 100
          h5 Cumplimiento del cronograma:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 Cumplimiento % = (actividades terminadas en plazo / total de actividades programadas) × 100
          h5.mb-0 Ejemplo práctico 
          p.mb-0 Si una actividad inicia el día 3 y tiene duración de 4 días, su fecha de terminación prevista será el día 7, si se trabaja con conteo continuo del periodo. Si al revisar el cronograma se observa que solo se completó el 50 % del trabajo previsto para esa actividad, el responsable deberá ajustar recursos, tiempos o secuencia para evitar que el retraso afecte las siguientes tareas.
    .color___box_1
      .px-5
        p.mb-5 La siguiente figura presenta un ejemplo de cronograma organizado mediante un diagrama de #[i Gantt], en el que las actividades se distribuyen a lo largo del tiempo según su inicio, duración y coincidencia con otras tareas. Este tipo de representación facilita la comprensión de la secuencia de trabajo, la programación temporal de las actividades y el seguimiento del avance dentro del proceso productivo.
        .row.justify-content-center.mb-5
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Ejemplo de cronograma de producción mediante diagrama de #[i Gantt]
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img164.png', alt='Diagrama de Gantt con cronograma anual de febrero a diciembre que incluye fases de proyecto como investigación, clientes potenciales, lluvia de ideas, bocetos, conceptualización, desarrollo, prototipado, testeo, replanteamiento, planes técnicos, fabricación y embalaje, representadas con barras de colores a lo largo de los meses. ').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Monitoreo y actualización del cronograma
        p.mb-5 Un cronograma útil no finaliza en su diseño; requiere revisión y actualización durante la ejecución. El seguimiento permite contrastar las fechas planificadas con el avance real, identificar desviaciones y tomar decisiones de ajuste. En producción, esto resulta clave, ya que una demora en una actividad puede impactar recursos compartidos, órdenes posteriores o fechas de entrega comprometidas.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img84.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La actualización del cronograma debe sustentarse en información confiable: actividades finalizadas, tiempos reales, novedades del proceso, cambios en prioridades y disponibilidad de recursos. De este modo, el cronograma deja de ser una proyección inicial y se convierte en un instrumento de control y comunicación que contribuye a sostener la operación.
    .fit___width_final
      .color___box_2
        .px-5 
          p.mb-5 A continuación, se presenta la relación lógica entre la identificación de las actividades de producción, el orden en que deben ejecutarse, el recorrido que sigue la orden a través de los distintos centros de trabajo y su representación en un cronograma. Esta articulación permite comprender que la programación de la producción no se limita a establecer fechas, sino que se fundamenta en el análisis del proceso, sus dependencias y la organización temporal de las tareas.
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Primer paso
                    p.mb-0 Orden o requerimiento de producción.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img86.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img87.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Segundo paso
                    p.mb-0 Definición de actividades.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Tercer paso
                    p.mb-0 Secuencia de operaciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img88.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img89.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Cuarto paso
                    p.mb-0 Ruta de producción por centros de trabajo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Quinto paso
                    p.mb-0 Asignación de tiempos y responsables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img90.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img91.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Sexto paso
                    p.mb-0 Elaboración del cronograma.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Séptimo paso
                    p.mb-0 Seguimiento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img92.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img93.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Octavo paso
                    p.mb-0 Control de la ejecución.
          br          
</template>

<script>
export default {
  name: 'Tema2',
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
