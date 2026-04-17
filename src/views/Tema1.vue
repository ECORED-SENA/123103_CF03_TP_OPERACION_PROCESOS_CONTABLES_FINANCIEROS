<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos para la planeación de la producción 
    p.mb-3 La planeación es el proceso mediante el cual se definen de manera anticipada las acciones necesarias para alcanzar un objetivo, considerando los recursos disponibles, las condiciones del entorno y las restricciones existentes. En el contexto de la producción, la planeación no se limita a establecer fechas o repartir tareas. Antes de programar, es necesario interpretar:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Qué se necesita atender. 
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Con qué capacidad se cuenta. 
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Qué recursos están realmente disponibles. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Bajo qué condiciones técnicas funciona el proceso. 
        .box___style_1.fit___box_1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Por eso se habla de fundamentos, porque aquí se estudian los conceptos y criterios que sostienen todas las decisiones posteriores sobre programación, asignación de recursos, secuenciación y control. La bibliografía clásica de administración de operaciones y planeación de la producción coincide en ubicar, al inicio del proceso formativo, temas como pronóstico, capacidad, productos y procesos, programación y control de la producción (Planificación y control de la producción, 2006). 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img1.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/temas/img2.png', alt='').m-auto
      .col-xl
        p Aquí no solo se estudian conceptos, sino que se aprende a leer la realidad operativa de una organización: cuánto puede producir, qué la restringe, qué tiempos debe considerar, qué margen de respuesta tiene y qué información necesita para tomar decisiones coherentes. La formación en operaciones y en gestión de materiales presenta estos contenidos como el punto de partida para comprender la planeación, la programación maestra, la gestión de capacidad y el control de la actividad productiva (Planificación y control de la producción, 2006). Su importancia está en la aplicabilidad. Cuando se dominan estos fundamentos, es posible:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Evaluar si una operación es factible antes de comprometer fechas, cantidades o recursos. 
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Anticipar cuellos de botella. 
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Identificar restricciones de mano de obra, equipos o espacios. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Reconocer que los tiempos de ciclo, de proceso y de preparación afectan directamente el cumplimiento. 
        .box___style_2.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 De este modo, este apartado se convierte en una herramienta práctica para planear con mayor criterio, reducir improvisaciones y sustentar mejor las decisiones operativas. 
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Capacidad productiva y recursos disponibles 
    p.mb-5 A continuación, se presenta un video sobre la capacidad productiva y los recursos disponibles, abordado desde una perspectiva técnica y académica para comprender su importancia en la planeación de la producción.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Capacidad productiva y recursos disponibles en la planeación de la producción.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Concepto de la capacidad productiva
    p.mb-5 La capacidad productiva es la posibilidad real que tiene una operación, un proceso o un recurso para generar una determinada cantidad de bienes o servicios en un tiempo definido. En la planeación de la producción, este concepto permite establecer el límite de respuesta del sistema frente a la carga de trabajo que debe atenderse. Por lo tanto, la capacidad no se limita a la posibilidad de producir, sino que se define por lo que realmente puede alcanzarse según el tiempo disponible, las condiciones de operación y el nivel de aprovechamiento de los recursos.
    .color___box_1
      .px-5
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Relación entre capacidad y recursos disponibles
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            p La capacidad está directamente asociada con los recursos disponibles. Estos recursos incluyen:
            .row.align-items-center.mb-3
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-1
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mano de obra. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Equipos. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Herramientas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Espacios. 
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Materiales. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Turnos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tiempo útil de operación. 
            p.mb-4.mb-lg-0 Sin embargo, la disponibilidad de recursos no debe entenderse como simple existencia física. Un equipo puede estar instalado, pero no necesariamente disponible por mantenimiento, preparación, cambios de referencia o restricción técnica. Del mismo modo, puede existir personal asignado, pero con limitaciones de jornada, experiencia o desempeño. Por eso, al analizar la capacidad se debe revisar la disponibilidad real de los recursos y su posibilidad efectiva de responder a la carga de trabajo (Chapman, 2006).
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
                img(src='@/assets/curso/temas/img5.png', alt='').m-auto
        .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
          .col
            h3 Capacidad disponible, capacidad requerida y equilibrio de la operación
        p.mb-5 En planeación de la producción, uno de los análisis más importantes consiste en comparar la capacidad disponible con la capacidad requerida. Para organizar esta relación, se presenta la siguiente comparación:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img6.jpg', alt="" ).m-auto
            h4.text-center Capacidad disponible
            p.mb-0.text-center Representa la respuesta que realmente puede ofrecer el proceso.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img7.jpg', alt="" ).m-auto
            h4.text-center Capacidad requerida
            p.mb-0.text-center Corresponde a la carga de trabajo liberada y planificada para atender pedidos, programas o compromisos.
    .box___style_4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img8.png', alt='').m-auto
        .col-xl
          p.mb-0 Cuando la carga supera la capacidad, la operación comienza a presentar retrasos, acumulaciones de trabajo, sobrecarga del personal, uso excesivo de recursos y un mayor riesgo de incumplimiento en las fechas comprometidas, lo que afecta directamente la estabilidad del sistema productivo. Por el contrario, cuando la capacidad supera ampliamente la carga, se generan tiempos ociosos y subutilización de los recursos, evidenciando un aprovechamiento ineficiente de la capacidad disponible. 
    p.mb-5 La planeación de la capacidad se comprende como el proceso orientado a equilibrar esa diferencia, con el propósito de cumplir los tiempos y atender las necesidades del cliente mediante un uso adecuado de los recursos (Chapman, 2006).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de capacidad para el análisis operativo
    p.mb-5 Este apartado permite profundizar en la comprensión de la capacidad productiva a partir de sus distintas formas. Para ello, resulta pertinente diferenciar los tipos de capacidad y su interpretación dentro de la planeación de la producción:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacidad instalada
                p Corresponde al potencial máximo teórico del sistema o recurso. En la planeación, permite identificar hasta dónde podría llegar la operación en condiciones ideales. 
                p.mb-0 #[b Ejemplo]: una línea puede producir 120 unidades por hora si trabaja sin pausas, fallas ni cambios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacidad disponible
                p Hace referencia al tiempo o a los recursos realmente habilitados para operar en un periodo. En la planeación, indica la base real con la que puede trabajarse. 
                p.mb-0 #[b Ejemplo]: de 8 horas de turno, solo 7 están disponibles porque 1 hora se destina a limpieza y alistamiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacidad requerida
                p Se refiere a la carga de trabajo que debe atenderse según los pedidos o el programa de producción. En la planeación, permite comparar la necesidad con la capacidad de respuesta. 
                p.mb-0 #[b Ejemplo]: si deben fabricarse 560 unidades y cada una toma 0,75 minutos, la carga requerida es de 420 minutos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacidad nominal
                p Es el resultado del tiempo disponible ajustado por factores como eficiencia y utilización. En la planeación, ofrece una medida más cercana al comportamiento normal del sistema. 
                p.mb-0 #[b Ejemplo]: si un recurso dispone de 420 minutos, con 90 % de eficiencia y 85 % de utilización, su capacidad nominal disminuye frente al máximo teórico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacidad demostrada o real
                p Corresponde a la salida obtenida con base en los registros de producción. En la planeación, permite contrastar lo programado con lo realmente alcanzado.
                p.mb-0 #[b Ejemplo]: aunque se estimaban 500 unidades por turno, los registros indican que en promedio se obtienen 460.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/temas/img15.png', alt='').m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 La utilidad de esta diferenciación es muy alta, porque evita trabajar con una sola idea de capacidad. En la práctica, muchas fallas de planeación ocurren porque se programa con base en la capacidad instalada y no en la capacidad disponible o demostrada.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img16.svg', alt='').m-auto
        .box___style_1(data-aos="zoom-in")
          p.mb-0 Cuando esto pasa, el plan nace sobredimensionado y luego aparecen atrasos, reprocesos, horas extra o necesidad de reprogramar. Por eso, el análisis técnico de la capacidad exige pasar del potencial teórico a la respuesta real del sistema. Chapman (2006), además, distingue entre capacidad nominal y capacidad demostrada, y presenta esta última como la salida real observada en los registros de producción.
    .box___style_5.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img17.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Cálculo básico de la capacidad
          p.mb-0 Se invita a leer el documento Cálculo básico de la capacidad, donde se aborda la forma de estimar la capacidad productiva a partir del tiempo disponible y el tiempo requerido por unidad, así como su aplicación en la planeación operativa.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Calculo basico_capacidad_instruccional.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Información de demanda y pronósticos de producción 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        p La información de demanda es el conjunto de datos que permite conocer cómo se comportan las necesidades de bienes o servicios en un periodo determinado y, a partir de ello, orientar las decisiones de producción. Esta información puede provenir de:
        .row.align-items-center.mb-3
          .col-xl-6
            ul.fa-ul.estilo___ul.mb-1
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Históricos de ventas. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Pedidos confirmados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tendencias del mercado. 
          .col-xl-6
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Variaciones estacionales. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Comportamiento de clientes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registros internos de operación.
        .box___style_2.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 En la planeación de la producción, su estudio es esencial porque permite anticipar cuánto podría requerirse, en qué momento y en qué condiciones, de manera que la organización no programe a ciegas, sino con base en evidencias y proyecciones razonables. Los pronósticos y la administración de la demanda se presentan como parte central del proceso de planeación, porque conectan la necesidad del mercado con la capacidad de respuesta del sistema productivo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img18.png', alt='').m-auto
    p.mb-5 Los pronósticos de producción corresponden a estimaciones sobre la demanda futura y sirven como apoyo para definir volúmenes, tiempos, recursos y prioridades de operación. Su importancia radica en que ayudan a reducir la incertidumbre propia de cualquier proceso productivo, aunque no eliminan por completo el riesgo de error. Para construir un pronóstico se analizan los siguientes patrones:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img19.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tendencia
            p.mb-0.text-center Dirección general de crecimiento o disminución de la demanda.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img20.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Estacionalidad
            p.mb-0.text-center Comportamientos que se repiten en periodos específicos.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Ciclos
            p.mb-0.text-center Variaciones de mayor duración asociadas a condiciones económicas.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img22.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Variaciones aleatorias
            p.mb-0.text-center Cambios impredecibles no atribuibles a patrones claros.
    p.mb-5 A partir de esta lectura, se seleccionan métodos cualitativos o cuantitativos según la disponibilidad de datos, el horizonte de tiempo y el nivel de precisión requerido. De esta manera, el pronóstico no debe entenderse como una adivinación, sino como una herramienta técnica para aproximarse al comportamiento futuro de la demanda y mejorar la toma de decisiones (Chapman, 2006). Dentro de la planeación de la producción, la relación entre demanda y pronóstico tiene una aplicación directa en:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La programación de recursos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La organización de órdenes. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La preparación de materiales. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La definición de cronogramas. 
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img24.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si una empresa identifica, por ejemplo, que en ciertos meses la demanda aumenta por comportamiento estacional, puede anticiparse reforzando capacidad, ajustando inventarios o reordenando la secuencia de trabajo. Por el contrario, si desconoce ese comportamiento, corre el riesgo de programar por debajo o por encima de sus necesidades reales.
    p.mb-5 Por eso, la información de demanda y los pronósticos de producción constituyen una base para planear con mayor coherencia, sostener el cumplimiento operativo y articular mejor la producción con las condiciones reales del entorno (Jacobs, 2014).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Naturaleza e importancia de la información de demanda
    .color___box_1
      .px-5 
        p.mb-5 La demanda puede entenderse como la cantidad de bienes o servicios que un mercado, un cliente o un conjunto de usuarios solicita en un periodo determinado. Sin embargo, para efectos de planeación no basta con conocer una cifra puntual; es necesario interpretar su comportamiento, sus variaciones y sus posibles cambios a lo largo del tiempo. Por ello, la información de demanda debe analizarse como un insumo dinámico, sujeto a factores internos y externos, entre ellos:
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img25.png', alt='').m-auto
          .col-xl
            .row.justify-content-center.align-items-center.mb-0
              .col-xl-5.col-md-9
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 El comportamiento del consumidor. 
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 Las políticas comerciales. 
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 La disponibilidad de producto. 
              .col-xl-5.col-md-9
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 Los tiempos de entrega. 
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 La estacionalidad. 
                .box___style_8.mb-3(data-aos="flip-up")
                  .row.align-items-center
                    .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                      figure
                        img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 50px").m-auto
                    .col-xl.col-md-10
                      p.mb-0 Las condiciones del entorno. 
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            p Esta lectura amplia es la que permite transformar datos aislados en información útil para la producción (Hanke, 2010). Su importancia dentro de la planeación de la producción radica en que orienta decisiones previas a la ejecución. Cuando la demanda se interpreta de manera adecuada, es posible estimar mejor las necesidades de materiales, el uso de mano de obra, la ocupación de equipos y los tiempos de respuesta. Por el contrario, cuando la información es incompleta o se interpreta mal, aumenta el riesgo de:
            .row.align-items-center.mb-3
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-1
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Programar por encima de lo requerido. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Programar por debajo de lo necesario. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Generar atrasos. 
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Acumular inventarios innecesarios. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Subutilizar recursos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Incumplir compromisos. 
            .box___style_2.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 De allí que la información de demanda sea uno de los insumos más sensibles para construir planes viables y coherentes con la realidad operativa (Chapman, 2006).
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
                img(src='@/assets/curso/temas/img27.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Históricos de demanda, tendencias y estacionalidad
    p.mb-5 Los históricos de demanda corresponden al registro de cantidades observadas en periodos anteriores y constituyen una de las bases más utilizadas para analizar el comportamiento del mercado o de las órdenes de producción. Su valor está en que permiten reconocer:
    .row.justify-content-center.mb-5
      .col-xl-11
        .row.justify-content-center
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img28.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Si la demanda se mantiene relativamente estable. 
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img28.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Si presenta crecimiento o disminución sostenida. 
          .col-xl-4.col-md-9.mb-4.mb-lg-0
            .box___style_8.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img28.svg', alt='' style="width: 50px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Si cambia según épocas específicas del año, del mes o de la semana. 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/temas/img29.png', alt='').m-auto
      .col-xl
        .box___style_1.mb-3(data-aos="zoom-in")
          p.mb-0 A partir de estos registros, es posible identificar componentes como la tendencia, que refleja la dirección general de la serie, y la estacionalidad, que muestra patrones repetitivos asociados a ciclos temporales reconocibles (Hanke, 2010).
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.svg', alt='').m-auto
          .col-xl
            p.mb-0 Comprender estos componentes es importante porque no toda variación de la demanda debe interpretarse del mismo modo. Un aumento sostenido no se analiza igual que un pico estacional, y una caída temporal no necesariamente indica una tendencia permanente.
    p.mb-5 Por eso, el estudio de históricos exige revisar la secuencia de los datos y buscar patrones que ayuden a distinguir lo estructural de lo circunstancial. Esta lectura permite construir pronósticos más consistentes y tomar decisiones de planeación con mayor criterio, por ejemplo al anticipar periodos de alta demanda, ajustar inventarios o reforzar recursos cuando el comportamiento histórico así lo sugiere (Hanke, 2010). Antes de presentar los componentes, se sintetizan a continuación: 
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Nivel
                p.mb-0 Magnitud promedio de la demanda en un periodo; sirve como referencia inicial para estimar volúmenes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tendencia
                p.mb-0 Dirección general de crecimiento o disminución de la demanda; ayuda a anticipar aumentos o reducciones sostenidas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estacionalidad
                p.mb-0 Repetición de comportamientos en determinados periodos del calendario; permite preparar capacidad y recursos para periodos recurrentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Variación aleatoria
                p.mb-0 Cambios no previsibles o poco estables en la serie; obliga a trabajar con márgenes de ajuste y seguimiento continuo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ciclo
                p.mb-0 Movimientos de mayor duración asociados a cambios económicos o del entorno; apoya decisiones de mediano plazo sobre capacidad y oferta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Métodos de pronóstico de producción
    p.mb-5 Los métodos de pronóstico son procedimientos utilizados para estimar la demanda futura a partir de información disponible. De manera general, pueden agruparse en:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Cualitativos
        p.mb-0 Se apoyan en juicio experto, experiencia comercial, opinión de especialistas o consulta a clientes.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img36.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Cuantitativos
        p.mb-0 Se basan en datos históricos mediante técnicas como promedios móviles, suavización exponencial, proyecciones por tendencia o modelos más avanzados.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        p La selección del método depende del tipo de producto, de la disponibilidad y calidad de los datos, del horizonte temporal que se desea proyectar y del nivel de precisión requerido para la decisión (Hanke, 2010).
        .box___style_1.fit___box_1.mb-4.mb-lg-0(data-aos="fade-right")
          .row.align-items-center
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img16.svg', alt='' style="max-width: 85px").m-auto
            .col-xl
              p.mb-0 En la planeación de la producción, no existe un único método válido para todos los casos. Un producto con comportamiento estable puede trabajarse con técnicas relativamente sencillas, mientras que una demanda con tendencia o marcada estacionalidad exige procedimientos más ajustados al patrón de los datos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img37.png', alt='').m-auto
    p.mb-5 Además, cuando la información histórica es escasa o el entorno cambia con rapidez, los métodos cualitativos pueden complementar el análisis. Lo importante no es solo aplicar una técnica, sino comprender que el pronóstico debe corresponder al tipo de información disponible y al uso que se le dará dentro del proceso de planeación (Hanke, 2010).
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Pedidos confirmados, proyecciones y construcción de escenarios
    .row.align-items-center.mb-3
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img38.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Dentro del análisis de demanda, los pedidos confirmados tienen un valor especial porque representan requerimientos ya formalizados y, por tanto, reducen parcialmente la incertidumbre frente al futuro inmediato.
    p.mb-5 No obstante, la planeación no puede depender únicamente de pedidos ya recibidos, ya que muchas decisiones de producción deben prepararse antes de que toda la demanda esté confirmada. Por esa razón, las proyecciones complementan la información real disponible y ayudan a estimar qué podría ocurrir en periodos próximos. A partir de esta relación, se tiene:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img39.jpg', alt="" ).m-auto
            h4.text-center Pedidos confirmados
            p.mb-0.text-center Representan demanda cierta en el corto plazo.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img40.jpg', alt="" ).m-auto
            h4.text-center Proyecciones
            p.mb-0.text-center Estiman comportamientos futuros cuando la demanda no está completamente definida.
    p.mb-5 De esta combinación entre datos ciertos y estimaciones surge una base más sólida para programar la operación. La construcción de escenarios permite ampliar este análisis, ya que no se trabaja con una única proyección, sino con varias posibilidades razonables:
    .row.justify-content-center.mb-3
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img41.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Escenario esperado. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img41.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Escenario alto. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img41.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Escenario bajo. 
    .row.justify-content-center.text-center.mb-5
      .col-xl-9
        p.mb-0 Esta práctica es útil porque reconoce que la demanda futura nunca es completamente segura y que la organización necesita prepararse para comportamientos distintos del más probable.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Aplicación de la información de demanda y de los pronósticos en la planeación de la producción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_1.fit___box_1-1.mb-4.mb-lg-0(data-aos="fade-right")
          p La principal aplicación de este tema consiste en convertir la información de demanda en decisiones operativas. Cuando se conoce el comportamiento esperado de la demanda, se pueden definir:
          .row.align-items-center
            .col-xl-6
              ul.fa-ul.estilo___ul.mb-1
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Volúmenes de producción. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Carga de trabajo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Necesidades de capacidad. 
            .col-xl-6
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tiempos de preparación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disponibilidad de materiales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img42.png', alt='').m-auto
    .color___box_1
      .px-5
        p.mb-5 En otras palabras, la información de demanda no se queda en un análisis comercial o estadístico, sino que se transforma en soporte para la programación y el control de la operación. Esa es la razón por la cual los textos de operaciones ubican el pronóstico en las primeras etapas del proceso de planeación (Jacobs y Chase, 2022). Su efecto práctico se observa en decisiones como:
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Ajustar turnos. 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Anticipar compras. 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Organizar inventarios. 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Reforzar personal. 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Redistribuir la carga entre centros de trabajo. 
        p.mb-0 Por ejemplo, si los históricos muestran que la demanda aumenta de forma recurrente en determinados meses, la organización puede prepararse con anticipación y evitar que la programación quede desbordada cuando ese aumento ocurra. Así, el análisis de demanda y el pronóstico cumplen una función preventiva y estratégica: ayudan a que la producción se prepare con mayor coherencia frente a lo que probablemente tendrá que atender (Chapman, 2006).
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Parámetros técnicos de los procesos productivos  
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        p Los parámetros técnicos de los procesos productivos son las referencias que permiten describir, medir y controlar cómo debe ejecutarse una operación. Entre ellos se encuentran:
        .row.align-items-center.mb-3
          .col-xl-6
            ul.fa-ul.estilo___ul.mb-1
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempos de ciclo. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempos de proceso. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempos de preparación o #[i setup]. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Rendimiento. 
          .col-xl-6
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tolerancias. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Especificaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estándares.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/temas/img44.png', alt='').m-auto
    p.mb-5 En administración de operaciones, estos elementos se usan para relacionar el diseño del proceso con la capacidad, la programación y el control. En ingeniería industrial, se entienden como bases para medir el trabajo, normalizar actividades y mejorar el desempeño de la operación (Jacobs y Chase, 2022). Su estudio es importante porque la planeación de la producción no puede hacerse solo con cantidades o fechas. Para programar con criterio técnico se necesita conocer:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tiempo de operación
                p.mb-0.text-center Permite establecer la duración de cada actividad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tiempo de alistamiento
                p.mb-0.text-center Define el tiempo necesario para preparar el proceso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Variación del producto
                p.mb-0.text-center Indica los márgenes permitidos en calidad o especificaciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Rendimiento
                p.mb-0.text-center Permite estimar la producción real esperada.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Especificaciones
                p.mb-0.text-center Determinan las condiciones bajo las cuales debe ejecutarse el trabajo.
        .row.justify-content-center.text-center.mb-5
          .col-xl-11
            p.mb-0 Cuando estos parámetros no están definidos, la programación pierde precisión, los tiempos se estiman de forma empírica y se incrementa el riesgo de:
    .row.justify-content-center.mb-3
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Incumplimientos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Reprocesos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Uso ineficiente de los recursos. 
    .row.justify-content-center.text-center.mb-5
      .col-xl-9
        p.mb-0  En consecuencia, los parámetros técnicos constituyen una base esencial para lograr una planeación consistente, ya que permiten articular los tiempos reales del proceso con las decisiones operativas (Jacobs y Chase, 2022).
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Tiempos de ciclo, tiempos de proceso y tiempos de preparación
    p.mb-5 En la planeación y el análisis operativo, distinguir estos tiempos permite comprender con mayor precisión cómo funciona un proceso productivo, cómo se comporta su capacidad y qué factores afectan el flujo real de trabajo. Para organizar estos conceptos de manera comparativa, se presenta la siguiente relación:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Tiempo de ciclo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tiempo de ciclo
            p.mb-0 Corresponde al intervalo que transcurre entre la finalización de una unidad y la finalización de la siguiente dentro de una operación repetitiva. Este tiempo permite comprender el ritmo real con el que se genera la producción y se utiliza para estimar la capacidad y el flujo del proceso (Kanawaty, 1998).
      .py-3.py-md-4(titulo="Tiempo de proceso")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tiempo de proceso
            p.mb-0 Se refiere al tiempo efectivo requerido para ejecutar una actividad o transformar una unidad. Su análisis se centra en el contenido de trabajo de una operación específica, por lo que describe una tarea puntual dentro del proceso (Kanawaty, 1998).
      .py-3.py-md-4(titulo="Relación entre ambos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Relación entre ambos
            p.mb-0 Aunque el tiempo de ciclo y el tiempo de proceso están relacionados, no siempre coinciden. El primero expresa el ritmo real de producción, mientras el segundo se concentra en la duración efectiva de una actividad determinada. Esta diferencia es clave para evitar interpretaciones incorrectas sobre el desempeño operativo (Kanawaty, 1998).
      .py-3.py-md-4(titulo="Tiempo de preparación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img56.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tiempo de preparación
            p.mb-0 Corresponde al tiempo necesario para acondicionar equipos, herramientas, materiales o puestos de trabajo antes de iniciar una orden o efectuar un cambio de referencia. También se conoce como setup y hace parte del comportamiento operativo del proceso (Kanawaty, 1996).
    .box___style_9.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 Esta distinción también permite identificar por qué no basta con considerar únicamente los tiempos de producción al momento de planear. El tiempo de preparación, aunque en muchos casos no agrega valor directo al producto, influye de manera significativa en la operación, ya que reduce el tiempo útil disponible y condiciona decisiones relacionadas con el tamaño de los lotes, la secuencia de las órdenes y la capacidad real del sistema (Kanawaty, 1996).
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img38.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 En consecuencia, la planeación debe incorporar no solo los tiempos de producción, sino también los tiempos de alistamiento, ajustes, cambios y limpieza. Todos ellos inciden en el desempeño del proceso y, por tanto, deben considerarse como parte integral del análisis operativo.
    .row.justify-content-center.mb-5
      .col-xl-8
        .box___style_10(data-aos="flip-up")
          p A continuación, se presentan las fórmulas básicas utilizadas en este análisis:
          h5 Tiempo de ciclo promedio:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Tc = (sumatoria) Σ] tiempos observados / número de ciclos observados
          h5 Tiempo de ciclo requerido:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Tc] = tiempo disponible / producción requerida
          h5 Tiempo de proceso total de un lote:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Tp] = Ts + (tu × Q)
          p.mb-0 Dónde:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Tp = tiempo total del lote
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Ts = tiempo de #[i setup]
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | tu = tiempo unitario de proceso
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Q = cantidad del lote
          h5 Tiempo de #[i setup]:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Ts] = t desmontaje + t limpieza + t ajuste + t montaje + t prueba
          h5 Ejemplo 
          p Si en un turno hay 420 minutos útiles y se requieren 70 unidades, el tiempo de ciclo requerido es:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Tc] = 420 / 70 = 6 minutos por unidad.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Rendimiento, estándares y control del trabajo
    p.mb-5 En la gestión de operaciones, estos conceptos permiten evaluar el desempeño real de un proceso, establecer referencias claras de ejecución y tomar decisiones fundamentadas para su mejora continua. Para comprender su relación dentro del entorno productivo, se presenta la siguiente organización conceptual:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Rendimiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-2
            figure
              img(src='@/assets/curso/temas/img57.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Rendimiento
            p.mb-0 Expresa la relación entre el resultado obtenido y los recursos o el tiempo utilizados. Permite identificar si el proceso responde de acuerdo con lo esperado o si existen pérdidas de velocidad, interrupciones o ineficiencias que afectan la salida real.
      .py-3.py-md-4(titulo="Estándar")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-2
            figure
              img(src='@/assets/curso/temas/img58.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estándar
            p.mb-0 Define cómo debe ejecutarse una operación, cuánto debe durar y cuál es el nivel de desempeño esperado bajo determinadas condiciones. Se construye a partir del estudio del trabajo y sirve como base para la programación, comparación y control (Ricardo Caballero).
      .py-3.py-md-4(titulo="Control del trabajo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-2
            figure
              img(src='@/assets/curso/temas/img59.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Control del trabajo
            p.mb-0 Consiste en comparar lo programado con lo ejecutado con el fin de identificar desviaciones y tomar decisiones correctivas sustentadas en información medible.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/temas/img60.png', alt='').m-auto
      .col-xl
        p Cuando una empresa opera con estándares claramente definidos, se generan condiciones que favorecen una mejor gestión del proceso productivo:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Distribuir de manera más equilibrada las cargas de trabajo. 
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Comparar tiempos reales con tiempos esperados. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Detectar con mayor rapidez los puntos donde se presentan desajustes. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="flip-up")
          h5.mb-0 Ejemplo
          p Esta aplicación práctica se comprende mejor mediante un caso sencillo: si una operación tiene un estándar de 4 minutos por unidad y durante la jornada se registra un promedio de 5 minutos, la diferencia puede indicar problemas asociados al método, al nivel de entrenamiento, a los materiales o a los tiempos de alistamiento.
          p En este sentido, el estándar no solo cumple una función de medición, sino también de análisis y mejora del proceso. El control del trabajo, por su parte, se consolida como un mecanismo sistemático que permite contrastar lo planificado con lo ejecutado, facilitando la identificación de desviaciones y la implementación de acciones correctivas dentro del sistema productivo. A continuación, se presentan las fórmulas básicas:
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11.fit___box_11(data-aos="zoom-in")
                p.mb-0 #[b Tiempo normal:]
                p.mb-0 TN = TO × FV
          p.mb-0 Dónde:
          p.mb-0 TN = tiempo normal
          p.mb-0 TO = tiempo observado promedio
          p FV = factor de valoración del desempeño
          p #[b Tiempo estándar]: cantidad de tiempo que debería tomar un trabajador calificado para completar una tarea específica, trabajando a un ritmo sostenible, utilizando métodos, herramientas y equipos, insumos de materias primas y disposición del lugar de trabajo dados.
          p.mb-0 TE = TN × (1 + % suplementos) 
          p Los suplementos es el tiempo que se agrega al tiempo normal para permitir descanso y demoras personales inevitables y por fatiga.
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Rendimiento:]
                p.mb-0 R = (producción real / producción esperada) × 100
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Eficiencia del trabajo:]
                p.mb-0 E = (tiempo estándar ganado / tiempo real trabajado) × 100
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Cumplimiento de producción:]
                p.mb-0 CP = (producción real / producción programada) × 100
          h5.mb-0 Ejemplo
          p Si el tiempo observado promedio de una operación es 5 minutos, el factor de valoración es 1,10 y el suplemento es 15 %, entonces:
          .row.justify-content-center.text-center.mb-0
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 TN = 5 × 1,10 = 5,5 minutos
                p.mb-0 TE = 5,5 × 1,15 = 6,33 minutos
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Tolerancias, especificaciones y su relación con la calidad del proceso
    p.mb-5 En los sistemas productivos, las especificaciones y las tolerancias permiten definir con precisión qué se considera un resultado aceptable, estableciendo criterios técnicos que orientan tanto la ejecución del proceso como su control. Para organizar estos conceptos fundamentales, se presenta la siguiente relación:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img61.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Especificaciones técnicas").ajuste-cajaAcordion
            p.mb-3 Establecen las características que deben cumplir los materiales, los procesos o los productos terminados para considerarse conformes. Pueden referirse a dimensiones, peso, temperatura, velocidad, composición o acabado, según lo definido por el diseño, la norma o los requisitos del cliente.
          .row(titulo="Tolerancias").ajuste-cajaAcordion
            p.mb-3 Indican el margen aceptable de variación respecto a una especificación. Esto implica que no siempre se exige un valor exacto, sino un rango dentro del cual el resultado sigue siendo aceptable.
          .row(titulo="Relación con la calidad").ajuste-cajaAcordion
            p.mb-3 Determinan los criterios de aceptación o rechazo, influyendo directamente en la conformidad del producto y en la estabilidad del proceso productivo.
    p.mb-5 En el contexto de la planeación de la producción, estos elementos adquieren una relevancia estratégica, ya que condicionan la forma de ejecutar las operaciones, los tiempos requeridos, los controles necesarios y la probabilidad de reprocesos o rechazos. Cuando una operación trabaja con tolerancias muy estrechas, suele requerir mayor precisión, más tiempo de ajuste y mayores niveles de verificación. Por el contrario, especificaciones ambiguas o mal comunicadas incrementan el riesgo de errores y de no conformidades (Gutiérrez, 2014). Para comprender su aplicación operativa, se presentan las siguientes expresiones básicas:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Tolerancia total
        p.mb-0 Corresponde a la diferencia entre el límite superior y el límite inferior. 
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img36.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Condición de conformidad
        p.mb-0 Un valor es aceptable cuando se encuentra dentro del rango definido por dichos límites.
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_10(data-aos="flip-up")
          h5 Fórmulas básicas
          p Estas expresiones permiten establecer de manera objetiva si un resultado cumple o no con las condiciones definidas.
          .row.justify-content-center.text-center.mb-3
            .col-10
              .box___style_11(data-aos="zoom-in")
                p.mb-0 #[b Tolerancia total:]
                p.mb-0 T = límite superior - límite inferior
          h5.mb-0 Valor dentro de tolerancia:
          p Si valor medido ≥ límite inferior y valor medido ≤ límite superior, el resultado es conforme.
          h5.mb-0 Ejemplo
          p Si una pieza debe medir 50 mm con tolerancia ± 0,5 mm, entonces:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Límite superior = 50,5 mm
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Límite inferior = 49,5 mm
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Tolerancia total = 50,5 - 49,5 = 1,0 mm
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
