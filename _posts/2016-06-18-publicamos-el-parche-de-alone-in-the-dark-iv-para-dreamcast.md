---
layout: post
status: publish
published: true
title: "¡Publicamos el parche de Alone In The Dark IV para Dreamcast!"
author:
  display_name: Tío Víctor
  url: http://tiovictor.romhackhispano.org
author_url: http://tiovictor.romhackhispano.org
wordpress_id: 3204
wordpress_url: http://tiovictor.romhackhispano.org/?p=3204
header_img: /img/2016/06/NotiAITD402.jpg
date: '2016-06-18 15:18:22 +0200'
date_gmt: '2016-06-18 13:18:22 +0200'
categories:
- Alone in the Dark IV DC
tags:
- Alone in the Dark IV DC
---
¡Buenas a todos! Hoy ponemos punto y final a otro largo y enrevesado proyecto. 
Hoy publicamos la primera versión jugable del parche de traducción de Alone In The Dark: 
The New Nightmare para Dreamcast.

Este parche incluye una versión retocada de la traducción oficial que había en su momento, 
una traducción de las frases dedicadas de la consola, y lo que es más importante, incorpora 
el doblaje oficial. Pero, antes de que nadie diga nada, debéis tener una copia de la versión 
para PC o para PlayStation 2 para que el parcheador funcione y pueda aplicar las voces.

Os dejo el enlace a la descarga y más información después del salto. Os recomiendo encarecidamente 
que os leáis los contenidos del léeme (He dejado copia en el apartado de Información) antes de 
poneros a parchear, ya que hay que tener en cuenta varios detalles.

**EDIT 23/06/2016:** Si el parcheador os ha dado un error con el programa VAG2WAV, necesitáis 
las librerías Visual C++ Redistributable, versión 32 bits (vcredist_x86), que podréis encontrar 
[aquí](https://www.microsoft.com/es-ES/download/details.aspx?id=48145).

<h2 style="text-align: center;"><strong><a href="http://tiovictor.romhackhispano.org/alone-in-the-dark-dc/descargar/">Ir a la página de descargas</a></strong></h2>

<!--more-->

El parcheador permite exportar los datos ya traducidos en dos formatos, como siempre: GDI para 
emuladores y sistemas de emulación de lector de discos (Como GDEMU) y, en este caso, NRG para 
jugar en consola real.

La versión de NRG tenía varios problemas: El más importante era el formato de vídeo, un formato 
totalmente en desuso llamado 4XM que, tras mucho buscar, nos ha llevado a una única solución: 
Utilizar el programa de codificación que hay en la web de recursos de FFMpeg.

Al haberse creado en la década de 2000, no utiliza más de un núcleo en ordenadores multinúcleo y 
es muy lento, lo que lleva a una complicación: La creación de las dos imágenes NRG puede llegar a 
tardar doce horas o más. Así que recomiendo que dejéis el parcheador en marcha por la noche 
(Aseguraos de desactivar las funciones de ahorro de energía).

Esto es todo lo que hemos hecho en la versión NRG:

-Reducción de calidad generalizada en los vídeos, basada en el método de la release de OVERRiDE 
pero mejorando la selección de los bitrate por vídeo. Cinco vídeos también han sido reducidos de 
tamaño por motivos de bitrate. (OVERRiDE redujo casi la totalidad)  
-Supresión de vídeos no utilizados en el primer disco.  
-Supresión de los vídeos de los logotipos y el tráiler en el segundo disco para ganar espacio.  
-Reducción de calidad de los audios a 22050Hz (Por ejemplo, la versión de Laillas bajó la calidad 
de voces del disco 2 a 11025 Hz).  
-Recompresión de todos los datos del juego con la compresión GZIP que utiliza el programa 7Zip 
para ganar espacio.  
-Supresión de los archivos de voces no utilizados en cada disco (Cada disco contiene las voces de 
todo el juego, no del disco correspondiente) para ganar espacio.  
-Optimización en la colocación de archivos basada en la release de OVERRiDE.  

En total, todo esto nos permite hacer una release única de dos discos, en vez de los sistemas 
antiguos de cuatro discos, con un nivel de calidad elevado.

La versión GDI incluye la supresión de vídeos del segundo disco, la supresión de voces no utilizadas 
y la recompresión de datos para ahorrar algo de tamaño, pero sin reducir calidad.

Ha sido un parche complicado, pero esperamos que os guste.

El mes que viene hablaré de los proyectos que todavía siguen pendientes. Seguiremos informando.
