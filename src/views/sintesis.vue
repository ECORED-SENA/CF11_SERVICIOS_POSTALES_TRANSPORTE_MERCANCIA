<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.mb-5      
      .col-lg-10.mb-5
        .cajon.color-primario.mb-4
          .row.justify-content-center.py-5
            .col-11  
              p El proceso de última milla ha sido de gran aceptación por las empresas de servicios postales y de transporte de mercancías, aporta grandes beneficios frente a la satisfacción de las entregas en tiempos establecidos, la disponibilidad constante de información e incluso el envío de reportes informando momentos de entregas, hace que las organizaciones sean cada día más competitivas y vayan marcando un hilo referente al cumplimiento, compromiso, responsabilidad y eficiencia frente a la promesa de valor que se crea tanto con el remitente del objeto postal o la mercancía quien en frecuentes ocasiones lo que envía son productos que fabrica y comercializa y busca operadores de servicios postales y de transporte de mercancías aliados con óptimos procesos logísticos, que apoyen el proceso de comercialización y logren entregas con oportunidad y calidad al destinatario o cliente final.
      .col-lg-12.mb-4
        p El siguiente mapa conceptual resume las ventajas del proceso de última milla:
      
      .col-lg-4.p-3
        .BG18
          .row
            .col-12.mb-3
              figure
                img(src='@/assets/curso/tema1/img54.png')
            .col-12.p-5
              h3 OBJETIVO
              p Satisfacer entrega de productos con oportunidad y eficiencia, generando reducción de costos y optimización de mano de obra.
      .col-lg-4.p-3
        .BG19
          .row
            .col-12.mb-3
              figure
                img(src='@/assets/curso/tema1/img55.png')
            .col-12.p-5              
              h3.text-white IMPACTO
              p.text-white Planeación de entregas ordenadas, satisfacción del cliente por entregas oportunas y por disponibilidad constante de información. 
      .col-lg-4.p-3
        .BG20
          .row
            .col-12.mb-3
              figure
                img(src='@/assets/curso/tema1/img56.png')
            .col-12.p-5
              h3 CONCLUSIÓN
              p El cliente es el centro de atención, el llegar al destino final con el objeto postal o la mercancía genera satisfacción al cumplir con la promesa de valor.



</template>

<script>
export default {
  name: 'Sintesis',
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
