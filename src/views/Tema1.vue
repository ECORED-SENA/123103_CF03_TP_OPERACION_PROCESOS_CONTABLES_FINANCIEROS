<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos para la planeación de la producción 
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Capacidad productiva y recursos disponibles 



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Información de demanda y pronósticos de producción 




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Parámetros técnicos de los procesos productivos  




 
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
