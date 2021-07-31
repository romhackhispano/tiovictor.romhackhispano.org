---
title: "Repaso general de parches antiguos"
header:
  overlay_image: /img/NotiEnBlancoV2.jpg
layout: single
categories:
- 'General'
tags:
- 'General'
---

¡Buenas! Mientras seguimos avanzando con la conversión de la fantraducción de Persona 3 FES a la versión NTSC-U estadounidense, un usuario 
me ha indicado que sería conveniente que todos sepáis más sobre las copias de seguridad a las que hay que aplicar las traducciones, así que 
he actualizado varios de mis parches antiguos para que sus archivos Léeme incluyan los CRC/MD5 originales.

Esto afecta principalmente a los siguientes proyectos: Clock Tower para Super Nintendo, Fear Effect 2: Retro Helix, Operation Winback, 
Ready 2 Rumble (tanto para PlayStation como para Nintendo 64), Resident Evil: Director's Cut (en su versión 4.0), Resident Evil: Survivor, 
Silent Hill, The 3rd Birthday, Time Crisis y Zone of the Enders.

Al repasar los proyectos, me he visto en la necesidad de actualizar tres de ellos:
 - He cambiado el formato del parche de Silent Hill: ahora vuelve a ser un XDELTA aplicable a la imagen completa del disco. Ya no hay que andar 
   sacando y metiendo archivos, sabiendo que la imagen original se corresponde limpiamente con los datos de Redump.
 - He recompilado el parche de The 3rd Birthday: mi copia de seguridad original del juego resultó ser un volcado erróneo (le faltaban unos 36 bytes 
   al final). Ahora la imagen original se corresponde con el estándar de Redump (extrayendo el UMD a través del menú VSH de un CFW).
 - He retocado un poco el archivo .bat que incluye el parche de Time Crisis para que avise en caso de que falte algún archivo.

Y eso es todo, una cosita menor que me ha llevado menos de 48 horas, pero que hacía falta.

Seguiremos informando.