---
title: "Información de Resident Evil 2"
permalink: /resident-evil-2-dreamcast/informacion/
header:
  overlay_image: /img/headers/pages/ResidentEvil2Header.jpg
comments: false
---

<h2 style="text-align: center;"><strong><a href="/resident-evil-2-dreamcast/informacion/">INFORMACIÓN</a> - <a href="/resident-evil-2-dreamcast/descargar/">DESCARGAS</a> - <a href="/resident-evil-2-dreamcast/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Registro de revisiones](#punto1)
2. [Cómo aplicar un parche .XDELTA](#punto2)
3. [Instrucciones para aplicar el parche de traducción en PlayStation](#punto3)
4. [Instrucciones para aplicar el parche de traducción en Dreamcast](#punto4)
5. [Instrucciones para aplicar el parche de traducción en GameCube](#punto5)
6. [Instrucciones para aplicar el parche de traducción en PC](#punto6)
7. [Instrucciones para copiar el juego traducido a un CD-R](#punto7)

### Registro de revisiones<a name="punto1"></a>

* 1.0 - Primera versión. El menú principal y el de opciones están totalmente 
desplazados, recortados, machacados. Se está investigando cómo 
arreglarlo. Todo el resto de textos están completamente traducidos 
al Castellano, y se han corregido algunos aspectos de la traducción 
oficial.
* 1.1 - Segunda versión del parche. Se han corregido los menús principal y de 
opciones. Revisados varios textos del juego para mejorar la traducción 
original. Arreglado el bug que impedía continuar tras leer ciertos 
documentos del archivo. Corregidos otros tantos bugs menores.
El parche pasa a utilizar el parcheador de PacoChan, por lo que ya no 
es necesaria la release de DCRES, se necesitan las imágenes GDI.
* 1.2 - Actualización importante del parche: Se han revisado todos los textos 
de la historia, y se han corregido los fallos que bloqueaban la 
consola al intentar entrar a la biblioteca de la comisaría en el disco 
de Leon y a la oficina de los STARS en el disco de Claire.
* 1.5 - Revisión de erratas y eliminación de cuelgues en casi todo el juego 
(Muchas gracias a Releon por el testeo). Se han resincronizado los 
subtítulos, eliminando su costumbre de desaparecer antes de tiempo. 
El parcheador de PacoChan ahora reconocerá e identificará las imágenes 
que se introducen para parchear.
* 1.5B- Corregido un defecto por el cual el ordenado de archivos no funcionaba.
Este defecto podía provocar lecturas de disco más lentas en consola.
* 1.5C- Añadido soporte para exportar imágenes en formato GDI. La traducción 
no ha tenido cambios, así que mantiene su número de versión anterior.
* 1.5D- Añadida una verificación adicional a la hora de generar imágenes en 
formato MDS/MDF para asegurar que su tamaño sea apto para discos de 80 
minutos. Gracias a PepperStyles por descubrir el defecto.
*2.0 - Doblaje al castellano realizado en 2024 por el equipo de Resident Evil 
Castellano y nueva revisión de textos:
   - Solo se incluye la versión doblada a partir de ahora por motivos 
     logísticos.
   - El parche es compatible con más versiones del juego, además de la 
     Dreamcast PAL.
   - Se ha cambiado el sistema de parcheado para Dreamcast al Universal 
     Dreamcast Patcher debido a que el parcheador antiguo está marcado 
     (injustamente) por un DMCA. El cambio de sistema implica, por 
     desgracia, que ya no se podrán hacer versiones en MDS/MDF para 
     grabar en un CD-R.
   - Revisados todos los textos del juego.
   - Rehechas todas las modificaciones para acomodar el juego a los 
     textos españoles.
   - Modificadas las versiones para Dreamcast y GameCube para que 
     arranquen de forma predeterminada en español, sin importar el idioma 
     elegido en la consola. Gracias a Derek Pascarella (ateam) por su 
     ayuda en la versión para Dreamcast.
* 2.01 - Correcciones menores y añadidas dos versiones para PC:
   - Añadidos dos paquetes distintos para la versión de PC, uno para los 
     que quieran jugar con el juego tal cual salió de CD o a la última 
     versión publicada por GOG.com y otro para jugar con el sistema 
     Classic ReBIRTH de Gemini.
     - ¡AVISO IMPORTANTE! Por motivos ajenos a nuestra voluntad, en 
       estos momentos no es posible tener una traducción de textos 
       completa para la versión Classic ReBIRTH.
       En concreto, se mantiene en inglés lo siguiente:
       - Todos los textos del Extreme Battle dentro de los niveles.
       - Las pantallas de final de juego y estadísticas 
         («¡Enhorabuena!»).
       - Podrían mostrarse cortados los textos al terminar partidas 
       con Hunk y Tofu, así como los textos que hablan sobre Brad.
       Todo esto se intentará corregir en una versión posterior.
   - Corregido el fallo en todas las versiones en el que las 
     descripciones del inventario con más de una ventana de texto se 
     cerraban solas al cabo de unos segundos.
   - Corregido el fallo en el que el texto relacionado con Brad que 
     aparece al acabar una partida salía cortado en la Dual Shock Ver.
   - Corregido el fallo en el que, en algunos casos, las estatuas del 
     pasillo del segundo piso de la comisaría se vuelven ligeras como 
     una pluma en la Dual Shock Ver.
   - Corregido el parche de la versión PAL para PlayStation: hay que 
     seguir el procedimiento de separación de pistas para aplicar el 
     parche.
   - Otras correcciones menores de textos.

### Cómo aplicar un parche .XDELTA<a name="punto2"></a>

Cómo aplicar un archivo .XDELTA con Delta Patcher:

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

**Los parches para PlayStation requieren varios pasos.**

**Necesitarás extraer las imágenes de ambos CD de o bien la versión PAL España 
de Resident Evil 2 en formato .BIN/.CUE** (código de juego SLES-00976)**, o bien 
la versión Dual Shock Ver. estadounidense** (código de juego SLUS-00748)**.** Para 
ello te hará falta un lector de DVD/BluRay y un programa de copiado de 
discos ópticos (como ImgBurn o Alcohol 120%). Si necesitas ayuda, busca 
tutoriales sobre el uso de estos programas en Internet.

La mayoría de programas de creación de imágenes de disco suelen generar un 
único archivo .BIN y un único archivo .CUE, pero **para este parche es 
necesario sacar todas las pistas de forma individual. Si tu programa es lo 
bastante antiguo como para haber sacado las 2 pistas del juego en archivos 
.BIN separados, ignora el siguiente párrafo.**

**Para extraer las pistas, recomiendo utilizar el programa binmerge-gui**, una 
versión del programa de putnam con una interfaz más fácil de usar gracias a 
Infrid que [puedes descargarte aquí](https://github.com/loadwordteam/binmerge-gui).
 - Abre el programa binmerge-gui y selecciona la pestaña «Separar pistas».
 - Haz clic en «Buscar .CUE original» y selecciona el archivo .CUE de tu 
   copia de seguridad del disco.
 - Haz clic en «Seleccionar .CUE separado» y pon un nombre de archivo en una 
   carpeta diferente a donde se encuentren los archivos .BIN/.CUE originales 
   del disco.
 - Haz clic en «¡Separar pistas!». Si todo sale bien, la carpeta que hayas 
   seleccionado para el .CUE separado contendrá varios archivos .BIN y un 
   archivo .CUE.

**Ya con los 2 archivos .BIN, puedes aplicar el archivo XDELTA a la pista, o 
«track», 01. Utiliza Delta Patcher y las instrucciones sobre el uso de Delta 
Patcher para aplicar el parche.**

Esta es la suma de comprobación de la pista 01 en todas las versiones 
compatibles:

CD 1 (LEON) DE LA VERSIÓN PAL ESPAÑOLA (SLES-00976):
```
  CRC-32: 787a87df
     MD5: 6aa75d013941a33f77607a1f8c39c588
   SHA-1: c217efc71ed10e590652309353d6a546bdcc6ea8
```

CD 2 (CLAIRE) DE LA VERSIÓN PAL ESPAÑOLA (SLES-10976):
```
  CRC-32: e38048cd
     MD5: c69b918c5e9d04bdafa786197e4583c6
   SHA-1: 57bda8307058c099f3bbc1e0a83c558a2b8e563e
```

CD 1 (LEON) DE LA VERSIÓN DUAL SHOCK NTSC-U (SLUS-00748):
```
  CRC-32: 6d23a781
     MD5: 0ca749ec7bc1604136718ca16fa55319
   SHA-1: 62f53cd994d1e77dd8d7a67585623b03efb07da7
```

CD 2 (CLAIRE) DE LA VERSIÓN DUAL SHOCK NTSC-U (SLUS-00756):
```
  CRC-32: c1f62279
     MD5: 8fdd08786af8bca1dcd33b88a432248e
   SHA-1: 945edb866baa827d0d24ee08adbfd7bef76742a6
```

Una vez hayas comprobado qué versión tienes del juego, podrás aplicar los 
parches correspondientes siguiendo las instrucciones del punto 3.

**Si por cualquier motivo necesitas volver a unir los 2 archivos BIN en uno 
solo** (por ejemplo, porque a algunos emuladores no les guste un .CUE con 
varios .BIN), **vuelve a ejecutar el programa binmerge-gui, pero esta vez 
introduciendo los .CUE en la pestaña «Fusionar pistas».**

### Instrucciones para aplicar el parche de traducción en Dreamcast<a name="punto4"></a>

**Necesitarás extraer las imágenes de ambos GD-ROM de Resident Evil 2 en 
formato .GDI (método TOSEC) o .BIN/.CUE (método Redump).**

Lo más fácil y asequible es tener un adaptador de tarjetas SD para tu 
consola (que va en el puerto SERIAL) y utilizar el programa SDRip. 
Si necesitas ayuda, busca tutoriales sobre el uso de estos programas en 
Internet.

Asegúrate de que has volcado tu disco correctamente. Estas son las versiones 
compatibles y sus respectivas sumas de comprobación, o checksums:

GDI 1 (LEON) DE LA VERSIÓN PAL EUROPEA:
```
MD5 de track01.bin: 404693c006d9cb1f91d214d8ac8384b5
MD5 de track02.raw: d1838bcbca4a24b39deddeae2a9d371a
MD5 de track03.bin: 7dc75d938971589329e92ecc1eb5cf27
MD5 de track04.raw: 3bda221d3ec5954af8cdb56a75c8f0a1
MD5 de track05.raw: d4ea49e23c64aff07e00bcfea649ee87
MD5 de track06.bin: 73efcc4dec45dda1a5ed8e0b597193d6
```

GDI 2 (CLAIRE) DE LA VERSIÓN PAL EUROPEA:
```
MD5 de track01.bin: e1cf2f740ffce3956b27dfc896105b21
MD5 de track02.raw: d1838bcbca4a24b39deddeae2a9d371a
MD5 de track03.bin: 9faf09eced2cb85028fd7b17db06b321
MD5 de track04.raw: 3bda221d3ec5954af8cdb56a75c8f0a1
MD5 de track05.raw: d4ea49e23c64aff07e00bcfea649ee87
MD5 de track06.bin: 698cb9c987a38570090701302de8b32d
```

BIN 1 (LEON) DE LA VERSIÓN PAL EUROPEA:
```
MD5 de track01: 404693c006d9cb1f91d214d8ac8384b5
MD5 de track02: 9cca4624e62f04dc398aed22b5370a34
MD5 de track03: 7dc75d938971589329e92ecc1eb5cf27
MD5 de track04: 994c9593ed02a87e08ee49e016959b75
MD5 de track05: 000a5194b72937f2bd6674ae95fef09f
MD5 de track06: 5dbb82ffdb1983b2f91519a3ea089209
```

BIN 2 (CLAIRE) DE LA VERSIÓN PAL EUROPEA:
```
MD5 de track01: e1cf2f740ffce3956b27dfc896105b21
MD5 de track02: 9cca4624e62f04dc398aed22b5370a34
MD5 de track03: 9faf09eced2cb85028fd7b17db06b321
MD5 de track04: 994c9593ed02a87e08ee49e016959b75
MD5 de track05: 000a5194b72937f2bd6674ae95fef09f
MD5 de track06: 71d9302bce0d6e6892f1b78db0e787ee
```

**Una vez hayas comprobado qué versión tienes del juego, podrás aplicar el 
parche correspondiente con Universal Dreamcast Patcher.**

Una vez confirmes que tienes tu copia de seguridad en orden, es hora de 
descargar el Universal Dreamcast Patcher de Derek Pascarella (puedes conseguirlo en **[su página web](https://github.com/DerekPascarella/UniversalDreamcastPatcher/releases/)**).

El programa es muy sencillo:
 - Pulsa en «Select GDI or CUE» (Seleccionar GDI o CUE).
 - Selecciona la copia de seguridad de uno de tus discos.
 - Pulsa en «Select Patch» (Seleccionar parche).
 - Selecciona el parche en formato XXX que corresponda al disco que hayas 
   seleccionado.
 - El programa aplicará automáticamente el parche. Si todo va bien, 
   aparecerá el mensaje «XXXXXXX», indicando que ya se ha creado una copia 
   parcheada de tu imagen de disco.

**NOTA IMPORTANTE: En el momento de redactar este archivo de texto,** ya hay 
varios emuladores capaces de ejecutar el juego perfectamente, pero **los 
emuladores más antiguos darán problemas.** Por ejemplo, Demul 0.5.7 es capaz 
de ejecutar el juego, pero formateará todas las Visual Memory que haya 
seleccionadas.

### Instrucciones para aplicar el parche de traducción en GameCube<a name="punto5"></a>

**Necesitarás extraer la imagen del miniDVD de la versión PAL europea de 
Resident Evil 2 en formato .ISO** (código de juego GHAP). Si necesitas ayuda, 
busca tutoriales sobre cómo hacer copias de seguridad de discos de GameCube 
en Internet.

Asegúrate de que has volcado tu disco correctamente. Estas son las versiones 
compatibles y sus respectivas sumas de comprobación, o checksums:

DISCO DE LA VERSIÓN EUROPEA DE GAMECUBE (CÓDIGO GHAP):
```
  CRC-32: 7b211913
     MD5: 96798436434e7af83b5e52b0c8786923
   SHA-1: eee9bab385b0e5bb2da3f743789636198d1b0b83
```

**Una vez hayas comprobado que tu disco sea el correcto, podrás aplicar el 
parche correspondiente siguiendo las instrucciones del punto 3.**

### Instrucciones para aplicar el parche de traducción en PC<a name="punto6"></a>

**La versión para PC se puede aplicar de dos maneras, según si utilizas el 
juego original «puro» (es decir, las versiones originales en CD o el 
reciente relanzamiento en GOG.com) o si juegas con el sistema Classic 
ReBIRTH creado por Gemini.**

#### CÓMO APLICAR EL PARCHE A LA VERSIÓN EN CD/DE GOG.COM ORIGINAL
   - Si tienes la versión para GOG, asegúrate de que has descargado la 
     versión española y ten cuidado si vas a cambiar el idioma.
   - Copia las carpetas «Common», «doblaje_esp», «Gallery», «Pl0» y «Pl1» 
     a la raíz de la carpeta con los datos del juego, sobrescribiendo los 
     archivos según sea necesario.
   - Copia el archivo «winmm.dll» a la raíz de la carpeta con los datos del 
     juego.
   - Utiliza DeltaPatcher para aplicar los parches XDELTA correspondientes 
     a los ejecutables que estés utilizando. RECOMENDAMOS ENCARECIDAMENTE 
     UTILIZAR LA OPCIÓN «Backup original file».

Estos son los ejecutables compatibles y sus respectivas sumas de comprobación, 
o checksums:

VERSIÓN CD ESPAÑOLA 1.0
```
  Nombre: LeonS.exe
  CRC-32: c78acd26
     MD5: 4de0acb878799b3a9e35993ef09464e9
   SHA-1: ee9b18bd771608a1eced515c686e48c0a9b06fdf

  Nombre: ClaireS.exe
  CRC-32: 3f310c86
     MD5: 6e7c4e6c624edac1e632f9b08554fffb
   SHA-1: 5e0ccea2685e9c3abf11cd09e6159ec0171cdb21
```

VERSIÓN GOG ESPAÑOLA 1.0 hotfix 2
```
  Nombre: LeonS.exe
  CRC-32: 72c4736d
     MD5: 62b78f41f8f41d04a5f36f87f8591889
   SHA-1: 5fc34093c998114f5972d8f9a29f3cf8dda6d8fb

  Nombre: ClaireS.exe
  CRC-32: ae44da59
     MD5: 5ce6313ae2e66ea6b8c77cef8d50de7c
   SHA-1: 5805df2f18adb2792ccf192e697836afbe0f494b
```

#### CÓMO APLICAR EL PARCHE A LA VERSIÓN CLASSIC REBIRTH
   - Asegúrate de haber seguido las instrucciones de instalación del Classic 
     ReBIRTH al pie de la letra, sobre todo la de copiar el ejecutable de la 
     versión 1.1.0 de SourceNext.
   - Copia los contenidos de las carpetas «doblaje_esp», «Pl0», «Pl1» y
     «Zmovie» a la raíz de la carpeta con los datos del juego, 
     sobrescribiendo los archivos según sea necesario.
   - Copia los archivos «winmm.dll» y «mod_spanishRECdub_crypto.7z» a la 
     raíz de la carpeta con los datos del juego.
   - Utiliza DeltaPatcher para aplicar el parche XDELTA correspondiente al 
     ejecutable. RECOMENDAMOS ENCARECIDAMENTE UTILIZAR LA OPCIÓN «Backup 
     original file».

Estas son las respectivas sumas de comprobación, o checksums:

VERSIÓN SOURCENEXT 1.1.0
```
  Nombre: bio2.ORI.exe
  CRC-32: a4eb058c
     MD5: 72d0fc209861a95f1f9ec17102c2a8dd
   SHA-1: 24f82dde6b2bf6c041e2a1a07c7964e4430e4ead
```

Ejecuta el archivo bio2.exe modificado y, dentro del selector de mods de 
Classic ReBIRTH, selecciona «Biohazard 2 SourceNext: doblaje por Resident 
Evil Castellano v2.01».

Si deseas utilizar el doblaje con otros mods, por ejemplo, el Seamless HD, 
solo necesitas copiar las carpetas «doblaje_esp», «Pl0», «Pl1» y «Zmovie» 
por un lado y el archivo «winmm.dll» por otro, pero no podrás jugar a 
nuestra revisión de los textos y podrían aparecer subtítulos que no estén 
sincronizados con el doblaje.

### Instrucciones para copiar el juego traducido a un CD-R<a name="punto7"></a>

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

Actualmente, la gran mayoría de DVD-Rs, tanto de tiendas pequeñas como de 
grandes superficies dan problemas, por su calidad. Evita los discos cuyo 
fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc. (Podéis ver su 
fabricante introduciendo el DVD-R en vuestro ordenador y leyendo sus 
especificaciones con ImgBurn).

Si queréis informaros sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, os recomiendo que os informéis por ahí, ya que hay otras 
personas que saben explicar la situación mejor que yo.

<h2 style="text-align: center;"><a href="/resident-evil-2-dreamcast/"><strong>VOLVER</strong></a></h2>
