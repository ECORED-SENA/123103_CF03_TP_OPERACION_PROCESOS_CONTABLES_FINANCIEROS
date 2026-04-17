<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_1
          p.mb-0 En este componente, el aprendiz se adentrará en la lógica con la que una organización prepara sus operaciones antes de ejecutarlas. A partir del estudio de la demanda, la capacidad disponible, los recursos y las condiciones técnicas del proceso, comprenderá cómo se analizan las necesidades de trabajo y cómo se establecen las bases para organizar una operación de manera coherente, viable y ajustada a la realidad productiva. Esta aproximación le permitirá reconocer que una buena organización no surge de la improvisación, sino del conocimiento previo de lo que se requiere, de lo que se tiene y de las condiciones bajo las cuales debe desarrollarse cada actividad.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A medida que avance, comprenderá cómo esa información inicial se convierte en decisiones concretas sobre el orden de las actividades, la distribución de los tiempos, la asignación de recursos y la definición de responsabilidades. También identificará cómo se estructuran rutas de trabajo, cómo se articulan métodos de programación y cómo se organizan cronogramas, planes y órdenes que orientan la ejecución diaria. Esto le permitirá entender que programar no se limita a fijar fechas, sino que implica coordinar personas, materiales, equipos y tiempos para lograr un desarrollo más ordenado, continuo y controlado de las operaciones.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
            img(src='@/assets/curso/intro/img3.svg', alt='').m-auto
      .col-xl
        p.mb-0 Asimismo, reconocerá la importancia de la información durante la ejecución de las actividades. Comprenderá cómo la comunicación de instrucciones, el uso de sistemas de información, el registro oportuno de novedades y el seguimiento permanente permiten mantener trazabilidad entre lo programado y lo ejecutado. Desde esta perspectiva, el componente le permitirá interpretar que la operación requiere información clara, verificable y disponible en el momento oportuno, con el fin de facilitar el control, identificar desajustes y respaldar la toma de decisiones dentro de la organización.
</template>

<script>
export default {
  name: 'Introduccion',
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
