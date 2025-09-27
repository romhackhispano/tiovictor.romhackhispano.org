---
title: "Información de Alone In The Dark 4 para Dreamcast"
permalink: /alone-in-the-dark-dc/informacion/
header:
  overlay_image: /img/headers/pages/AITD4DCHeader.jpg
comments: false
---

<h2 style="text-align: center;"><strong><a href="/alone-in-the-dark-dc/informacion/">INFORMACIÓN</a> - <a href="/alone-in-the-dark-dc/capturas/">CAPTURAS</a> - <a href="/alone-in-the-dark-dc/descargar/">DESCARGAS</a></strong></h2>
### REGISTRO DE VERSIONES

* 1.0 - Primera versión, juego traducido y doblable al 100%.
  - Se han adaptado todos los textos posibles de la traducción original, corrigiendo erratas 
y defectos menores, adaptando la estructura de párrafos dentro de los documentos.  
  - Se han traducido todos los textos dedicados a Dreamcast.  
  - Se ha corregido la fuente para que los caracteres acentuados no destaquen respecto al 
resto de letras (Solo en documentos).  
  - Se han añadido (De forma exclusiva para esta versión) voces dobladas en dos puntos que 
solo se escuchaban en inglés (La frase de Carnby cuando ve los restos del hombre herido y 
las voces que dicen &laquo;Aline&raquo; en el espejo de De Certo) en el resto de versiones.  
  - Se han traducido los gráficos del estado de salud de los personajes (No estaban traducidos 
en el resto de versiones).

* 1.0.1 - Correcciones variadas en el parcheador y en los créditos:
  - Restaurada la acreditación de Releon.
  - El programa verifica que haya un mínimo de GBs libres en el 
disco duro antes de empezar a funcionar, avisa de la necesidad de 
tener instalado Visual Studio 2015, corrige varios errores en 
Windows 10.
  - Se ha mejorado el proceso de conversión de vídeo al formato 
intermedio, aprovechando las CPUs multinúcleo.
  - Se ha añadido un nuevo formato de salida: "GDI (lento)", que 
recodifica los vídeos doblados en su totalidad en vez de cambiar 
solo la pista de audio. Este modo está pensado para usuarios de 
emuladores de disco óptico (ODE) que tengan problemas a la hora de 
ver la introducción o cualquier otro de los vídeos doblados.  
El proceso lleva entre 4 y 8 horas según la CPU (el compresor 
es antiguo y utiliza un solo núcleo, así que de nada sirve tener 
doce) y la codificación mantiene el tamaño del archivo original 
sin provocar una gran pérdida visual.

* 1.0.2. - Corrección adicional en el parcheador:
  - Añadida una comprobación adicional para verificar que el 
programa adxencd.exe no esté dañado durante el arranque del 
parcheador.

### CÓMO CONSEGUIR LOS ARCHIVOS DEL DOBLAJE
Debido a que el juego no tiene subtítulos, se ha optado por hacer que **el 
parcheador obligue a tener en las carpetas Audio y Video los archivos con el 
doblaje en castellano.** Este parcheador reconoce los audios de las versiones 
de PC y de PlayStation 2 (No es compatible con la versión de PlayStation 1 
por complicaciones a la hora de identificar los audios).

A continuación indicaré los archivos necesarios según la versión que tengas más a mano.

#### VERSIÓN DE PC

* NOTA: Si no queréis reinstalar el juego, podéis obtener los archivos mencionados directamente 
de los discos indicados.  
* Todos los archivos .WAV de la carpeta Dialog (Setup/Dialog en el Disco 1) han de ir en la carpeta 
Audio que hay junto al Parcheador.  
* Los siguientes archivos .BIK de la carpeta Movies: A111_122, A112_167, INTRO (Disco 2), A825_165, 
C808_052, C813_061 y EXTRO (Disco 3) deben ir en la carpeta Video (Sin acento) que hay en el 
parcheador.

