---
title: Información de Time Crisis 1
permalink: /time-crisis-1/informacion/
header:
  overlay_image: /img/headers/pages/TimeCrisisHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/time-crisis-1/informacion/">INFORMACIÓN</a> - <a href="/time-crisis-1/descargar/">DESCARGAS</a> - <a href="/time-crisis-1/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Registro de revisiones](#timecrisisinfo_1)
2. [Cómo aplicar un parche .XDELTA](#timecrisisinfo_2)
3. [Cómo aplicar el parche de traducción](#timecrisisinfo_3)
4. [Instrucciones para copiar el juego traducido a un CD-R](#timecrisisinfo_4)

### Registro de versiones<a name="timecrisisinfo_1"></a>
 * 1.0 - Primera versión. Todos los textos, gráficos y voces han sido 
      localizados al Castellano. Debido a limitaciones técnicas, las 
      pantallas de Game Over (Por falta de tiempo o de vidas) mostrarán unos 
      ligeros defectos que no deberían arruinar la experiencia de juego.
      Si alguien le echa un par y es capaz de quitar estos defectillos, que 
      por favor me contacte en la dirección indicada.
 * 1.0 B - Se ha cambiado el archivo original al que se debe aplicar el parche 
        para solucionar los problemas de aplicación que han comentado varios 
        usuarios.
        No se han cambiado los contenidos de la traducción, así que esta no 
        ha visto cambiado su número de versión.
 * 1.0 C - Se ha vuelto a cambiar la forma de aplicación del parche, esta vez 
        con un método definitivo. Gracias al usuario MaxDamage por 
        descubrirme la herramienta necesaria.
        No se han cambiado los contenidos de la traducción, así que esta no 
        ha visto cambiado su número de versión.
 * 1.5 - Revisión de todo el juego y conversión a NTSC-U:
   - Se ha convertido la traducción a la versión estadounidense (NTSC-U).
   - Se ha corregido un fallo visto en RetroBarcelona 2023 en el que una 
     partida de larga duración en la versión europea haría que se 
     cambiaran los gráficos y voces del idioma español al inglés.
   - Se han remozado todas las texturas para ser más fieles a las fuentes 
     tipográficas que utilizaba el juego original.
   - Se ha corregido el tono en la narración de la introducción.
   - Se han limpiado varios ruidos menores en las voces del doblaje. 
     Por desgracia, los másters se habían perdido pero no los audios 
     originales, así que se han tenido que remezclar todos los diálogos 
     del juego.
   - Se ha ajustado el volumen de las voces en varias escenas cinemáticas.

### Cómo aplicar el archivo .XDELTA con Delta Patcher<a name="timecrisisinfo_2"></a>

Necesitarás el archivo original a modificar, el archivo xdelta correspondiente 
y la aplicación Delta Patcher (**[puedes conseguirla en su página web](https://github.com/marco-calautti/DeltaPatcher/releases/){:target="_blank"}**).

 - Abre el programa Delta Patcher.
 - Asegúrate de que la opción «Backup original file» esté activada en el 
   botón con forma de engranaje, junto al botón «Apply patch».
 - Pulsa en el botón con forma de carpeta que hay dentro del cuadro de 
   «Original file» y selecciona el archivo original que quieras modificar.
 - Pulsa en el botón con forma de carpeta que hay dentro del cuadro de 
   «XDelta patch» y selecciona el archivo .XDELTA.
 - Haz clic en «Apply patch» y se aplicará el parche a una copia del 
   archivo seleccionado que tendrá el sufijo «_PATCHED», mientras que el 
   archivo original se mantendrá igual.

Es posible que los antivirus interfieran con el programa de parcheado 
durante su funcionamiento, pero NO DEBES DESACTIVARLOS mientras utilizas el 
programa.

### Cómo aplicar el parche de traducción<a name="timecrisisinfo_3"></a>

Necesitarás extraer la imagen del CD de Time Crisis, ya sea en su versión 
PAL europea (código de juego SCES-00657) como en su versión NTSC-U 
estadounidense (código de juego SLUS-00405) en formato de archivos .BIN y 
.CUE.

Para ello te hará falta un lector de DVD/BluRay y un programa de copiado de 
discos ópticos (como ImgBurn o Alcohol 120%). Si necesitas ayuda, busca 
tutoriales sobre el uso de estos programas en Internet.

La mayoría de programas de creación de imágenes de disco suelen generar un 
único archivo .BIN y un único archivo .CUE, pero para este parche es 
necesario sacar todas las pistas de forma individual. Si tu programa es lo 
bastante antiguo como para haber sacado las 33 pistas del juego en archivos 
.BIN separados, ignora el siguiente párrafo.

Para extraer las pistas, recomiendo utilizar el programa binmerge-gui, una 
versión del programa de putnam con una interfaz más fácil de usar gracias a 
Infrid. **[Puedes descargarte el programa aquí](https://github.com/loadwordteam/binmerge-gui){:target="_blank"}**.
 - Abre el programa binmerge-gui y selecciona la pestaña «Separar pistas».
 - Haz clic en «Buscar .CUE original» y selecciona el archivo .CUE de tu 
   copia de seguridad del disco.
 - Haz clic en «Seleccionar .CUE separado» y pon un nombre de archivo en una 
   carpeta diferente a donde se encuentren los archivos .BIN/.CUE originales 
   del disco.
 - Haz clic en «¡Separar pistas!». Si todo sale bien, la carpeta que hayas 
   seleccionado para el .CUE separado contendrá varios archivos .BIN y un 
   archivo .CUE.

Ya con todos los archivos .BIN, puedes aplicar el archivo XDELTA a la pista, 
o «track», 01. Utiliza Delta Patcher y las instrucciones sobre el uso de 
Delta Patcher para aplicar el parche.

Esta es la suma de comprobación de la pista 01 del juego de las dos 
versiones en formato .BIN:

VERSIÓN PAL:

```
CRC-32: 02b2e64d
   MD5: 68361749c14a5d1ee6095cf4d2df8d77
 SHA-1: aa2e2832ffe6ada4c081be613310140ec4fc40e4
```

VERSIÓN NTSC-U:

```
CRC-32: cf674d41
   MD5: eebb81e94ffa5b43be62ca2ce1e832e3
 SHA-1: 2e6afbd235523f82e8af52ae266bef2799764377
```

¡Ya está! Ya puedes jugar a Time Crisis traducido en castellano, tanto en 
emulador como en consolas modificadas para permitir la carga de copias de 
seguridad.

Si por cualquier motivo necesitas volver a unir todas las pistas en un solo 
archivo .BIN (por ejemplo, porque a algunos emuladores no les guste un .CUE 
con varios .BIN), vuelve a ejecutar el programa binmerge-gui, pero esta vez 
introduciendo los .CUE en la pestaña «Fusionar pistas».

### Instrucciones para copiar el juego traducido a un CD-R<a name="timecrisisinfo_4"></a>

**Estas instrucciones son para aquellas personas que, ya en la década de 2020, 
todavía utilicen CDs «quemados» o «tostados» (CD-R) para jugar con sus 
consolas reales y no utilicen sistemas modernos de emulación de disco óptico 
(los llamados ODE) u otros sistemas de carga de copias de seguridad a través 
de tarjetas SD. Si tienes alguno de estos, no necesitas tanta complicación.**

Si quieres jugar a este parche de traducción en una consola real y con un 
CD-R, necesitas que admita discos no originales, ya sea modificada con un 
chip o con otros métodos que existan. Si necesitas más información sobre 
esta parte, búscala en Internet.

Por lo general, puedes utilizar cualquier programa de grabación de discos 
(recomendamos ImgBurn o Alcohol 120%), y, en el caso de Alcohol 120%, 
utilices el preajuste para discos de PlayStation (en la versión de 
PlayStation) o el preajuste Saturn (para la versión de Sega Saturn).

Por norma general lo mejor es grabar los discos a la velocidad más baja 
posible, pero hemos visto casos en los que grabar a la máxima es la única 
forma de hacer que funcionen. Empieza siempre por la velocidad más baja.

**Actualmente, la gran mayoría de DVD-Rs, tanto de tiendas pequeñas como de 
grandes superficies dan problemas, por su calidad. Evita los discos cuyo 
fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc.** (Podéis ver su 
fabricante introduciendo el DVD-R en vuestro ordenador y leyendo sus 
especificaciones con ImgBurn).

Si queréis informaros sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, os recomiendo que os informéis por ahí, ya que hay otras 
personas que saben explicar la situación mejor que yo.

<h2 style="text-align: center;"><a href="/time-crisis-1/"><strong>VOLVER</strong></a></h2>


