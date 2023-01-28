---
title: "Información de Star Wars Episodio I Racer"
permalink: /star-wars-episodio-i-racer-para-nintendo-64/informacion/
header:
  overlay_image: /img/headers/pages/SWRacerHeader.jpg
comments: false
---

<h2 style="text-align: center;"><strong><a href="/star-wars-episodio-i-racer-para-nintendo-64/informacion/">INFORMACIÓN</a> - <a href="/star-wars-episodio-i-racer-para-nintendo-64/descargar/">DESCARGAS</a> - <a href="/star-wars-episodio-i-racer-para-nintendo-64/capturas/">CAPTURAS</a></strong></h2>

### Registro de revisiones

* 1.0 BETA: Primera versión
  - Todos los gráficos y subtítulos del juego están completamente
  traducidos al Castellano.
  - Faltan por añadir los caracteres de abrir exclamación y abrir
  interrogación. Algunas tildes muestran mal su sombra.
* 1.0 FINAL: Segunda versión
  - Revisados todos los textos del juego, eliminados recortes de 
  palabras, mejorados textos, añadidos los caracteres que faltaban,
  eliminado el selector de idioma obligando a mostrar solo el idioma
  español. Primera versión final de la adaptación.
* 1.01: Actualización menor
  - Corregido el solapamiento de la frase "Borrar piloto" en la 
  pantalla de selección de partidas.
* 1.02 FINAL: Actualización menor
  - Corregidos los textos relacionados con la temperatura de los 
  motores, ya no se salen de la pantalla.
  - Retoques menores adicionales.

### Cómo aplicar el parche de traducción:

Es necesario tener XDelta (para hacerlo más fácil utilizar XDeltaUI también)
y una copia de la ROM "Star Wars Episode I - Racer (E) (M3) [!].v64",
en formato .v64 (Byte Swapped).

Estos son los datos de la ROM original que debes tener para que funcione el
parche:
```
CRC1: 53ED2DC4
CRC2: 06258002

CRC32: EDE47E8A
MD5: DE98F1BCEB2C317BB0A9743282CE2C2E
SHA-1: D4968CE06B93705ED40FF4433279F587F62E3C26

```

Si la ROM es correcta, aplica el parche sobre la misma y guarda la ROM nueva
en otro archivo.

### Cómo jugar en los emuladores 1964 y Project 64:

**Los emuladores 1964 y Project64 no guardarán los datos de partidas guardadas 
si no se configura la ROM antes de jugar.**

**En el caso de 1964, dirígete a la carpeta donde está el ejecutable del 
emulador, abre con el Bloc de notas el archivo ROM_properties.ini y pega 
el siguiente texto:**

```
[E857ED95-6028F9AF-C:50]
Game Name=STAR WARS EP1 RACER
Comments=Playable! (Use 1964Video)
Alternate Title=Star Wars Episode I - Racer (E) [T-Spa]
Check Self-modifying Code=8
Emulator=1
RDRAM Size=1
Max FPS=4
Save Type=6
TLB=1
EEPROM Size=3
Counter Factor=1
Use Register Caching=1
FPU Hack=1
DMA=1
Link 4KB Blocks=1
Advanced Block Analysis=1
Assume 32bit=2
HLE=0
RSP_RDP_Timing=2
CFB_RW=2
NumberOfPlayers=1
```

**En el caso de Project64, dirígete a la subcarpeta Config dentro de la 
carpeta del emulador, abre con el Bloc de notas el archivo Project64.rdb 
y pega el siguiente texto:**

```
[E857ED95-6028F9AF-C:50]
Good Name=Star Wars Episode I - Racer (E) [T-Spa]
Internal Name=STAR WARS EP1 RACER
RDRAM Size=8
Counter Factor=2
Save Type=16kbit Eeprom
CPU Type=Recompiler
Self-modifying code Method=Check Memory & cache
Use TLB=No
Linking=Global
Reg Cache=Yes
Use Large Buffer=No
Status=Compatible
Plugin Note=
Delay SI=No
SP Hack=No
Core Note=
Clear Frame=0
Self Texture=0
Primary Frame Buffer=0
Culling=1
Emulate Clear=1
Audio Signal=No
Resolution Width=-1
Resolution Height=-1
```

<h2 style="text-align: center;"><a href="/star-wars-episodio-i-racer-para-nintendo-64/"><strong>VOLVER</strong></a></h2>


