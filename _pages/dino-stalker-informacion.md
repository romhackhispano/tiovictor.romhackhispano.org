---
title: "Información de Dino Stalker"
permalink: /dino-stalker/informacion/
header:
  overlay_image: /img/headers/pages/DinoStalkerHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/dino-stalker/informacion/">INFORMACIÓN</a> - <a href="/dino-stalker/descargar/">DESCARGAS</a> - <a href="/dino-stalker/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Historia del proyecto](#dinostalkerinfo_1)
2. [Registro de revisiones](#dinostalkerinfo_2)
3. [Cómo aplicar un parche .XDELTA](#dinostalkerinfo_3)
4. [Instrucciones para aplicar el parche de traducción en PlayStation 2](#dinostalkerinfo_4)
5. [Instrucciones para usar la traducción en una PlayStation 2](#dinostalkerinfo_5)

### Historia del proyecto<a name="dinostalkerinfo_1"></a>

Allá por principios de 2023 me dio por hurgar en los juegos menos conocidos 
de las sagas de terror de Capcom, aprovechando el reciente descubrimiento de 
que estaba empezando a saber hacer cosas de romhacking que hacía apenas un 
par de años no sabía qué hacer.

Compré el Dino Stalker en su día de oferta, y, bueno, decidí darle una 
oportunidad traduciéndolo, ya que estaba. Siempre comento que me gusta hacer 
cosillas para matar el rato mientras avanzo los proyectos gordos... y esas 
cosillas acaban estirándose años. Este es un buen caso que sirve para 
desmitificar esta presunta pérdida de tiempo:
 - Llevé a cabo todo el proceso general de edición en solitario entre enero 
   y abril de 2023, a ratos sueltos. Para cuando acabé, tenía todos los 
   textos traducidos, así como todos los gráficos limpiados y editados. Pero 
   hubo una serie de problemas que dejaron el proyecto en barbecho.
 - Los archivos de los niveles estaban comprimidos. Utilizaban la misma 
   compresión de Resident Evil Survivor (porque ambos juegos fueron 
   desarrollados por la misma casa, TOSE), pero algo impedía la carga. 
   No fue hasta que pregunté en una comunidad de ingeniería inversa, Reshax, 
   allá por noviembre de 2023, donde Nenkai me indicó que el juego tenía 
   copias del valor de los tamaños de los archivos en el ejecutable. Ya con 
   esta información pude pincharlas y conseguir que los niveles modificados 
   cargaran con normalidad.
 - Había que hackear el juego para poder mostrar de una forma mínimamente 
   decente los textos de «FÁCIL», «NORMAL» Y «DIFÍCIL» en la tabla de 
   puntuaciones. En octubre de 2024 pude pillar a GriffithVIII libre para 
   que pudiese estudiarlo. Tendría tiempo para resolverlo en septiembre de
   2024.
 - Ya con el juego completamente modificado a mi gusto, solo quedaba 
   testearlo, pero a mí me gusta que, aparte de jugarlo yo, lo vean un par 
   de ojos nuevos. Es aquí cuando saturé al pobre Releon, que se ha estado 
   haciendo en el último par de años los testeos de casi todos mis proyectos 
   de fantraducción. No fue hasta mayo de 2025 cuando pudo ponerse con Dino 
   Stalker y darle la luz verde final.

Esta traducción está pensada para la versión europea de PlayStation 2. 
No tengo intención de convertirla a la versión estadounidense del juego 
(además, la versión de PS2 incluye soporte para PAL60, así que se ve tan 
bien como puede verse).

Si quieres distribuir estos parches o ponerlos en tu página web, por favor, 
consúltanos primero. Bajo ningún concepto distribuyas o cuelgues en internet 
las imágenes del juego ya parcheado. La traducción está hecha para ser 
distribuida en forma de parche y para ser usada para los legítimos 
poseedores del juego original.

### Registro de revisiones<a name="dinostalkerinfo_2"></a>
 * v1.0 - Primera versión de la traducción:
   - Se han traducido todos los textos, gráficos y vídeos.

### Cómo aplicar un parche .XDELTA<a name="dinostalkerinfo_3"></a>

Necesitarás el archivo original a modificar, el archivo xdelta 
correspondiente y la aplicación Delta Patcher (**[puedes conseguirla en su página web](https://github.com/marco-calautti/DeltaPatcher/releases/){:target="_blank"}**).

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

### Instrucciones para aplicar el parche de traducción en PlayStation 2<a name="dinostalkerinfo_4"></a>

Necesitarás extraer la imagen del DVD de Dino Stalker en su versión PAL 
europea (código de juego SLES-50930) en formato .ISO.

Una vez hayas comprobado qué versión tienes del juego, podrás aplicar los 
parches correspondientes.

Asegúrate de que has volcado tu disco correctamente. Estas son las posibles 
sumas de comprobación, o checksums:

```
  CRC-32: 2012f5c0
     MD5: 0fe2e9fd5a36f27bf1962f43ecf5a909
   SHA-1: f9401c6ece656a93906f4a198f16278fddd32c91
```

### Instrucciones para usar la traducción en una PlayStation 2<a name="dinostalkerinfo_5"></a>

**Estas instrucciones son para aquellas personas que, ya en la década de 2020, 
todavía utilicen discos «quemados» o «tostados» (DVD-R) para jugar con sus 
consolas reales y no utilicen sistemas modernos de emulación de disco óptico 
(los llamados ODE) u otros sistemas de carga de copias de seguridad a través 
de discos duros o memorias USB. Si tienes alguno de estos, no necesitas 
tanta complicación.**

Si quieres jugar a este parche de traducción en una consola real y con un 
DVD-R, necesitas que admita discos no originales, ya sea modificada con un 
chip o con otros métodos que existan. Si necesitas más información sobre 
esta parte, búscala en Internet.

Por lo general, puedes utilizar cualquier programa de grabación de discos 
(recomendamos ImgBurn o Alcohol 120%), y, en el caso de Alcohol 120%, 
utilices el preajuste para discos de PlayStation 2.

Por norma general lo mejor es grabar los discos a la velocidad más baja 
posible, pero hemos visto casos en los que grabar a la máxima es la única 
forma de hacer que funcionen. Empieza siempre por la velocidad más baja.

**Actualmente, la gran mayoría de discos regrabables, tanto de tiendas 
pequeñas como de grandes superficies, dan problemas por su calidad.** Evita 
los discos cuyo fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc. 
(Puedes ver su fabricante introduciendo el DVD-R en tu ordenador y 
leyendo sus especificaciones con ImgBurn).

Si quieres informarte sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, tendrás que buscar esa información en otra parte, ya que 
hay otras personas que saben explicar la situación mejor que yo.

<h2 style="text-align: center;"><a href="/dino-stalker/"><strong>VOLVER</strong></a></h2>


