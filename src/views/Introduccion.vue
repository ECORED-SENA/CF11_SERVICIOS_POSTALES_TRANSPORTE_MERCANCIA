<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-7.mb-5
        <br><br>
        p Los diferentes sectores de la industria han experimentado constantemente el cambio en la gestión de la actividad económica, la expansión o crecimiento que todas las organizaciones buscan día a día con el objeto de permanecer en el mercado, unido a esto, el auge y crecimiento de las ventas en línea hacen que continuamente estén en la búsqueda de aliados estratégicos que les apoyen el proceso de distribución de los productos, desde la recogida hasta la llegada al lugar de destino, <strong>esta demanda hace que las empresas de servicios postales y transporte de mercancías estén siempre atentas al mercado para innovar y así ofrecer tecnología de punta a sus clientes</strong>, además apoyar o participar en el proceso de distribución de los productos y ser cómplices de la atención a los clientes de estas empresas productoras o comercializadoras.
      .col-lg-4.mb-5
        img(src='@/assets/curso/tema1/img01.png')
      .col-lg-10
        .cajon.color-primario.mb-4
          .row.justify-content-center.py-5
            .col-11  
              p La última milla es quizá el reto más relevante y desafiante en el desarrollo de la logística actual, todas las empresas de servicios postales y de transporte de mercancías deben desarrollar el proceso con especial cuidado y atención, <strong>deben buscar ser eficientes no solo en tiempos sino también en recursos</strong> y, estos recursos son de índole humano, económico y de equipos dispuestos para la operación. 
              p En la cadena de suministros esta última fase, es decir, la última milla, demanda el uso de tecnología para fortalecer el proceso y hacerlo de forma ágil, confiable, seguro; pero ante todo es importante por la trazabilidad que se debe dar a todos y cada uno de los objetos postales, en la evidencia tanto física como digital que se debe disponer por la atención prestada.
    p.mb-4 Para complementar y tener una introducción al respecto observe el siguiente video:    
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
