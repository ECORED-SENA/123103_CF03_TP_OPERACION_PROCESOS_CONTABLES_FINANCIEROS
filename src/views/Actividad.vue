<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre planeación, programación y control de la producción',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, procedimientos y herramientas relacionados con la planeación, programación, documentación, comunicación y control de la producción, mediante la resolución de un cuestionario de selección múltiple aplicado a los contenidos desarrollados en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'La capacidad productiva se entiende como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de productos vendidos en un mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El valor total de la maquinaria instalada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La posibilidad real de un proceso para producir bienes o servicios en un tiempo definido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número total de trabajadores de una empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La demanda en la planeación de la producción permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de programar recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conocer cuánto podría requerirse y orientar la programación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los tiempos estándar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir únicamente el costo del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un pronóstico de producción es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una estimación de la demanda futura basada en información disponible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una orden de trabajo ya aprobada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un reporte final de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un inventario físico de materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El tiempo de ciclo corresponde a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tiempo total de la jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo de descanso del operario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tiempo entre la terminación de una unidad y la siguiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tiempo de almacenamiento del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El tiempo de setup o preparación se refiere a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La duración del transporte del producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo de venta del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tiempo de inspección del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El tiempo necesario para alistar equipos o cambiar de referencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Un estándar de trabajo sirve principalmente para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la demanda del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el control de calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar el desempeño real con una referencia esperada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar el cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'FIFO significa:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Final In, Final Out.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Fast Input, Fast Output.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>First Internal Flow Operation.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>First In, First Out.</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'El método CPM se utiliza para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar la ruta crítica de actividades dependientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular impuestos del proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir el consumo de materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar incidencias de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'En PERT, el tiempo esperado de una actividad se calcula con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un solo tiempo fijo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El costo del recurso multiplicado por el tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los tiempos optimista, más probable y pesimista.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La demanda histórica del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La ruta de producción indica:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo total de fabricar un producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El recorrido que sigue una orden por los centros de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de operarios por turno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La utilidad de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Un cronograma de producción permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar en el tiempo las actividades, responsables y duraciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la orden de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los registros de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El plan de producción documentado tiene como función principal:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Archivar los productos terminados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la demanda proyectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente los costos indirectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Formalizar cómo se ejecutará la producción en un periodo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'La orden de trabajo es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un informe de ventas del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un documento que formaliza la ejecución de una actividad productiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una proyección de demanda futura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un registro contable del inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La asignación de materiales se calcula principalmente a partir de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad para producir y consumo estándar por unidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Horas extras y turnos de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiempo de ciclo y ruta crítica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de supervisores disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Un sistema de información para la producción permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar al supervisor del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de registros operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Captar, organizar y comunicar datos útiles para la ejecución y control.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar las incidencias de la planta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'Un punto de control en producción sirve para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el tiempo improductivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el número de operarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el cronograma mensual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar condiciones del proceso antes de continuar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una comunicación efectiva de órdenes exige que la información sea:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambigua, general y flexible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clara, oportuna y verificable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solamente verbal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'Un registro de producción ejecutada debe incluir:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la fecha de entrega final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el nombre del operario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidades producidas, tiempos, recursos e incidencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente el costo del lote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'Actualizar el estado de una orden de producción permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el sistema alineado con la realidad operativa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de reportes diarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la ruta de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir la comunicación entre áreas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'El control de la ejecución productiva busca principalmente:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el número de órdenes liberadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar lo programado con lo ejecutado y tomar decisiones de ajuste.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los sistemas de información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar la demanda del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
