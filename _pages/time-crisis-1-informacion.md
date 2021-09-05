---
title: Información de Time Crisis 1
permalink: /time-crisis-1/informacion/
header:
  overlay_image: /img/headers/pages/TimeCrisisHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/time-crisis-1/informacion/">INFORMACIÓN</a> - <a href="/time-crisis-1/descargar/">DESCARGAS</a> - <a href="/time-crisis-1/capturas/">CAPTURAS</a></strong></h2>

### Cómo aplicar el parche de traducción:

Tendrás que extraer la imagen en formato BIN/CUE de tu disco original de 
Time Crisis, versión PAL (código de juego SCES-00657).

La mayoría de programas de creación de imágenes de disco suelen generar un 
único archivo .BIN y un único archivo .CUE, pero para este parche es 
necesario sacar todas las pistas de forma individual. Si tu programa es lo 
bastante antiguo como para haber sacado las 33 pistas del juego en archivos 
.BIN separados, ignora el siguiente párrafo.

Para extraer las pistas, os recomiendo utilizar el programa binmerge, creado 
por putnam. Os he incluido una copia del mismo en el archivo comprimido con 
el parche, pero podéis descargaros el programa también en la dirección 
https://github.com/putnam/binmerge.
 - Pon en la misma carpeta los contenidos del archivo comprimido del parche 
   de traducción, los bats incluidos y los programas incluidos.
 - Modifica el archivo «1-Exportar pistas.BAT», cambiando el nombre 
   «TimeCrisisPAL.cue» por el nombre del archivo .CUE de vuestra copia del 
   juego.
 - Ejecutad el archivo .BAT y se debería crear una carpeta llamada 
   «TimeCrisisPALOriginal», conteniendo 33 archivos .BIN y un nuevo archivo 
   .CUE.

Ya con los 33 archivos .BIN, puedes aplicar el archivo XDELTA a la pista, o 
track, 01. El archivo .BAT número 2, «2-AplicarXDELTA.BAT» debería 
resolverte este proceso fácilmente.

Esta es la suma de comprobación de la pista 01 de mi copia original del 
juego en formato .BIN:

CRC-32: 02b2e64d  
   MD4: de02259d3de513445cff41fd49c97938  
   MD5: 68361749c14a5d1ee6095cf4d2df8d77  
 SHA-1: aa2e2832ffe6ada4c081be613310140ec4fc40e4

¡Ya está! Ya puedes jugar a Time Crisis traducido en castellano, tanto en 
emulador como en consolas modificadas para permitir la carga de copias de 
seguridad.

Si quieres volver a unir los 33 archivos BIN en uno solo, ejecuta el tercer 
archivo BAT, «3-(Opcional) Reunificar pistas.BAT».


### Registro de versiones:
- 1.0 - Primera versión. Todos los textos, gráficos y voces han sido 
      localizados al Castellano. Debido a limitaciones técnicas, las 
      pantallas de Game Over (Por falta de tiempo o de vidas) mostrarán unos 
      ligeros defectos que no deberían arruinar la experiencia de juego.
      Si alguien le echa un par y es capaz de quitar estos defectillos, que 
      por favor me contacte en la dirección indicada.
- 1.0 B - Se ha cambiado el archivo original al que se debe aplicar el parche 
        para solucionar los problemas de aplicación que han comentado varios 
        usuarios.
        No se han cambiado los contenidos de la traducción, así que esta no 
        ha visto cambiado su número de versión.
- 1.0 C - Se ha vuelto a cambiar la forma de aplicación del parche, esta vez 
        con un método definitivo. Gracias al usuario MaxDamage por 
        descubrirme la herramienta necesaria.
        No se han cambiado los contenidos de la traducción, así que esta no 
        ha visto cambiado su número de versión.

<h2 style="text-align: center;"><a href="/time-crisis-1/"><strong>VOLVER</strong></a></h2>


