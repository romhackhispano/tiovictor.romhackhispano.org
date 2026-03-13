---
title: "Información de Silent Hill"
permalink: /silent-hill-1/informacion/
header:
  overlay_image: /img/headers/pages/SilentHillHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/silent-hill-1/informacion/">INFORMACIÓN</a> - <a href="/silent-hill-1/descargar/">DESCARGAS</a> - <a href="/silent-hill-1/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Registro de revisiones](#punto1)
2. [Cómo aplicar un parche .XDELTA](#punto2)
3. [Instrucciones para aplicar el parche de traducción en PlayStation](#punto3)
4. [Consejos para usar la modificación en consola real](#punto4)
5. [Consejos para usar la modificación en emuladores](#punto5)

### Registro de revisiones<a name="punto1"></a>

- 1.0 - Primera versión, se han sustituido todos los textos de los Consejos al morir y algunas 
imágenes que estaban sólo en Inglés en el original. Corregidas las líneas genéricas del juego 
(Yes/No, puertas, mapa), algunos detalles importantes y algún texto que estaba únicamente en 
Inglés en el original (Pantalla de Memory Card)  
- 1.5 - Cambiado el sistema de parcheado a xdelta. Revisión completa de todos los subtítulos del 
juego. Retocados algunos textos más de la pantalla de Memory Card. Solo quedan en Inglés la 
pantalla de controles y los comandos del inventario.  
- 2.0 - Nueva revisión completa de todos los textos del juego, gracias a TheMarkusBoy (Por revivir 
el proyecto y repasar los diálogos), y al nuevo lote de herramientas/información disponibles por 
parte del proyecto de traducción al ruso. El juego está 100% traducido al castellano, incluyendo 
nuevos gráficos y el vídeo de introducción. También se ha podido convertir la traducción a la 
versión NTSC-U del juego. Primera versión FINAL.  
- 2.1 - Más correcciones en toda la traducción al castellano. También se ha añadido una adaptación 
de la misma al español latino por cortesía de Giromancy. 
Esta adaptación, por motivos regionales, solo se ha implantado en la versión NTSC-U.  
- 2.1B - Corregido el fallo en el que la versión NTSC-U castellana se refería a las cartas en la 
habitación de la niña como "tarjetas".
- 2.1C - Deshecho el cambio en el formato de parche que se hizo en la versión 2.0 B: los parches pueden 
volver a aplicarse directamente a las imágenes del juego y no a los archivos internos. No se han cambiado 
los contenidos del parche en sí, por lo que no ha cambiado su número de versión.
- 2.5 - Nueva versión con doblaje al castellano organizado por Salvi Garrido y 
Reviviendo en Castellano (antigua Resident Evil Castellano). Las 
versiones con solo textos traducidos también se mantienen para quienes 
quieran jugar sin este doblaje, incluyendo los siguientes cambios: 
   - Corregido los defectos en la pantalla de Opciones extra de la 
     versión NTSC-U.
   - Corregido el rótulo de la pantalla de guardado/carga que indica que 
     el Hiperexterminador está potenciado.
   - Traducidos los créditos finales.
   - Traducido el gráfico de "THE END" en el final ovni.
   - Otros cambios menores.
   - Se ha reescrito el archivo Léeme para adaptarlo al formato actual 
     de Traducciones del Tío Víctor.

### Cómo aplicar un parche .XDELTA<a name="punto2"></a>

**Necesitarás el archivo original a modificar, el archivo xdelta 
correspondiente y la aplicación Delta Patcher** (puedes conseguirla en **[su página web](https://github.com/marco-calautti/DeltaPatcher/releases/)**)**.**

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

### Instrucciones para aplicar el parche de traducción en PlayStation<a name="punto3"></a>
**Necesitarás extraer la imagen del CD de o bien la versión PAL de Silent Hill 
en formato .BIN/.CUE** (código de juego SLES-01514), **o bien la versión 
norteamericana** (código de juego SLUS-00707)**.** Para ello te hará falta un 
lector de DVD/BluRay y un programa de copiado de discos ópticos (como 
ImgBurn o Alcohol 120%). Si necesitas ayuda, busca tutoriales sobre el uso 
de estos programas en Internet.

Esta es la suma de comprobación del disco en las versiones compatibles:

**CD DE LA VERSIÓN PAL (SLES-01514):**
```
CRC-32: 1788aa2e
   MD5: 980eaef02b5d8476964d9d37ffaa01cc
 SHA-1: ca67a93e507b999a0040242362162e442f2ba07e
```

**CD DE LA VERSIÓN NTSC-U (SLUS-00707):**
```
CRC-32: 1d4a3ff7
   MD5: b52500eea7d7d04a6a81b0efe88955e1
 SHA-1: 34278d31d9b9b12b3b5db5e45bcbe548991ecbc7
```

Una vez hayas comprobado qué versión tienes del juego, podrás aplicar los 
parches correspondientes siguiendo las instrucciones del punto *Cómo aplicar un parche XDELTA*.

### Consejos para usar la modificación en consola real<a name="punto4"></a>

**Estas instrucciones son para aquellas personas que, ya en la década de 2020, 
todavía utilicen discos «quemados» o «tostados» (CD-R, DVD-R...) para jugar 
con sus consolas reales y no utilicen sistemas modernos de emulación de 
disco óptico (los llamados ODE) u otros sistemas de carga de copias de 
seguridad a través de discos duros o memorias USB. Si tienes alguno de 
estos, no necesitas tanta complicación.**

Si quieres jugar a este parche de traducción en una consola real y con un 
disco grabado, necesitas que la consola admita discos no originales, ya sea 
modificada con un chip o con otros métodos que existan. Si necesitas más 
información sobre esta parte, búscala en Internet.

Por lo general, puedes utilizar cualquier programa de grabación de discos 
(recomendamos ImgBurn o Alcohol 120%), y, en el caso de Alcohol 120%, 
utilices el preajuste para discos de la consola correspondiente al juego.

Lo mejor suele ser es grabar los discos a la velocidad más baja posible, 
pero hemos visto casos en los que grabar a la máxima es la única forma de 
hacer que funcionen. Empieza siempre por la velocidad más baja.

Actualmente, la gran mayoría de discos regrabables, tanto de tiendas 
pequeñas como de grandes superficies, dan problemas por su calidad. Evita 
los discos cuyo fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc. 
(Puedes ver su fabricante introduciendo el disco en tu ordenador y 
leyendo sus especificaciones con ImgBurn).

Si quieres informarte sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, tendrás que buscar esa información en otra parte, ya que 
hay otras personas que saben explicar la situación mejor que yo.

### Consejos para usar la modificación en emuladores<a name="punto5"></a>

Durante los testeos de 2025 y 2026 con motivo del proyecto de doblaje, 
**descubrimos que Silent Hill es un juego un tanto... exquisito a la hora de 
emularlo.**

En el caso de Duckstation, jugando sin mejoras visuales o de tiempos de 
carga, hemos tenido que ir a Configuración -> Consola -> Emulación de CPU -> 
Modo de ejecución -> Intérprete (el más lento) para que el juego no se 
bloquee en la escena en la que Harry intenta acercar la mano a Lisa, en la 
recta final, en condiciones normales.

**Las formas de arreglar problemas de emulación, a grandes rasgos y aplicables 
a todos los emuladores, son las siguientes:**

 - **Cambiar la configuración de emulación** del modo «Recompiler»/
   «Recompilador» **a «Interpreter»/«Intérprete».**
 - **Desactivar mejoras de tiempos de carga/lecturas del CD.**
 - **Desactivar mejoras visuales de emulación.**
 - **Si utilizas PGXP, desactivar la «Culling Correction»/«Corrección de 
   culling» y el «Depth Buffer»/«búfer de profundidad».**

<h2 style="text-align: center;"><strong><a href="/silent-hill-1/">VOLVER</a></strong></h2>
<br>
<br>
<br>