#### VERSIÓN DE PLAYSTATION 2 (Recomendada por su mayor calidad)

* Los archivos SPANISH.FAT y SPANISH.NOB de la carpeta NOB (Audio).  
* Los archivos A111_122.SPA, A112_167.SPA, INTRO.SPA), A825_165.SPA, C808_052.SPA, C813_061.SPA 
y EXTRO.SPA de la carpeta MOVIES30\MULTI (Video).

### COMO APLICAR EL PARCHE DE TRADUCCIÓN

El parche está pensado para ser aplicado a una copia de seguridad de tu juego
original. Sabemos que en el caso de la Dreamcast no es fácil que un usuario
normal pueda hacerse un backup por sus propios medios...

**Necesitarás las dos imágenes en formato .GDI de Alone in the Dark 4, versión 
PAL inglesa, y el programa de parcheado.** La mejor opción es volcar tus 
discos originales. Si puedes hacerte tus propios backups a través de un BBA, 
un adaptador SD o cualquier otro método, mejor. De lo contrario, tendrás que 
recurrir a un amigo para que haga la copia de respaldo.

Los creadores de este parche están totalmente en contra de la piratería y 
han creado esta traducción de forma amateur y altruista para aplicarla a una 
copia de seguridad de tu juego original.

El parcheador **SOLO ES COMPATIBLE CON EL FORMATO .GDI.** No busques formas de 
convertir imágenes en .CDI, .MDF, .MDS, .NRG o .ISO a .GDI, porque aunque 
puedan convertirlas, es imposible que el resultado de estas imágenes sea 
compatible con el parcheador.

El parcheador de PacoChan permite parchear o los dos GDIs de una sentada o 
un disco concreto. En esta ocasión, la traducción puede exportarse a dos 
formatos: GDI (Para su uso en emuladores o con un sistema de sustitución de 
lectores de GD, como GDEMU) o NRG (Para su uso en consola real con CDs de 
80 minutos).

El formato GDI tiene dos métodos de salida: el rápido (que no recodifica los 
vídeos sino que sustituye las pistas de audio, tarda apenas una hora, pero 
da problemas de compatibilidad en ciertos casos) y el lento (recodifica los 
vídeos doblados, tarda entre 6 y 9 horas, pero es el más compatible, es 
decir, da menos problemas). Sugerimos que hagas el proceso rápido y si el 
juego se bloquea o da problemas al darle a Nueva partida o al reproducir un 
vídeo doblado, rehagas los GDI con el método lento.

**AVISO: DEBIDO A LA ANTIGÜEDAD DEL PROGRAMA DE CODIFICACIÓN DE VÍDEO, CREAR 
LAS IMÁGENES DE LOS DOS DISCOS EN FORMATO NRG PUEDE TARDAR ENTRE 8 A 12 
HORAS SEGÚN TU CPU.** El programa que compila los vídeos no reconoce los otros 
núcleos de una CPU multinúcleo, así que la velocidad va supeditada a la que 
tiene cada núcleo.

En el caso de que el parcheador de un error, mándanos una captura de 
pantalla del mismo junto con el archivo log.TXT que generará el programa en 
la carpeta donde se encuentre. Es posible que los antivirus interfieran con 
el programa durante su funcionamiento, pero NO debes desactivarlos mientras 
utilizas el programa.

Si quieres distribuir estos parches o ponerlos en tu página web, por favor, 
consúltanos primero. Bajo ningún concepto distribuyas o cuelgues en internet 
imágenes ya parcheadas. La traducción está hecha para ser distribuida en 
forma de parche y para ser usada para los legitimos poseedores del juego 
original.

### CÓMO COPIAR EL JUEGO PARA USARLO EN UNA DREAMCAST

Es importante tener la última versión disponible del programa Alcohol 120%. 
Durante nuestras pruebas hemos utilizado la versión 1.9.8.

