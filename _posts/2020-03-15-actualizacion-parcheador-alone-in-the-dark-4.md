---
title: "Actualización del parcheador de Alone in the Dark 4"
header:
  overlay_image: /img/NotiEnBlancoV2.jpg
layout: single
categories:
- 'Alone in the Dark IV DC'
tags:
- 'Alone in the Dark IV DC'
---

Noticias breves sobre el parche de Alone in the Dark IV para Dreamcast: PacoChan y yo hemos estado dedicando algo de tiempo 
al parcheador para mejorarlo y proporcionar un nuevo método de generación de GDIs que sortee los problemas de compatibilidad 
que habéis tenido algunos. A todos aquellos que usarais el modo GDI y se os quedara colgado el juego al empezar una nueva 
partida, probad el nuevo modo «GDI (lento)».

Este modo recodifica por completo los vídeos que deben tener doblaje en vez de aplicar el programa adicional para cambiar sus 
pistas de audio. Hay una pérdida visual, pero es menor. El proceso lento tarda unas 3-4 horas en un procesador Intel i7 a 3.60
GHz con ocho núcleos (lo de los núcleos, como ya he dicho anteriormente, sirve de poco para el codificador).

Este es el registro de cambios de la versión 1.0.1:

* Restaurada la acreditación de Releon.
* El programa verifica que haya un mínimo de GBs libres en el 
disco duro antes de empezar a funcionar, avisa de la necesidad de 
tener instalado Visual Studio 2015, corrige varios errores en 
Windows 10.
* Se ha mejorado el proceso de conversión de vídeo al formato 
intermedio, aprovechando las CPUs multinúcleo.
* Se ha añadido un nuevo formato de salida: "GDI (lento)", que 
recodifica los vídeos doblados en su totalidad en vez de cambiar 
solo la pista de audio. Este modo está pensado para usuarios de 
emuladores de disco óptico (ODE) que tengan problemas a la hora de 
ver la introducción o cualquier otro de los vídeos doblados.
El proceso lleva entre 4 y 8 horas según la CPU (el compresor 
es antiguo y utiliza un solo núcleo, así que de nada sirve tener 
doce) y la codificación mantiene el tamaño del archivo original 
sin provocar una gran pérdida visual.

PacoChan también está investigando un fallo en el que todo el parcheador se cerraría solo con una copia corrompida del programa
adxencd.exe. No sé si habrá una actualización adicional que lo arregle.

<center><h1><b><i>Descargar versión 1.0.1 del parcheador:</i></b></h1></center>

<h1 style="text-align: center;"><strong><a href="https://www.mediafire.com/file/fswy88uvsipp08o/AloneInTheDark4Espa%F1olDreamcast101.7z/file">MEDIAFIRE</a> - <a href="https://mega.nz/#!YR1VCJgS!oxYxorGH1tVBWtWk83v6baVoDITwABK9exgYlBUEMO8">MEGA</a></strong></h1>

Seguiremos informando.