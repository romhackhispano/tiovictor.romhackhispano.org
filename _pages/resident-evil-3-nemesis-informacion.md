---
title: "Información de Resident Evil 3: Nemesis"
permalink: /resident-evil-3-nemesis/informacion/
header:
  overlay_image: /img/headers/pages/ResidentEvil3Header.jpg
comments: false
---

<h2 style="text-align: center;"><strong><a href="/resident-evil-3-nemesis/informacion/">INFORMACIÓN</a> - <a href="/resident-evil-3-nemesis/descargar/">DESCARGAS</a> - <a href="/resident-evil-3-nemesis/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Registro de revisiones](#punto1)
2. [Cómo aplicar un parche .XDELTA](#punto2)
3. [Instrucciones para aplicar el parche de traducción en PlayStation](#punto3)
4. [Instrucciones para aplicar el parche de traducción en Dreamcast](#punto4)
5. [Instrucciones para aplicar el parche de traducción en GameCube](#punto5)
6. [Instrucciones para aplicar el parche de traducción en PC](#punto6)
7. [Instrucciones para aplicar los paquetes de texturas HD traducidas](#punto7)
8. [Consejos para usar la modificación en consola real](#punto8)

### Registro de revisiones<a name="punto1"></a>

* 1.0 - Primera versión del parche:
   - Se han revisado todos los textos del juego.
   - Incluye un doblaje fan al castellano dirigido por R.E.C. (Resident 
   Evil Castellano). No habrá parches con solo textos.
   - Se ha convertido la traducción a la versión NTSC-U de PlayStation 1.
* 1.1 - Lanzamiento del parche en PC GOG y correcciones menores:
   - Se ha publicado el parche en las versiones de PC. Son compatibles 
   la versión original española en CD y la versión española del 
   relanzamiento de GOG en su versión 1.0hotfix4. La versión para 
   Classic ReBIRTH sigue en desarrollo.
   - Se ha incluido el pack de texturas en castellano para los mods de 
   texturas HD, totalmente hechas de cero, compatibles con la versión 
   de GameCube y el emulador Dolphin. El pack correspondiente para la 
   versión Classic ReBIRTH/teamx saldrá junto con el parche de doblaje 
   para esa versión.
   - Se ha corregido el texto incompleto al desbloquear atuendos en la 
   versión PAL España para PlayStation. Gracias a Daretaku por el aviso.
   - Unificada la expresión «cierre sencillo» en relación a los cierres 
   que se pueden abrir con la ganzúa.
   - Corregidas varias erratas menores y traducciones raras en los 
   textos. Gracias a xulikotony por los avisos.
   - Reescritas las instrucciones para aplicar el parche en Dreamcast 
   por estar incompletas (por un lado) y por actualización del programa 
   Universal Dreamcast Patcher (por el otro).

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

**Necesitarás extraer la imagen del CD de o bien la versión PAL España de 
Resident Evil 3 en formato .BIN/.CUE (código de juego SLES-02532), o bien 
la versión estadounidense (código de juego SLUS-00923).** Para ello te hará 
falta un lector de DVD/BluRay y un programa de copiado de discos ópticos 
(como ImgBurn o Alcohol 120%). Si necesitas ayuda, busca tutoriales sobre el 
uso de estos programas en Internet.

Esta es la suma de comprobación del disco en las versiones compatibles:

CD DE LA VERSIÓN PAL ESPAÑOLA (SLES-02532):
```
  CRC-32: 1b944257
     MD5: 5a82299e20665dbbb011ae11dbabd13a
   SHA-1: cb17a4571b45c49645ceede2121a046f12e59981
```

CD DE LA VERSIÓN NTSC-U (SLUS-00923):
```
  CRC-32: 132bb3e6
     MD5: 03ccf2f717dad9168640f518dd4e3e80
   SHA-1: c5993ac3ea6efb4181554aa32d8749a7f728a7ad
```

**Una vez hayas comprobado qué versión tienes del juego, podrás aplicar los 
parches correspondientes siguiendo las instrucciones del punto 3.**

### Instrucciones para aplicar el parche de traducción en Dreamcast<a name="punto4"></a>

**Necesitarás extraer la imagen del GD-ROM de la versión Resident Evil 3 PAL 
española/francesa (código de juego T-7021D) en formato .GDI (método TOSEC) o 
.BIN/.CUE (método Redump).**

Lo más fácil y asequible es tener un adaptador de tarjetas SD para tu 
consola (que va en el puerto SERIAL) y utilizar el programa SDRip. 
Si necesitas ayuda, busca tutoriales sobre el uso de estos programas en 
Internet.

Asegúrate de que has volcado tu disco correctamente. Estas son las sumas de 
comprobación, o checksums, del disco en formato GDI (no se corresponderán 
con el formato ReDump):

GDI DE LA VERSIÓN PAL EUROPEA (T-7021D):
```
MD5 de track01.bin: b8b736a6a5c9887325d614bdf622bd90
MD5 de track02.raw: d1838bcbca4a24b39deddeae2a9d371a
MD5 de track03.bin: 612b527af3fd5cb69280235c38179a3d
```

BIN DE LA VERSIÓN PAL EUROPEA (T-7021D):
```
MD5 de track01: b8b736a6a5c9887325d614bdf622bd90
MD5 de track02: 9cca4624e62f04dc398aed22b5370a34
MD5 de track03: 612b527af3fd5cb69280235c38179a3d
```

**Una vez confirmes que tienes tu copia de seguridad en orden, es hora de 
descargar el Universal Dreamcast Patcher de Derek Pascarella** (puedes conseguirlo en **[su página web](https://github.com/DerekPascarella/UniversalDreamcastPatcher/releases/)**)**.** 
Las siguientes instrucciones se corresponden con la versión 2.0.

El programa es muy sencillo:
 - Selecciona el «Apply Patch» (Aplicar parche) de la parte superior de la 
   ventana.
 - Pulsa en el primer botón «Browse» (Buscar), al lado del cuadro de texto 
   que dice «Source disc image» (Imagen de disco original).
 - Selecciona la copia de seguridad del disco que quieras parchear.
 - Pulsa en el segundo botón «Browse» (Buscar), al lado del cuadro de texto 
   que dice «DCP patch file» (Archivo de parche DCP).
 - Selecciona el parche en formato DCP que corresponda al disco que hayas 
   seleccionado.
 - Pulsa en el tercer botón «Browse» (Buscar), al lado del cuadro de texto 
   que dice «Patched disc image output folder» (Carpeta de salida de la 
   imagen de disco parcheada).
 - Selecciona la carpeta donde quieras que se guarde la imagen GDI 
   modificada.
 - Haz clic en el botón «Apply patch» (Aplicar parche) de la parte inferior 
   de la ventana para empezar el proceso de parcheado.
 - Si todo va bien, aparecerá una ventana con el texto «Patch applied 
   successfully», indicando que ya se ha creado una copia parcheada de tu 
   imagen de disco.

### Instrucciones para aplicar el parche de traducción en GameCube<a name="punto5"></a>

**Necesitarás extraer la imagen del miniDVD de la versión PAL europea de 
Resident Evil 3 en formato .ISO (código de juego GLEP).** Si necesitas ayuda, 
busca tutoriales sobre cómo hacer copias de seguridad de discos de GameCube 
en Internet.

Asegúrate de que has volcado tu disco correctamente. Estas son las versiones 
compatibles y sus respectivas sumas de comprobación, o checksums:

DISCO DE LA VERSIÓN EUROPEA DE GAMECUBE (CÓDIGO GLEP):
```
  CRC-32: 6c368ef2
     MD5: be608fb975ad73d792244a2e0a286693
   SHA-1: 4fd9202584a6da624607b5e2e0c468e9a310048c
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
   - Copia la carpeta «doblaje_esp» y el archivo «winmm.dll» a la raíz de la 
     carpeta del juego.
   - Utiliza DeltaPatcher para aplicar los parches XDELTA correspondientes 
     a los ejecutables que estés utilizando. RECOMENDAMOS ENCARECIDAMENTE 
     UTILIZAR LA OPCIÓN «Backup original file».

Estos son los ejecutables compatibles y sus respectivas sumas de 
comprobación, o checksums:

VERSIÓN CD ESPAÑOLA 1.0
```
  Nombre: ResidentEvil3.exe
  CRC-32: b38085b6
     MD5: 7e839e84470843605a4c3feb49b630cf
   SHA-1: b74a0412535e38ca77d59a24c58af65a2ef69f67

  Nombre: RE3_MERCE.exe
  CRC-32: 4723a636
     MD5: 5702c3a84caed0e4677fcb13e1dc2f33
   SHA-1: f86082b6b9b4406a69a5352951c9890b98f473b9
```

VERSIÓN GOG ESPAÑOLA 1.0 hotfix 4
```
  Nombre: ResidentEvil3.exe
  CRC-32: e3982f7d
     MD5: 63d620d67a5a8e13b5bcc40a9c45d324
   SHA-1: d0c12920aaada59c475728032ae49bc1aa536f88

  Nombre: RE3_MERCE.exe
  CRC-32: ace2fa0c
     MD5: d04b88807a834f69145507e1a02999ec
   SHA-1: cfda37fe5f7787e4cff85abd801440d3be034b7b
```

#### CÓMO APLICAR EL PARCHE A LA VERSIÓN CLASSIC REBIRTH
   - Asegúrate de haber seguido las instrucciones de instalación del Classic 
     ReBIRTH al pie de la letra, sobre todo la de copiar el ejecutable de la 
     versión 1.1.0 de SourceNext.
   - Copia las carpetas «doblaje_esp» y «Zmovie», así como los archivos 
     «winmm.dll» y «mod_spanishRECdub_crypto.7z» a la carpeta del juego, 
     sobrescribiendo los archivos cuando sea necesario.

Ejecuta la aplicación «BIOHAZARD(R) 3 PC.exe» y, dentro del selector de mods 
de Classic ReBIRTH, selecciona «Biohazard 3 SourceNext: doblaje por Resident 
Evil Castellano v1.0».

Si deseas utilizar el doblaje con otros mods, será necesario que dicho mod 
pueda cargar otros mods con el selector de Classic ReBIRTH.

### Instrucciones para aplicar los paquetes de texturas HD traducidas<a name="punto7"></a>

**PARA CLASSIC REBIRTH:**  
Para utilizar el paquete de texturas HD complementario en la versión Classic 
ReBIRTH, solo tienes que copiar la carpeta «hires» a la raíz de la carpeta 
donde tengas instalado el juego con Classic ReBIRTH.

AVISO IMPORTANTE: se sobrescribirán algunas texturas. No podemos hacer nada 
para distinguir las texturas del nuestro parche, así que guarda una copia de 
seguridad de las texturas hires si lo necesitas.

**PARA DOLPHIN:**  
Para utilizar el paquete de texturas complementario en la versión para 
GameCube mediante el emulador Dolphin, tienes que copiar la carpeta Textures 
a la carpeta que tengas asignada como «ruta de carga» (Load Path en inglés) 
dentro del emulador.

Puedes ver cuál es tu ruta de carga si vas a Configuración -> Rutas -> Ruta 
de carga (Settings -> Paths -> Load Path).

Si ves que no se aplican algunas texturas, es posible que tengas otro pack 
de texturas HD interfiriendo con el nuestro y tendrás que quitar o el pack o 
las texturas afectadas.

### Consejos para usar la modificación en consola real<a name="punto8"></a>

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

<h2 style="text-align: center;"><a href="/resident-evil-3-nemesis/"><strong>VOLVER</strong></a></h2>
