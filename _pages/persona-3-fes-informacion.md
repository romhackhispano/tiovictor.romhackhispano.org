---
title: Información de Persona 3 FES
permalink: /persona-3-fes/informacion/
header:
  overlay_image: /img/headers/pages/Persona3FESHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/persona-3-fes/informacion/">INFORMACIÓN</a> - <a href="/persona-3-fes/descargar/">DESCARGAS</a><br>  
<a href="/persona-3-fes/capturas/">CAPTURAS</a> - <a href="/persona-3-fes/tutoriales/">TUTORIALES AVANZADOS</a><br></strong></h2>

### Información general del proyecto

Si estás leyendo esto, ¡enhorabuena! ¡Alguien que sigue leyéndose los léeme 
en vez de esperar a que se lo den todo mascado en un videotutorial Laik And 
Suscraif! Te felicito.

Bromas aparte, te doy la bienvenida a la primerísima versión de la 
fantraducción al castellano de Persona 3 FES. Voy a limitar este documento a 
la parte técnica del proyecto, si quieres conocer mis impresiones 
personales, te recomiendo que te veas [esta noticia](https://tiovictor.romhackhispano.org/2021/05/30/traduccion-persona-3-fes-ya-esta-disponible).

**Esta nueva versión del parcheador detectará si tu copia de seguridad del 
juego es de la edición PAL europea o la NTSC-U estadounidense**, descargándose 
el parche correspondiente y aplicándolo en un duplicado de tu copia.

Al final la conversión a la versión NTSC-U ha llevado prácticamente un año, 
principalmente por lo complicado que ha sido adaptar las modificaciones que 
añadió uno de los miembros del equipo, pero que por causas ajenas a su 
voluntad no pudo ayudarnos a hacer esa conversión, así que tuvimos que 
investigar lo ya investigado. Os pedimos disculpas a todos por la tardanza y 
esperamos que este compañero ya se encuentre mejor.

**El juego está traducido en un 99,99%.** ¿Qué falta?

Simplemente, las onomatopeyas que salen en combate, cuando se acierta una 
debilidad de un enemigo. Ya está.

Todo lo demás está tocado: gráficos, sprites, textos... Hasta hay más de una 
modificación sorpresa que, para los que os conozcáis el juego de cabo a 
rabo, os sorprenderá.

Otra cosa importante: **esta versión de la traducción NO es compatible con 
ninguno de los mods que hay actualmente en circulación**: undubs al japonés, 
mods para cargar archivos del disco duro mediante emulador, el mod para 
poder elegir a todo el equipo en combate...

Para el caso del undub, las modificaciones que hemos hecho han alterado los 
sistemas de archivos del juego, así que es necesario modificar o bien los 
programas existentes (PersonaPatcher, ModCompendium, Aemulus...). **Hemos 
alterado el programa PersonaPatcher para poder meter los archivos en la 
versión NTSC-U y a lo largo de este tiempo hemos encontrado nuevos programas 
que permitirían a un usuario con conocimientos medios de informática pueda 
hacer ese undub.**

Dejaré un tutorial con las instrucciones y herramientas necesarias en el 
[apartado de tutoriales](https://tiovictor.romhackhispano.org/persona-3-fes/tutoriales/).

Para el caso del mod para elegir a todo el equipo de combate, GriffithVIII 
se ha currado la conversión del mod a la versión PAL. Podéis encontrarla 
también dentro del blog, en la sección de descargas de Persona 3 FES. Este 
mod ha sido testeado mínimamente, así que no podemos garantizar su perfecto 
funcionamiento. Si sabes arreglar lo poco que queda, contacta con nosotros.

**Si quieres distribuir estos parches o ponerlos en tu página web, por favor, 
consúltanos primero. Bajo ningún concepto distribuyas o cuelgues en internet 
las imagenes del juego ya parcheado.** La traducción está hecha para ser 
distribuida en forma de parche y para ser usada para los legítimos 
poseedores del juego original.

### Registro de revisiones

* v1.0 - Primera versión de la traducción, publicada solo para la versión PAL:
  - Se han traducido todos los textos del juego.
  - Se han traducido y adaptado el 99% de los gráficos del juego (faltan las onomatopeyas que aparecen al conectar un golpe contra un enemigo cuando se ha acertado en una debilidad).
  - Se han subtitulado todos los vídeos del juego utilizando un sistema de subtitulación al vuelo, cortesía de RyleFury.
* v1.0.1 - Corrección de errores en la versión PAL:
  - Añadido un nuevo parcheador para los que tengáis sistemas operativos de 32 bits. AVISO: su funcionamiento es mucho más lento que la versión de 64 bits.
  - Corregido el fallo en el que el cuadro de texto de la pantalla de ayuda sobre los vínculos sociales se quedaba corto de altura.
  - Corregido el fallo en el que varios subtítulos de la FMV del 11 de julio se mostraban sin borde, haciéndolos parcialmente ilegibles.
* v1.1 - Se ha convertido la traducción a la versión NTSC-U estadounidense.
  - Corregido el fallo en el que el texto "Selecciona un objeto a descartar" pisaba el indicador de las horas del día.
  - Corregido el fallo en el que el selector de Persona a descartar se mostraba cortado en dos partes.
  - Corregido el salto que daban los créditos finales en la última línea.
  - Corregidos los defectos de color verde en los vídeos de los créditos finales de El viaje.
  - Corregidas las pocas erratas encontradas a lo largo de este año.
  - Corregidas otras varias erratas menores.
* v1.1b - Corregido un defecto visual en la pantalla de selección de accesorios en la versión NTSC-U estadounidense.

### Instrucciones para aplicar el parche de traducción en PlayStation 2

**Necesitarás extraer la imagen del DVD de Persona 3 FES en su versión PAL 
europea (código de juego SLES-55354) o en su versión NTSC-U estadounidense 
(código de juego SLUS-21621) en formato .ISO.** Para ello te hará falta un 
lector de DVD/BluRay y un programa de copiado de discos ópticos (como 
ImgBurn o Alcohol 120%). Si necesitas ayuda, busca tutoriales sobre el uso 
de estos programas en Internet.

Asegúrate de que has volcado tu disco correctamente. **Estos son los checksum 
md5 de la imágenes ISO del juego según ReDump (y confirmados con mis propios 
discos):**

NTSC-U: 4B16317A11F3089090748B7ECA2ACBAF  
PAL: A06EED816FDF750245E0E5DD49C3F1FE

Cuando ya tengas tu copia de seguridad hecha, podrás aplicar el parche 
mediante el parcheador personalizado, por cortesía de Darkmet y TraduSquare.

**El parcheador es muy sencillo e intuitivo, y los pasos están indicados en el 
propio programa.** Solo necesitas una conexión a Internet para que el programa 
pueda descargarse la última versión del parche del servidor de TraduSquare.

La principal novedad de este parcheador es que **cuando haya cambios en la 
fantraducción, solo tendrás que volver a ejecutarlo e indicarle dónde está 
tu copia de seguridad original del juego.**

**Si te has descargado el parcheador antes del 15 de mayo de 2022, es 
necesario que vuelvas a descargártelo para poder aplicar la traducción sobre 
la versión NTSC-U estadounidense.**

Es posible que los antivirus interfieran con el programa de parcheado 
durante su funcionamiento, pero NO debes desactivarlos mientras utilizas el 
programa.

### Instrucciones para usar la traducción en una PlayStation 2

Si tienes la consola modificada para que pueda leer imágenes ISO desde un 
disco duro o dispositivo USB, sigue los pasos que requiera tu aplicación 
de carga de backups.

Si quieres copiar el juego traducido a un DVD para ejecutarlo desde el 
lector de la consola, por lo general, puedes utilizar cualquier programa de 
grabación de discos (recomendamos ImgBurn o Alcohol 120%), y, en el caso de 
Alcohol 120%, utilices el preajuste para discos de PlayStation 2.

Por norma general lo mejor es grabar los discos a la velocidad más baja 
posible, pero hemos visto casos en los que grabar a la máxima es la única 
forma de hacer que funcionen. Empieza siempre por la velocidad más baja.

Actualmente, **la gran mayoría de DVD-Rs, tanto de tiendas pequeñas como de 
grandes superficies, dan problemas por su baja calidad**. Evita los discos 
cuyo fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc. (Podéis ver su 
fabricante introduciendo el DVD-R en vuestro ordenador y leyendo sus 
especificaciones con ImgBurn).

Si queréis informaros sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, os recomiendo que os informéis por ahí, ya que hay otras 
personas que saben explicar la situación mejor que yo.

<h2 style="text-align: center;"><a href="/persona-3-fes/"><strong>VOLVER</strong></a></h2>


