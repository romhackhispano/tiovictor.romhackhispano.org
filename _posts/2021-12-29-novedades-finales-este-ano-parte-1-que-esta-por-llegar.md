---
title: "Novedades finales de este año, 1.ª parte: lo que está por llegar"
header:
  overlay_image: /img/NotiEnBlancoV2.jpg
layout: single
categories:
- 'Persona 3 FES'
- 'Forbidden Siren 2'
- 'Ace Combat 3: electrosfera'
tags:
- 'Persona 3 FES'
- 'Forbidden Siren 2'
- 'Ace Combat 3: electrosfera'
---

¡Buenas a todos! Tras unos últimos meses especialmente ajetreados y puñeteros por mi parte, por fin puedo dar señales de vida.
Debido a la cantidad de información que quiero presentar, voy a dividir esta noticia en dos partes: una con los proyectos que ya han sido anunciados 
y que están en camino... y otra con los proyectos que están por anunciar, cosa que haré mañana por la noche.

Agarraos, que vienen curvas.

<!--more-->

# Índice de proyectos mencionados

1. [Persona 3 FES](#p3fes)
2. [Ace Combat 3: ~~electrosphere~~ electrosfera](#ac3es)
3. [¿Forbidden Siren 2?](#siren2)
4. [Hasta mañana](#manana)

## Persona 3 FES<a name="p3fes"></a>

Empecemos por la conversión de la traducción a la versión estadounidense. Actualmente, **todas las modificaciones en el ejecutable y otros elementos del 
juego que ideó RyleFury han sido implementadas correctamente en la versión NTSC-U**. Correctamente, pero para estar seguros **hay que volver a testear el 
juego entero**. En estos momentos ya hay un testeador dedicándose a esta tarea, Sorium, de la comunidad de TraduSquare, que en el momento de escribir estas 
palabras, va por el mes de mayo de _El viaje_.

Por otro lado, **GriffithVIII dejó casi acabada la conversión del mod de control de los compañeros en batallas (Controllable Party Members) a la versión PAL.** 
Había dos defectos en las últimas versiones del mod NTSC-U (tanto la original de TGE como la modificada de Warrior250) que han obligado a GriffithVIII a 
investigar en profundidad:
 - El sutra de ferocidad (Fierce Sutra en inglés) no se puede aplicar al equipo. El juego piensa que el efecto ya está aplicado.
 - Las habilidades de tándems (o Fusion Spells en inglés) son seleccionables con otros personajes ajenos al protagonista. Seleccionar una habilidad de 
   tándem con un PNC hará que el juego parezca bloquearse temporalmente (porque los PNC no tienen las animaciones correspondientes), pero luego el juego 
   parece recuperarse y aplicar los efectos de los mismos.

**Estos fueron los motivos por los que acabamos retirando el parche cuando se publicó hace meses.**

He dicho _casi_ porque, aunque Griffith arregló esos problemas ayer mismo, no hemos podido testear en profundidad el parche actual, y, de hecho, genera varios errores 
en la consola de PCSX2 que no parecen afectar (que sepamos) al funcionamiento del juego. Con todo y con eso, **vamos a compartir públicamente el mod en su estado BETA 
actual.** Podéis descargarlo en la página de descargas del proyecto de Persona 3 FES, **[o pulsando aquí](/persona-3-fes/descargar/)**.

Siguiendo con los contenidos extra, **también hemos publicado la herramienta necesaria para desbloquear la edición de las ISOs del juego fantraducido, de cara a que os 
hagáis vuestros propios undubs y otros mods**. **[D3fau4](https://github.com/D3fau4/)** se ha encargado de adaptar una antigua herramienta abandonada del grupo 
Amicitia, llamada PersonaPatcher, para que sea compatible con las versiones con la fantraducción al castellano, tanto la PAL como la futura NTSC-U.

Tened en cuenta que los métodos actuales para añadir mods al juego, principalmente usando un archivo .pnach para el emulador PCSX2, actualmente no son compatibles 
y requieren que sus programadores adapten estos programas para nuestra versión. Pero viendo que a estas alturas de partido no han dado soporte ni para la versión NTSC-J 
ni para la PAL, no cuento con que vayan a hacerlo en un futuro. Si queréis modificar vuestras ISO, hay que hacerlo a la antigua, editándola entera.

Podéis descargaros la aplicación **[PersonaPatcher modificada pulsando en este enlace](https://github.com/D3fau4/Amicitia)**. También he dejado un par de tutoriales 
para modificar vuestras ISO traducidas por escrito, en la página del proyecto de Persona 3 FES.

## Ace Combat 3: ~~electrosphere~~ electrosfera<a name="ac3es"></a>

Como habréis visto quienes estuvierais presentes durante el **[TraduSquare Direct](https://www.youtube.com/watch?v=BzD09uHdSYU)** o mi Twitter, hemos publicado un 
tráiler final de esta traducción. Siento no haber podido hacer noticia en el momento de su publicación, pero mis circunstancias personales no me permitieron hacer 
una noticia como Dios manda aquí.

Antes de poner una copia del tráiler, quiero recalcar **que la traducción no se ha publicado todavía**. Lo que dice el tráiler es un error.

{% include video id="pBC0jYR3yXY" provider="youtube" %}

Finalmente el proyecto será publicado en una colaboración entre TraduSquare, loadwordteam (el nuevo equipo de fantraducciones capitaneado por Infrid, creado a partir 
del grupo AC3ITP) y Traducciones del Tío Víctor.

El estado actual del proyecto es que **los textos están totalmente traducidos y con una primera revisión sobre papel de un 90%, pero estoy buscando a un segundo revisor,
a esperas de hacer el último 10% y de entrar en testeo**. También quedaría ver la posibilidad de añadir subtítulos a las dos escenas que no los tienen (los de la misión 
Betrayal y el final secreto), pero actualmente es una posibilidad remota.

Si hay alguien interesado en ayudar en la revisión, puede dejar un mensaje en los comentarios de esta noticia. **Pido un nivel muy alto de inglés, haré prueba de revisión 
y soy un verdadero cabrón analizándolas**, eso sí.

Por otro lado, me gustaría recalcar que este proyecto de traducción **también incluirá una reconstrucción del manual japonés en formato PDF**, con todo lujo de detalles 
y a resolución de impresión. Eso sí, por ahora solo será el manual original, no hay planes de incluir el libreto Photosphere por el momento.

## ¿Forbidden Siren 2?<a name="siren2"></a>

Pues... Sí y no. Hace unos cuántos años, un grupo de personas me contactó para doblar parte de Forbidden Siren 2 como parte de un proyecto de fandub. El proyecto no salió 
adelante, pero yo **me dediqué a cacharrear con el juego para mejorar algunas cosillas: en concreto, la fuente**. Resulta que hicieron una fuente de ancho fijo cuando podían 
haberla hecho de ancho variable perfectamente, pero no lo hicieron para forzar a los traductores a utilizar un límite total de caracteres (por motivos de falta de memoria).

Años después, **en verano-otoño de 2021, me dio por sacar esa parte del mod, pulirla y publicarla**, redibujando la fuente desde cero (pero manteniendo a la Helvética original), 
aprovechando para cambiar cuatro cosas y rehacer las pantallas de ayuda... y resulta que solo un día después de que yo publicara mi modificación, una segunda persona de nombre Majik 
saca un mod con exactamente la misma intención.

¿Qué probabilidades puede haber de que dos personas modifiquen lo mismo (de diferentes maneras, eso sí, que nadie llame ladrón a nadie: Majik se limita a editar el código de la fuente 
para hacerla de ancho variable, mientras que yo redibujé la parte gráfica para evitar discrepancias con los caracteres más anchos, como «m» o «w») y publiquen lo mismo con solo un día de 
antelación? Casi ninguna, pero ha pasado. Solo puedo **felicitar a Majik por haber pensado en lo mismo que yo...** y pedirle disculpas, quizás, por no haberme aliado con él para sacar una 
versión definitiva.

El mod también hace que ciertas texturas sean más brillantes o legibles, pero no todas. **Me gustaría modificar más cosas del juego** (por ejemplo, que los textos que aparecen antes de un vídeo 
se vean más claros, el Japan Studio cometió un error de principiante con las transparencias), **pero para ello necesitaré una herramienta especial, y prefiero dedicar el poco tiempo del que disponen 
los programadores que conozco a sacar cosas de mayor calado.**

Si tenéis curiosidad por esta modificación, que no traducción, he abierto una micropágina en la nueva sección de «Otras modificaciones».

## Hasta mañana...<a name="manana"></a>

Con esto cierro la primera mitad de la noticia, que engloba todos los proyectos conocidos o publicados a día de hoy. Mañana anunciaré tres proyectos nuevos, de menor cantidad de palabras por un lado 
(para no quitar mucho más tiempo a Ace Combat 3 o a Policenauts), o de mayor cantidad, pero que no pensé que fuera a publicar hace cinco años.

¡Hasta mañana!