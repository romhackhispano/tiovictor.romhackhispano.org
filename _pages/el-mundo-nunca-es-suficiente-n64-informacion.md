---
title: Información de El Mundo Nunca es Suficiente
permalink: /el-mundo-nunca-es-suficiente-n64/informacion/
header:
  overlay_image: /img/headers/TWINEHeader.jpg
date: '2015-06-02 02:09:22 +0200'
date_gmt: '2015-06-02 00:09:22 +0200'
comments: false
---
<h2 style="text-align: center;"><strong><a href="/el-mundo-nunca-es-suficiente-n64/informacion/">INFORMACIÓN</a> - <a href="/el-mundo-nunca-es-suficiente-n64/descargar/">DESCARGAS</a> - <a href="/el-mundo-nunca-es-suficiente-n64/capturas/">CAPTURAS</a></strong></h2>

El juego ha sido testeado en consola real y en los emuladores Project64 1.6 y 1964.

Ambos emuladores pueden ejecutar el juego, pero con defectos de vídeo y sonido. 
Recomendamos poner la configuración del juego en el archivo de propiedades de ROMs de 
cada emulador antes de jugar, y el uso de los siguientes plugins (Gracias a la lista de 
BigHead):  
- Plugin de vídeo: Glide64 v1.0 FINAL, GlideN64.  
- Plugin de audio: Azimer's HLE.  
- Plugin RSP: Plugin RSP de Jabo y Zilmar.

También recomendamos activar el Expansion Pak en las opciones de emulación (Suele aparecer 
como un selector de RAM, seleccionar 8 MB)

En el caso de 1964, dirígete a la carpeta donde está el ejecutable del emulador, abre con el 
Bloc de notas el archivo ROM_properties.ini y pega el siguiente texto:

```
[D8C74049-29CDD8C4-C:50]  
Game Name=TWINE  
Comments=Playable! (gun gfx missing)  
Alternate Title=007 - The World is Not Enough (E) [T-Spa]  
Check Self-modifying Code=8  
Emulator=1  
RDRAM Size=2  
Max FPS=4  
Save Type=6  
TLB=1  
EEPROM Size=1  
Counter Factor=1  
Use Register Caching=1  
FPU Hack=1  
DMA=1  
Link 4KB Blocks=2  
Advanced Block Analysis=1  
Assume 32bit=2  
HLE=0  
RSP_RDP_Timing=2  
CFB_RW=2  
NumberOfPlayers=1
```

En el caso de Project64, dirígete a la subcarpeta Config dentro de la  
carpeta del emulador, abre con el Bloc de notas el archivo Project64.rdb  
y pega el siguiente texto:

```
[D8C74049-29CDD8C4-C:50]  
Good Name=007 - The World is Not Enough (E) (M3)  
Internal Name=TWINE  
RDRAM Size=8  
Counter Factor=2  
Save Type=First Save Type  
CPU Type=Recompiler  
Self-modifying code Method=Protected Memory  
Use TLB=Yes  
Linking=Off  
Reg Cache=Yes  
Use Large Buffer=No  
Status=Compatible  
Plugin Note=speech bad (see GameFAQ)  
Delay SI=No  
SP Hack=No  
Core Note=  
Audio Signal=Yes  
Clear Frame=0  
Resolution Width=-1  
Resolution Height=-1
```

<h2 style="text-align: center;"><a href="/el-mundo-nunca-es-suficiente-n64/"><strong>VOLVER</strong></a></h2>

