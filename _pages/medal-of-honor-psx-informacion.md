---
title: "Información de Medal of Honor"
permalink: /medal-of-honor-psx/informacion/
header:
  overlay_image: /img/headers/pages/MedalOfHonorHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/medal-of-honor-psx/informacion/">INFORMACIÓN</a> - <a href="/medal-of-honor-psx/descargar/">DESCARGAS</a> - <a href="/medal-of-honor-psx/capturas/">CAPTURAS</a></strong></h2>

# Índice

1. [Historia del proyecto](#mohinfo_1)
2. [Registro de revisiones](#mohinfo_2)
3. [Cómo aplicar un parche .XDELTA](#mohinfo_3)
4. [Instrucciones para aplicar el parche de traducción](#mohinfo_4)
5. [Instrucciones para usar la traducción en una PlayStation](#mohinfo_5)

### Historia del proyecto<a name="mohinfo_1"></a>

Había jugado bastante a los Medal of Honor antiguos para PC (Allied y 
Pacific Assault), así como a los de la era 360/PS3, y en su día llegué a 
comprar el pack de Medal of Honor + Medal of Honor Underground, con el canto 
blanco, poco antes de que dejaran de venderse juegos de PlayStation 1, pero 
reconozco que nunca llegué a abrir esa caja hasta 2023.

Estaba buscando un proyecto con el que volver a recordar lo que conlleva 
todo el proceso de la parte artística del doblaje de cara al Policenauts, y 
lo encontré en ese juego que no había abierto en veinte años. Y yo pensando, 
de nuevo, que sería un trabajito corto... Eso fue en diciembre de 2023.

Reconozco que, tras jugarme a ambos juegos para ir viendo de qué iba la 
película, me gustaron mucho, y también descubrí que la gente que decía que 
Alien: Resurrection para la primera PlayStation era el primer juego en 
tener controles de movimiento con ambos sticks... mentían. Simplemente, era 
el primer juego que imponía ese esquema de control. **Todos los que estamos 
acostumbrados a los sistemas de control de los juegos en primera persona 
ahora nos sentiremos muy cómodos con el esquema de control 4.**

Mientras ayudaba a Salvi Garrido a montar sus doblajes de los Resident Evil 
de los años 90, poco a poco fui montando este proyecto en sí, a ratitos. Ha 
habido mucho que hacer en este proyecto: reconstrucción de pistas de sonido 
con música de fondo, reconstrucción de vídeos localizados, evitar que los 
audios de los soldados no se pasaran de cierta duración o el juego se 
volvería loco por un desbordamiento de memoria... Pero no sería hasta 
octubre de 2024 cuando, por fin, pude empezar a grabar el doblaje en sí.

Fue un trabajo de chinos, la verdad. Me dio la estupidez de querer que tanto 
los personajes alemanes como franceses hablaran con acentos relativamente 
realistas. Sería gracias a Max Schübel, un actor de doblaje profesional 
hispanogermano residente en Barcelona, con quien podría encontrar la forma 
de distinguir ambos idiomas. Y es tan sutil, que ahora entiendo por qué en 
el doblaje castellano de Malditos Bastardos de Tarantino solo una de esas 
dos nacionalidades tiene acento.

También hubo una serie de contratiempos que llevaron a que la grabación de 
Hargrove tardara más de la cuenta, pero, como he dicho, la intención de este 
proyecto era volver a aprender a dirigir a actores y ver por dónde se podían 
torcer las cosas.

**Un detalle que hemos doblado por completo y que no tiene doblaje en ninguna 
de las versiones localizadas oficiales es que el truco "American Movie 
Mode"**, en el que los soldados alemanes hablan inglés (exclusivo del primer 
Medal of Honor) en vez de alemán, **ha sido doblado por completo al 
castellano. El truco ahora se llama "Alemanes en versión doblada".** ¿Mucho 
esfuerzo para un extra que solo verán unos pocos? Quizás.

Espero que este doblaje os guste.

**Si quieres distribuir estos parches o ponerlos en tu página web, por favor, 
consúltanos primero.** Bajo ningún concepto distribuyas o cuelgues en internet 
las imágenes del juego ya parcheado. La traducción está hecha para ser 
distribuida en forma de parche y para ser usada para los legítimos 
poseedores del juego original.

### Registro de revisiones<a name="mohinfo_2"></a>
* v1.0 - Primera versión del parche de traducción y doblaje:
   - Se han traducido todos los textos, gráficos, voces y vídeos.
   - Se han dejado sin doblar las grabaciones de los desarrolladores del juego y las entrevistas, quedando estas subtituladas.

### Cómo aplicar un parche .XDELTA<a name="mohinfo_3"></a>

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

### Instrucciones para aplicar el parche de traducción<a name="mohinfo_4"></a>

**Necesitarás extraer las imágenes de disco de Medal of Honor o Medal of 
Honor: Underground en sus versiones PAL inglesas (con los códigos de juego 
SLES-02470 y SLES-03124, respectivamente) en formato .BIN/.CUE.**

Asegúrate de que has volcado tu disco correctamente. Estas son las posibles 
sumas de comprobación, o checksums:

MEDAL OF HONOR 1 (SLES-02470)

```
  CRC-32: e5070481
     MD5: 5e2c8aaba7c3b939093584deb84711c8
   SHA-1: 8c2e96724118908833d0ca485760dd208238aa87
```

MEDAL OF HONOR: UNDERGROUND (SLES-03124)

```
  CRC-32: bdf1fbfd
     MD5: e15d095e046b0847d089e6b1d690cec9
   SHA-1: ee9a55cdf6e53e73fc88a51ea58369f8d33f6227
```

Una vez hayas comprobado qué versión tienes del juego, podrás aplicar los 
parches correspondientes.

### Instrucciones para usar la traducción en una PlayStation<a name="mohinfo_5"></a>

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

Lo mejor suele ser grabar los discos a la velocidad más baja posible, 
pero hemos visto casos en los que grabar a la máxima es la única forma de 
hacer que funcionen. Empieza siempre por la velocidad más baja.

**Actualmente, la gran mayoría de discos regrabables, tanto de tiendas 
pequeñas como de grandes superficies, dan problemas por su calidad.** Evita 
los discos cuyo fabricante no sea Ritek, Taiyo Yuden, Mitsubishi, etc. 
(Puedes ver su fabricante introduciendo el DVD-R en tu ordenador y 
leyendo sus especificaciones con ImgBurn).

Si quieres informarte sobre los fabricantes de discos, qué marcas comprar o 
dónde comprarlas, tendrás que buscar esa información en otra parte, ya que 
hay otras personas que saben explicar la situación mejor que yo.

<h2 style="text-align: center;"><a href="/medal-of-honor-psx/"><strong>VOLVER</strong></a></h2>


