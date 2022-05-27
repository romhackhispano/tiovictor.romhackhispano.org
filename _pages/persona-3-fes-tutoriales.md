---
title: Tutoriales avanzados de Persona 3 FES
permalink: /persona-3-fes/tutoriales/
header:
  overlay_image: /img/headers/pages/Persona3FESHeader.jpg
comments: false
---
<h2 style="text-align: center;"><strong><a href="/persona-3-fes/informacion/">INFORMACIÓN</a> - <a href="/persona-3-fes/descargar/">DESCARGAS</a><br>  
<a href="/persona-3-fes/capturas/">CAPTURAS</a> - <a href="/persona-3-fes/tutoriales/">TUTORIALES AVANZADOS</a><br></strong></h2>

# Índice

1. [Cómo aplicar el parche de control del equipo de combate (Controllable Party Mod)](#tuto1)
2. [Cómo hacer un undub con la ISO fantraducida](#tuto2)

<a name="tuto1"></a>
## Cómo aplicar el parche de control del equipo de combate (Controllable Party Mod)

El archivo que necesitáis es el que se llama E168844E.pnach. El otro 
archivo, controllablePAL.asm, es el código original del mod para aquellos 
que quieran echar un vistazo (y si desean hacer modificaciones, que sean 
siempre y cuando se acredite a TODOS los que hayan participado desde el 
principio).

Hay dos formas de aplicar el parche: para usarlo con un emulador con soporte 
para parches o para el resto de casos, «quemándolo» en una copia de la 
imagen ISO del juego.

**VOY A JUGAR CON UN EMULADOR QUE ADMITE PARCHES EN FORMATO .PNACH:**

Vamos a utilizar como referencia el emulador PCSX2 en su versión para 
Windows/Mac/Linux (el emulador independiente, no la versión para RetroArch).
 1. Primero ejecuta el programa PCSX2.
 2. Activa la opción «Mostrar consola (Show Program Log)». La encontrarás 
    en la sección «Otros/Other» o «Depuración/Debug».
 3. Ejecuta el juego sin aplicar este parche.
 4. Al cabo de unos segundos, se mostrará en la barra del título de la 
    ventana de la consola del programa el nombre del juego, seguido de los 
    textos (PAL-E) [SLES-55354], seguido de un texto con ocho letras. Ese 
    texto (sin los corchetes []) es el nombre que debe tener el archivo 
    .pnach para que el emulador reconozca el parche, así que cambia el 
    nombre del archivo E168844E.pnach al que indique la parte indicada de la 
    ventana.
 5. Una vez el nombre del archivo sea el correcto, copia el archivo .pnach 
    dentro de la carpeta cheats del emulador. Suele encontrarse junto con 
    el ejecutable pcsx2.exe (puede cambiar según como tengas configurado 
    el emulador).
 6. Vuelve a ejecutar PCSX2.
 7. Asegúrate que la opción «Activar trucos/Enable cheats» esté activada. 
    La encontrarás en la sección «Sistema/System».
 8. Carga tu copia de seguridad del juego y ejecútala.
 9. Comprueba que puedas manejar al resto de personajes durante una 
    batalla en la que no esté el protagonista solo frente a los enemigos.

Si ya puedes controlar al resto de personajes, has acabado con el proceso. 
En caso contrario, revisa que no hayas hecho mal ninguno de los pasos. Si 
has seguido todos los pasos al pie de la letra, coméntanoslo por TraduSquare.

**VOY A JUGAR CON ALGO QUE NO ADMITE PARCHES EN FORMATO .PNACH:**

Vas a tener que modificar una copia de seguridad de tu ISO para aplicar el 
parche de forma permanente. Eso significa que este parche debe aplicarse 
DESPUÉS del resto de modificaciones, como, por ejemplo, la fantraducción al 
castellano.

Necesitarás el programa PS2 Patch Engine, por pelvicthrustman, para aplicar 
el parche (en Windows) sobre una ISO. Actualmente puede descargarse desde 
[esta página web](https://www.psx-place.com/threads/ps2-patch-engine-by-pelvicthrustman.19167/).

Este tutorial se limitará al programa para Windows. Estos son los pasos:

 1.  Ejecuta el programa ps2_patch_engine.exe.
 2.  Haz clic en «Browse».
 3.  Selecciona tu copia de seguridad (ya modificada con otras cosas si es 
     necesario) en formato .ISO y haz clic en Aceptar.
 4.  Selecciona la opción «PNACH» dentro del recuadro «Format».
 5.  Vuelve a hacer clic en «Browse».
 6.  Selecciona el archivo .PNACH y haz clic en Aceptar.
 7.  Debería encenderse el botón que pone «Patch» en la parte de abajo de 
     la ventana. Haz clic en ese botón.
 8.  Selecciona el nombre que tendrá la imagen ISO modificada con este mod. 
     No puedes sobrescribir la original.
 9.  Si todo va bien, el programa mostrará una ventana con una barra de 
     progreso mientras hace su trabajo y después cerrará esa ventana sin 
     ningún mensaje.
 10. Prueba el archivo ISO que ha creado este programa en un emulador antes 
     de copiarlo a donde quieras usarlo.

Si ya puedes controlar al resto de personajes, has acabado con el proceso. 
En caso contrario, revisa que no hayas hecho mal ninguno de los pasos. Si 
has seguido todos los pasos al pie de la letra, coméntanoslo por TraduSquare.

Si tienes Linux, [existe un equivalente llamado PS2 Pnacher que puedes descargar desde aquí.](https://github.com/Snaggly/PS2_Pnacher)

<a name="tuto2"></a>
## Cómo hacer un undub con la ISO fantraducida

**Necesitaréis vuestra copia de seguridad de Persona 3 FES, en su versión PAL o NTSC-U, con el parche 
de fantraducción ya aplicado, una copia de seguridad de la versión original japonesa de Persona 3 FES 
y el kit de undub que he preparado.**

<h3 style="text-align: center;">DESCARGA DEL KIT DE MODIFICACIÓN PARA UNDUBS (v1.2):</h3>

<h1 style="text-align: center;"><strong><a href="https://www.mediafire.com/file/q5bmry3k6uyi76z/KitUndubP3F12.7z/file" target="_blank">MEDIAFIRE</a> - <a href="https://mega.nz/file/Rdc2DA6Y#X9rYBBcP4uSPFdWfc4D-J-6cOhcH9QTJNJ7XuO8jg10" target="_blank">MEGA</a></strong></h1>

_CRÉDITOS DEL KIT DE UNDUB:_  
Programación del script: IlDucci, basada en el trabajo del SelfBootPack de FamilyGuy.  
Programación de herramientas de terceros: Igor Pavlov y el equipo OSS de 7-Zip, Jörg Schilling y el equipo 
OSS de las cdrtools, Roxfan, CUE, Snake128, TGEnigma y el equipo OSS de Amicitia, D3fau4

**Este kit solo funciona en Windows.** En caso de que salga un error de ISO no compatible, aseguraos de tener 
instalado 7Zip en vuestro PC.

He simplificado el proceso para que sea lo más sencillo posible:
 - **Pon en una misma carpeta los contenidos** del archivo comprimido **del kit de undub, la imagen 
   ISO de tu copia de seguridad de la versión PAL o NTSC traducida y la NTSC-J original.**
 - **Arrastra la imagen ISO de la versión NTSC-J al archivo "_1-Extraer ISO.bat".** Asegúrate de que nada 
   haya dado error.
 - **Arrastra la imagen ISO de la versión PAL o NTSC-U traducidas al archivo "_1-Extraer ISO.bat".**
   Asegúrate de que nada haya dado error.
 - Teniendo ya los archivos de la versión japonesa y de la versión traducida extraídos, **arrastra la 
   imagen ISO de la versión PAL o NTSC-U traducida al archivo "_2-Reinsertar todo a nueva ISO.bat".** 
   Asegúrate de que nada haya dado error _(el mensaje "Warning: Cannot add inode hints with -no-cache-inodes" 
   de mkisofs se puede ignorar)_.
   Aviso a piratones: no mezcléis ~~~los rayos~~ los archivos PAL con los NTSC-U. Luego lo lamentaréis 
   y vendréis a pedirme ayuda innecesariamente.
 - **Si todo ha ido bien y nada ha dado errores raros, deberías tener una nueva imagen ISO** en la misma 
   carpeta donde se encuentren los archivos .bat, cuyo nombre de archivo acabe en "_UNDUB.iso". **Ya tienes 
   versión con las voces japonesas y los textos en español.**

Varios incisos:
 - Técnicamente, este kit también se puede usar con versiones en inglés del juego. Para otras fantraducciones, 
   depende de las modificaciones técnicas que les hayan aplicado.
 - **No recomiendo utilizar los archivos de un undub ya existente.** ¿Por qué? Pues porque la fantraducción aplica 
   subtítulos a los vídeos al vuelo, a través de programación, y si utilizáis los vídeos de un undub, veréis unos 
   subtítulos molestando a otros subtítulos, y al final os costará leerlos.


<h2 style="text-align: center;"><a href="/persona-3-fes/"><strong>VOLVER</strong></a></h2>


