<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Gestionar el proceso de última milla 

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10
        .bloque-texto-a.color-acento-contenido.mb-4
          .row.align-items-center.justify-content-between.m-0
            .col-lg-4.col-6.mb-0
              figure(data-aos="fade-right")
                img.img04(src='@/assets/curso/tema1/img02B.png')
            .col-lg-8.p-lg-5.p-4
              .bloque-texto-a__texto.p-4
                p La última milla hace referencia al último paso que se realiza en el proceso de entrega de los objetos postales y de las mercancías al destinatario. Este proceso se conoce también como distribución capilar, es la gestión exclusiva del transporte de paquetería, servicio que se aplica al último trayecto que se realiza para la #[strong entrega final del paquete, el objeto postal o la mercancía al destinatario]. La última milla está direccionada a la distribución en la ciudad.
    
    p.mb-5 El nombre de última milla se genera por ser el último trayecto que recorre la mercancía o el objeto postal antes de llegar a los clientes y distribución capilar, porque los repartos se hacen dentro de la ciudad y para ello se realiza una ramificación o zonificación de la ciudad para planear las entregas.
    
    h5.mb-4 La importancia de la última milla es doble para las organizaciones, así:

    .row.justify-content-center.mb-5
      .col-lg-8
        .row.mb-5
          .col-lg-6.mb-4.mb-xl-0(data-aos="fade-right")
            .tarjeta.tarjeta-slide.arriba.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-5
                  <br><br><br><br>
                  h4.text-center Primera instancia:                   
                  p.text-center busca la satisfacción del cliente realizando entregas en tiempos más cortos.
                  <br><br><br><br><br><br><br><br>
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}")
          .col-lg-6.mb-4.mb-xl-0(data-aos="fade-left")
            .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-5
                  <br><br><br><br>
                  h4.text-center Segunda instancia:  
                  p.text-center busca ajustar o disminuir costos en transporte y mano de obra, para las empresas que prestan servicios de transporte y logística.
                  <br><br><br><br><br><br><br><br>
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img04.png')})`}")

    .row.mb-5
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img05.svg')
      .col-lg-6.p-2
        <br><br>
        p Hacer entrega de una cantidad considerable de paquetes o cargas es fácil, tiene la facilidad de disponer del recurso como el vehículo apropiado, los elementos de cargue, descargue y los operarios logísticos para que cumplan con la entrega, ese proceso para la empresa no presenta ninguna dificultad; sin embargo, disponer de recursos como vehículos y operarios para hacer entregas pormenorizadas genera mayores costos y no se optimizan los recursos, produciendo altos costos de operación, por ello, la última milla está enfocada a realizar procesos de entrega de paquetes pormenorizados y en muchas ocasiones entregas de mercancías en cantidades, con el objeto de mejorar la operatividad de los procesos.
    
    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p En caso de querer ampliar la información sobre <strong>¿qué es la última milla?</strong> ingrese al siguiente enlace:
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=IzJ0FcP3Cy8" target="_blank")
              span Ver más
              i.fas.fa-link
        
    p.mb-4 En el mundo de la logística de mercancías el término “última milla” representa la última parte del proceso de entrega de un pedido, es decir, cuando el producto es derivado hacia el cliente final. Son las acciones que transcurren #[strong desde que el paquete deja el punto de distribución hasta llegar a las manos del consumidor]. Dentro de estas acciones se puede encontrar las siguientes:

    .row.BGIMG01
      .col-lg-12
        SlyderA
          .row.justify-content-center.p-5
            .col-lg-6.col-sm-10-p-2.mb-5
              figure
                img(src='@/assets/curso/tema1/img08.png')
            .col-lg-6.p-4.mb-5
              <br><br>
              h4.mb-3 Rutas de transporte
              p Se refieren a la <strong>persona que planifica la ruta de distribución y el recorrido de la mercancía respectivamente</strong>. Estas rutas deben ser eficientes y estar constituidas de tal forma que la empresa tenga la capacidad  de minimizar costos asociados, tanto como sea posible.
          .row.justify-content-center.p-5
            .col-lg-6.col-sm-10-p-2.mb-5
              figure
                img(src='@/assets/curso/tema1/img09.png')
            .col-lg-6.p-4.mb-5
              <br><br>
              h4.mb-3 Sector de producción y línea de ensamble
              p Este proceso de evolución de los sectores de producción y comercialización se vuelca a  desarrollar líneas de ensamble, se crea la integración de la cadena de suministro y los tiempos de transporte se vuelven visibles, es decir, <strong>toman importancia en el proceso de compra - envío - entrega</strong>, los tiempos cambian y los clientes empiezan a exigir mejores servicios.
          .row.justify-content-center.p-5
            .col-lg-6.col-sm-10-p-2.mb-5
              figure
                img(src='@/assets/curso/tema1/img10.png')
            .col-lg-6.p-4.mb-5
              <br><br>
              h4.mb-3 Cadenas de suministro
              p Todas<strong> las cadenas de suministros están enfocadas en la prestación de servicios con agilidad, eficiencia y eficacia, el tiempo es muy importante en las entregas</strong>, es por todo esto que la gestión de la última milla marca una gran diferencia y es relevante para las organizaciones, apostarle al uso de las herramientas dispuestas para la gestión de este proceso. 
    .row
      .col-10
      .col-1
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: 10% ; top: -65px; bottom: ; width: 200% ; max-width: 200%")

    p.mb-4 En el comercio de productos, e incluso, la economía se generaba teniendo como base las rutas de transporte que se tenían disponibles, era el prestador del servicio el que establecía o definía los precios del servicio prestado, de esta manera se daba esa conexión incipiente entre el origen de un producto y el destino; con el paso del tiempo las economías crecen y se genera más producción, de hecho las empresas trabajan para tener inventarios disponibles. 
    p.mb-5 En las líneas de producción y ensamble se hace reducción de los tiempos de recepción de las mercancías compradas, ya que para las empresas no es rentable tener inventarios en sus bodegas, esto les genera costos de almacenamiento y otros gastos que impactan la productividad, además porque el factor económico es realmente relevante, por ello, se da una mirada diferente tanto al proceso de producción como al de comercialización, los cuales deben ir de la mano.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.cajon.color-primario.p-4.mb-4
        p En este ciclo de desarrollo del servicio de transporte no solo, para los servicios postales, sino, también para las mercancías, se empieza a #[strong usar herramientas tecnológicas] para incrementar la productividad y direccionar a las organizaciones hacia procesos más sostenibles; por lo tanto, los prestadores de servicios de transporte toman gran importancia en los diferentes sectores de la economía, hoy en día las organizaciones en un alto porcentaje implementan el proceso de una producción basada en la demanda, en la disponibilidad de herramientas ofimáticas que facilitan la hiperconectividad, lo cual marca una gran diferencia para los clientes y las ofertas de productos; la conectividad permite llegar a más clientes y ganar más mercado, cuando se cuenta con un producto de calidad y unos aliados estratégicos en transporte comprometidos con el resultado del proceso.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Especificaciones de mercancías y objetos postales

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-4.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img11.png')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: -5% ; top: -65px; bottom: ; width: 150px ")
      .col-lg-7       
        p Las especificaciones o características de las mercancías son el parámetro para definir el tipo de manipulación que se debe dar; por consiguiente, la preparación de los equipos, de las herramientas de cargue y descargue y el almacenamiento que debe darse permite garantizar el buen estado de los objetos postales y de las mercancías que están en tránsito al lugar de destino, por tanto, las especificaciones o características de las mercancías son condiciones para el diseño de espacios para almacenar, así como, la necesidad y el tipo de estanterías más el sistema de almacenamiento, además, de establecer todas las normas de seguridad y salud en el trabajo que se deben implementar para la protección no solo de las mercancías, sino, también de todo el equipo de operarios logísticos. 
    p.mb-4 Para la distribución de las mercancías se debe tener en cuenta aspectos como:

    .row.justify-content-center
      .col-lg-6.mb-5
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema1/img12.svg')
      .col-lg-12.mb-4
        p Para entrar al proceso de última milla se debe dar <strong>cumplimiento a requerimientos mínimos de operación o información</strong>, estos requerimientos son los siguientes:

    .row 
      .col-1
      .col-lg-11
        .row.justify-content-center.BG02
          .col-lg-2.col-md-2.col-3.mb-4
            figure(data-aos="fade-right")
              img.img01(src='@/assets/curso/tema1/img13.svg')
          .col-lg-9.col-md-9.col-12.py-4
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Detección del punto de posición o ubicación en el recorrido de los objetos postales en tránsito, fecha y hora de la llegada al punto de redistribución.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Guía de despacho del objeto postal o mercancía, la cual debe estar en físico y digital.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Tener definido el peso y el volumen.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Características del vehículo de transporte del objeto postal y de las mercancías.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Restricciones viales de acceso a la ciudad de destino del objeto postal en tránsito de “última milla”.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Alistamiento de las zonas de almacenamiento para descargue y recepción.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Reconocimiento de los vehículos de redistribución, que son los que realizan el proceso de última milla.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Reconocimiento de los horarios de reparto en redistribución.  
    .row
      .col-10
      .col-1
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: 10% ; top: -65px; bottom: ; width: 200% ; max-width: 200%")

    .row.justify-content-center
      .col-lg-4.mb-0.mb-lg-4.mx-2
        .row.justify-content-center
          .col-12.mb-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
              .BG03.p-4
                h4.text-center Punto de posición o detección
          .col-2.mb-2(data-aos="fade-down")
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG05.p-4.mb-0(data-aos="fade-down")
            h4.text-center Identificación de peso y volumen
            br
          .col-2.mb-2(data-aos="fade-down")
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG07.p-4.mb-0(data-aos="fade-down")
            h4.text-center Restricciones viales
            br
          .col-2.mb-2(data-aos="fade-down")
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG09.p-4(data-aos="fade-down")
            h4.text-center Reconocimiento de vehículos para la redistribución 

      .col-lg-4.mb-5.mx-2
        .row.justify-content-center
          .col-12.mb-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
              .BG04.p-4
                h4.text-center Guía de despacho
          .col-2.mb-2
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG06.p-4.mb-0(data-aos="fade-down")
            h4.text-center Características del vehículo o medio de transporte
          .col-2.mb-2
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG08.p-4.mb-0(data-aos="fade-down")
            h4.text-center Alistamiento de zonas de almacenamiento, cargue y descargue
          .col-2.mb-2
            img(src='@/assets/curso/tema1/img17.svg')
          .col-12.BG10.p-4(data-aos="fade-down")
            h4.text-center Reconocimiento de horarios de reparto en la redistribución

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Pedidos

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-4.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img18.png')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: -5% ; top: -65px; bottom: ; width: 150px ")
      .col-lg-7       
        p La preparación de pedidos para última milla se denomina <em>picking</em>, esta etapa en el proceso logística es de mucha importancia para todos los centros de distribución, en este proceso se puede generar reproceso si no se hace la preparación de los pedidos de forma ordenada y atenta, es la garantía de que el objeto postal o mercancía embalada sea el apropiado para continuar con el recorrido al destino final; es por ello que la etapa de organización y preparación de las mercancías demanda eficiencia para no ver afectada la operación y por consiguiente, dar cumplimiento a las promesas de valor de los clientes y no menoscabar la productividad de la empresa.  
    p.mb-5 Entonces, si aún no tiene claro lo que es el <em>picking</em>, lo puede aclarar a través del siguiente recurso:

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/k5OaWtEq1X4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.cajon.color-primario.p-4.mb-4
        p Las empresas de servicios postales y de transporte de mercancías deben contar con la tecnología necesaria para llevar a cabo el proceso de disposición de la carga al destinatario, lo cual se debe hacer con gran eficiencia, este paso puede afectar o beneficiar a la empresa productora o comercializadora que realizó la venta del producto, el cual está siendo esperado por un cliente que tiene expectativas de la recepción pronta del pedido.

    p.mb-5 Las herramientas ofimáticas que se usan para hacer este proceso se encuentran parametrizadas para planificar y diseñar las rutas de distribución; otras herramientas permiten hacer seguimiento a los objetos postales y mercancías para determinar la ubicación en todo momento y así definir el avance en trayectos y pronosticar horas de recepción o entrega. 

    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p En caso de querer ampliar la información sobre el <strong>proceso en un centro de distribución</strong>, ingrese al siguiente enlace o material complementario:
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=BE8XH9LkymY" target="_blank")
              span Ver más
              i.fas.fa-link

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Equipos

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-4.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.png')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: -5% ; top: -65px; bottom: ; width: 150px ")
      .col-lg-7       
        p Todos los equipos mecanizados especializados para la administración, sostenimiento y manipulación de los objetos postales están debidamente determinados de acuerdo con las especificaciones de peso, volumen y características especiales que sean requeridas para dichas operaciones. Normalmente, los equipos para este tipo de operaciones son los montacargas, los transpaletas, los preparadores de pedido y las carretillas convencionales/contrapesadas. A continuación, se presenta el siguiente recurso para identificar cada uno de ellos de manera gráfica:

    SlyderF.mb-5(columnas="col-lg-6")
      .row.justify-content-center.p-4
        .col-10.tarjeta.color-secundario.p-4.mb-5
          figure.mb-4
            img.img03(src='@/assets/curso/tema1/img20.png')
          h2.text-center.text-decoration-underline.mb-0 Montacargas
      .row.justify-content-center.p-4
        .col-10.tarjeta.color-acento-contenido.p-4.mb-5
          figure.mb-4
            img.img03(src='@/assets/curso/tema1/img21.png')
          h2.text-center.text-decoration-underline.mb-0 Transpaletas
      .row.justify-content-center.p-4
        .col-10.BG11.p-4.mb-5
          figure.mb-4
            img.img05(src='@/assets/curso/tema1/img22.png')
          h2.text-center.text-decoration-underline.img05.mb-0 Preparadores de pedido
      .row.justify-content-center.p-4
        .col-10.tarjeta.color-primario.p-4.mb-5
          figure.mb-4
            img.img03(src='@/assets/curso/tema1/img23.png')
          h2.text-center.text-decoration-underline.text-underline.mb-0 Carretillas convencionales contrapesadas

    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img24.png')})`}"
          )
          .row.bloque-texto-g__texto.p-4          
            .col-1(data-aos="fade-down")
              img.img06(src='@/assets/curso/tema1/img25.png')
            .col-lg-11.col-md-11(data-aos="fade-left")
              p.mb-0 Los equipos de los que disponen las empresas de servicios postales y transporte de mercancías <strong>para realizar las diferentes tareas de movilización de la carga deben ser operados por operadores logísticos certificados</strong>, esto es garantía para el buen manejo y para minimizar las posibilidades de accidentes durante la manipulación de los mismos, por ello, siempre se debe tener sentido de autocuidado. 
    
    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p En caso de ser necesario ampliar la información sobre <strong>el equipo de manipulación de materiales y tecnología dentro del centro de distribución</strong> ingrese al siguiente enlace o material complementario:
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=pcyYZjcsd-o" target="_blank")
              span Ver más
              i.fas.fa-link

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Procesos de distribución

    p.mb-5 Cada empresa de servicios postales o transporte de mercancías determina sus procesos internos de distribución de acuerdo con el modelo de negocio y el objeto social, de estos se desprenden los procedimientos y de ellos los indicadores de gestión con los cuales se permiten la mejora continua, atención y servicio al cliente; sin embargo, para el caso de la “última milla” del proceso de movilización y entrega de objetos postales existen procesos de línea que deben ser seguidos para completar la entrega a satisfacción al cliente:

    .row.BG02.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-10.py-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Reconocimiento del tránsito del objeto postal (normalmente es digital a través del número de guía).
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Identificación de la fecha y hora aproximada de llegada del objeto postal a cliente final en su domicilio o punto de redistribución.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Alistamiento de zona de llegada o de recepción del objeto postal.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Registro físico y digital.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Asignación a vehículo de redistribución.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Proceso de entrega.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Registro de entrega al cliente final, físico y digital, el cual se debe conservar.

    p.mb-5 A continuación, se invita a visitar el siguiente recurso educativo en el que se puede profundizar la trazabilidad en los procesos logísticos.

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PUOOkuzzSnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p De manera que el proceso de línea en la entrega contempla:

    figure.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img26.svg')
    
    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p En caso de desear ampliar la información y conocer un poco sobre el “<strong>Centro de distribución de mercado libre - Así funciona</strong>”, ingrese al siguiente enlace o material complementario: 
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=8eFhnpvaRB0" target="_blank")
              span Ver más
              i.fas.fa-link

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Disposición de carga de acuerdo con el plan de ruta

    p.mb-4 A la vista de la llegada de los productos al sitio de redistribución para el inicio de la entrega a los  clientes finales se hace necesario en el caso de los vehículos que realizan el proceso tener un plan de ruta de cada uno de ellos, con el objetivo de optimizar los tiempos de entrega y costos de operación. Este paso es fundamental en la satisfacción del cliente final y en el cumplimiento del contrato de transporte firmado con el remitente.
    p.mb-4 Los planes de ruta, como mínimo, deben contar con los siguientes componentes:

    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img27.svg')
    
    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p En caso de ser necesario ampliar la información sobre <strong>la disposición de la carga</strong>, ingrese al siguiente enlace o material complementario:
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=A73wlrqsNw0" target="_blank")
              span Ver más
              i.fas.fa-link

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Normativa de movilización de cargas

    p.mb-4 En Colombia se cuenta con una amplia normatividad para el transporte de carga, dichas normas contienen las obligaciones a que están sujetas todas las empresas que prestan el servicio de carga en el territorio nacional.
    p.mb-4 Dicha normativa es: 

    .row.mb-4
      .col-lg-4.BG12.p-4(data-aos="fade-right")
        .row 
          .col-3.mb-4
            img(src='@/assets/curso/tema1/img28.svg')
          .col-12
            p Ley 105 de 1993, Art. 3, en la que se define el transporte público como una industria que debe garantizar la movilización de personas, cosas y objetos, haciendo uso de vehículos apropiados según las necesidades de los sectores, el servicio que se presta de transporte público debe ser bajo condiciones de calidad y seguridad, recibiendo a cambio un pago o contraprestación económica (Agencia Nacional de Infraestructura, 1993).
      .col-lg-4.BG13.p-4(data-aos="flip-up")
        .row
          .col-3.mb-4
            img(src='@/assets/curso/tema1/img29.svg')
          .col-12
            p Ley 336 de 1966, esta Ley unifica los criterios para reglamentar y regular el transporte público en Colombia, tanto el transporte aéreo, férreo, marítimo, masivo, fluvial y terrestre, así como la operación dentro del territorio nacional (Función Pública, 1996).
      .col-lg-4.BG14.p-4(data-aos="fade-left")
        .row
          .col-3.mb-4
            img(src='@/assets/curso/tema1/img29.svg')
          .col-12
            p Resolución 004100 del 28 de diciembre de 2004, esta resolución reglamenta la tipología de los vehículos automotores dispuestos para la carga de transporte terrestre, también regula los requisitos relacionados con las dimensiones, pesos máximos por vehículos y por ejes, la operación en la red vial en todo el territorio nacional según definición, designación y clasificación registradas en la norma técnica colombiana NTC 4788 donde se encuentra la tipología para los vehículos de transporte de carga terrestre.

    p.mb-4 Así entonces, las siguientes imágenes presentan esquemas con la configuración de los vehículos de carga, teniendo en cuenta la disposición de los ejes, ver figura 1.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Vehículos para carga según disposición de los ejes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tabla-a.color-primario.mb-5 
          table
            caption <strong>Nota. Tomado de la Resolución 4100 de 2004 del Ministerio de Transporte.</strong> <a href="https://web.mintransporte.gov.co/jspui/bitstream/001/4012/1/Resolucion_4100_2004.pdf" target="_blank">https://web.mintransporte.gov.co/jspui/bitstream/001/4012/1/Resolucion_4100_2004.pdf </a>
            thead
              tr
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody
              tr
                td 
                  p.text-center C2
                td 
                  img(src='@/assets/curso/tema1/img30.svg')                  
                td 
                  p.text-center Camión rígido de dos ejes.<br>Camión sencillo.
              tr
                td 
                  p.text-center C3
                td 
                  img(src='@/assets/curso/tema1/img31.svg')                  
                td 
                  p.text-center Camión rígido de tres ejes.
              tr
                td 
                  p.text-center C3<br>Tándem trasero mixto
                td 
                  img(src='@/assets/curso/tema1/img32.svg')                  
                td 
                  p.text-center Camión rígido de tres ejes.
              tr
                td 
                  p.text-center C3<br>Tándem direccional
                td 
                  img(src='@/assets/curso/tema1/img33.svg')                  
                td 
                  p.text-center Camión rígido de tres ejes.
              tr
                td 
                  p.text-center C4
                td 
                  img(src='@/assets/curso/tema1/img34.svg')                  
                td 
                  p.text-center Camión rígido de cuatro ejes.
              tr
                td 
                  p.text-center C2S1
                td 
                  img(src='@/assets/curso/tema1/img35.svg')                  
                td 
                  p.text-center Tractocamión de dos ejes con semirremolque de un eje.
              tr
                td 
                  p.text-center C2S2
                td 
                  img(src='@/assets/curso/tema1/img36.svg')                  
                td 
                  p.text-center Tractocamión de dos ejes con semirremolque de dos ejes.
              tr
                td 
                  p.text-center C3S1
                td 
                  img(src='@/assets/curso/tema1/img37.svg')                  
                td 
                  p.text-center Tractocamión de tres ejes, con semirremolque de un eje.
              tr
                td 
                  p.text-center C3S2
                td 
                  img(src='@/assets/curso/tema1/img38.svg')                  
                td 
                  p.text-center Tractocamión de tres ejes, con semirremolque de dos ejes.
              tr
                td 
                  p.text-center C3S3
                td 
                  img(src='@/assets/curso/tema1/img39.svg')                  
                td 
                  p.text-center Tractocamión de tres ejes, con semirremolque de tres ejes.
              tr
                td 
                  p.text-center R2
                td 
                  img.img07(src='@/assets/curso/tema1/img40.svg')                  
                td 
                  p.text-center Remolque.
              tr
                td 
                  p.text-center C2 R2
                td 
                  img(src='@/assets/curso/tema1/img41.svg')                  
                td 
                  p.text-center Camión de dos ejes con remolque de dos ejes.
              tr
                td 
                  p.text-center C3 R2
                td 
                  img(src='@/assets/curso/tema1/img42.svg')                  
                td 
                  p.text-center Camión de tres ejes, doble troque, con remolque de tres ejes.
              tr
                td 
                  p.text-center C4 R2
                td 
                  img(src='@/assets/curso/tema1/img43.svg')                  
                td 
                  p.text-center Camión de cuatro ejes, con remolque de dos ejes.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.cajon.color-acento-contenido.p-4.mb-4
        p La Resolución 4100 de 2004 en el Artículo 7 refiere las dimensiones que deben cumplir los vehículos de carga que transiten por el territorio nacional. Estas dimensiones están estandarizadas con las siguientes medidas: ancho máximo 2,60 metros, altura máxima 4,40 metros. 
      .col-lg-12.mb-5
        p El Artículo 9 establece para los vehículos de transporte de carga el máximo peso por eje, así:

  .container.tarjeta.tarjeta--blanca
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-xl-2.mb-4.p-1
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BG21.p-2.py-4
              .titulo-sexto.color-secundario
                p.mb-0 Eje de dos llantas - peso máximo por eje <br> 6.000 Kg 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img44.svg')})`}")
      .col-sm-6.col-xl-2.mb-4.p-1
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BG21.p-2.py-4
              .titulo-sexto.color-primario                        
                p.mb-0 Cuatro llantas - peso máximo por eje <br> 11.000 Kg 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img45.svg')})`}")
      .col-sm-6.col-xl-2.mb-4.p-1
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BG21.p-2.py-4
              .titulo-sexto.color-acento-contenido                        
                p.mb-0 Cuatro llantas  y eje tándem -  peso máximo por eje de 11.000 Kg  
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img46.svg')})`}")
      .col-sm-6.col-xl-2.mb-4.p-1
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BG21.p-2.py-4
              .titulo-sexto.color-acento-botones
                p.mb-0 Seis llantas y eje tándem - peso máximo por eje de 17.000 Kg  
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img47.svg')})`}")
      .col-sm-6.col-xl-2.mb-4.p-1
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.BG21.p-2.py-4
              .titulo-sexto.color-secundario                        
                p.mb-0 Ocho llantas y eje tándem - peso máximo por eje de 22.000 Kg  
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img48.svg')})`}")
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Aplicación de <em>software</em>

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-4.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img49.png')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: -5% ; top: -90px; bottom: ; width: 150px ")
      .col-lg-7       
        p Las plataformas de información para el manejo de los objetos postales deben ser integrales, dicha herramienta ofimática debe permitir el proceso de administración de la información, realizar registros documentales digitales que rigen (la solicitud del cliente para la prestación del servicio) hasta el destino final (entrega del objeto postal al cliente) y la generación de informes según los parámetros de la información que se requiera procesar. Lo anterior quiere decir que el <em>software</em> aplicable para el proceso de última milla ya viene integrado en el control de sus procesos dentro de la plataforma principal de gestión  del operador de servicios postales y del transporte de mercancías.
    
    .row.align-items-center.BG01.p-4.mb-5
      .col-lg-1.col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-lg-11.col-md-11.col-10
        .row
          .col-11
            p Se invita a ampliar la información sobre <strong>el <em>software</em> para solución logística de última milla</strong>, ingresando al siguiente enlace o material complementario: 
          .col-6(data-aos="fade-left")
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=8YmUODEfmRI" target="_blank")
              span Ver más
              i.fas.fa-link
    
    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8 Información documentada de la última milla

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-4.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img50.png')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/img57.svg" style="left: ; right: -5% ; top: -105px; bottom: ; width: 150px ")
      .col-lg-7       
        p El <em>software</em> logístico de última milla contiene opciones para hacer seguimiento a las entregas en periodos establecidos, este <em>software</em> permite que el conductor de los vehículos conozca la hoja de ruta, así como las especificaciones establecidas para las entregas y así dar cumplimiento a las entregas en las horas establecidas, permite también que se registre a través de los dispositivos móviles las entregas efectivas y puede acompañar la entrega de evidencias como firmas e incluso fotografías y, las entregas no efectivas también son reportadas en tiempo real, esta información en línea es compartida con el usuario o cliente donde conoce los pormenores y los detalles del avance de la entrega. 

    p.mb-5 La información que se debe disponer del proceso <b>“última milla”</b> es la siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .row.BG15
          .col-4(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img51.svg')
          .col-7
            p <b>Guía de envío</b> (cada objeto postal, mercancía o carga en proceso).
      .col-lg-4
        .row.BG16
          .col-4(data-aos="flip-up")
            img(src='@/assets/curso/tema1/img52.svg')
          .col-8
            p <b>Guía de transporte</b> (del vehículo hace el tránsito desde el origen al centro de redistribución).
      .col-lg-4
        .row.BG17
          .col-4(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img53.svg')
          .col-7
            p <b>Guía de despacho</b> (del centro de redistribución al cliente final).
    
    p Todos estos documentos deben acumularse en el proceso de última milla de forma física y digital, cumpliendo con los requerimientos de recibo y entrega a satisfacción del destinatario o cliente final y, posterior a la validación se procede con el archivo. 

    
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