El proceso de copia depende de la grabadora, la marca del CD-R que utilices 
y tu consola. **En la mayoría de los casos, hay que copiar ambos discos en 
formato RAW DAO a una velocidad de 16x, aunque otros casos que han 
funcionado son DAO/SAO a velocidades de 4x o 8x.**

Ten en cuenta que, en 2020, la calidad de los medios físicos, tanto en CD 
como DVD, ha caído a mínimos históricos, y la mayoría de discos que hay en 
tiendas físicas tienen una alta probabilidad de dar problemas. Busca una 
marca que no vaya a dar problemas (hay más información detallada en 
Internet).

Las imágenes GDI no son compatibles con ningún formato de CDs. 
Si quieres jugar el juego en tu consola real mediante discos CD-R, debes 
seleccionar la opción "NRG (para consola real)".

### SOLUCIÓN DE PROBLEMAS

* El parcheador muestra un código desconocido y no crea bien las imágenes: 
     * En muchos casos el problema se resuelve al utilizar el parcheador en 
     otro ordenador. Copia toda la ventana con el error a un archivo .txt, 
     incluye el archivo log.txt que aparecerá junto al parcheador, súbelos a 
     un hosting tipo MediaFire o MEGA y envíanos los enlaces a los posts 
     oficiales en EOL o Traducciones del Tío Víctor.
* Mi Dreamcast no lee los discos que he copiado:
     * Ver sección COMO COPIAR EL JUEGO PARA USARLO EN UNA DREAMCAST. 
     Probablemente tengas que configurar la velocidad y formato de 
     grabación, o estés utilizando una marca de CDs de mala calidad 
     (Por ejemplo, CD-R Verbatim comprados a partir de principios de 2014).
* Alcohol 120% da error al intentar grabar una de las imágenes del juego:
     * O hay un problema con tu grabadora, o utilizas una versión antigua de 
     Alcohol 120%. Comprueba que puedas grabar otras imágenes correctamente.
* No puedo coger un objeto que se encuentra en un nivel:
     * Hemos visto que el juego original ya tenía algunos defectos de 
     colisiones. En la mayoría de los casos, hay que ponerse en una posición 
     demasiado precisa para obtenerlos (Sobre todo con los amuletos de 
     guardado, en especial el que está al lado del círculo de piedras
     en la aventura de Carnby). Si ocurre con un objeto vital para el 
     desarrollo del juego, contáctanos.
* El vídeo de introducción y el del final se oyen con chasquidos:
     * A día de hoy, no hemos podido replicar las condiciones para que una 
     Dreamcast lea correctamente el formato de vídeo de este juego durante 
     más de un minuto y desde un CD-R sin que suenen chasquidos. 
     Hemos rebajado el volumen de los audios doblados para minimizar el 
     problema, pero ha llegado a pasar en ODEs. Si oyes chasquidos en 
     emuladores (Demul, NullDC...) es probable que sea un fallo del emulador 
     o de su configuración.
* El vídeo de introducción no se reproduce (Exportando GDIs):
    * Esto suele pasar por dos motivos: O que el vídeo no se haya manipulado 
    bien (Para comprobarlo, vuelve a generar los discos traducidos) o un 
    fallo de compatibilidad (Las últimas versiones de GDEMU dan problemas).
    Prueba a generar los GDIs con el modo lento.
* El parcheador no es compatible con las nuevas releases de Redump
   (BIN/CUE):
    * ¡Eres un pirata! Por una sencilla razón: A día de hoy, es imposible que 
    un usuario común pueda sacar copias de seguridad de sus GD-ROMs con el 
    formato de Redump, ya que ellos utilizan lectores modificados. Hasta que 
    a alguien no le dé por hacer un programa similar al volcador de GD-ROMs 
    a tarjetas SD de jjodm que escupa BIN/CUEs, estos no serán compatibles 
    ni vamos a dar soporte alguno a este formato. Avisados quedáis.

<h1 style="text-align: center;"><strong><a href="/alone-in-the-dark-dc/">VOLVER</a></strong></h1>


