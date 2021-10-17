# SiGeNuRaX #
SiGeNuRaX ( Sistema Generador de Numeros Random ) es una Web basada en un randomizer para elegir a una o varias personas.

## Installation ##

Para poder usar este Software Web es necesario descargar este repositorio de git.


> Mediante git:

 ```bash
 git clone https://github.com/Ra1NuX/SiGeNuRaX.git
 
 ```
#

> Descarga normal:

> https://github.com/Ra1NuX/SiGeNuRaX/archive/refs/heads/master.zip


## Usage ## 
  Para empezar a usar esta aplicación web es necesario abrir el archivo html llamado index ( index.html ) para la opción normal, o el archivo html llamdado random ( random.html ) para la opción aleatorio mediante el explorador web de tu elección. ( Testeado con Google Chrome , Opera , Opera GX, y demas exploradores basados en Chromium)


  Existen dos modos de uso de este pregrama : 
  
  
##### Modo Normal ######

  > > Cuando se selecciona la opción normal no existe numero aleatorio, este numero lo elije una persona, por lo cual no existe un final. Si el numero elegido resulta ser el correcto habria que pulsar dos veces el botón con el numero indicado para seleccionarlo de color "correcto". 

##### Modo Random ######

  > > Cuando se selecciona la opción Random (Aleatorio) existen dos numeros aleatorios diferentes por cada sesión ( para cambiar los numeros pulsar F5 ) , este numero se elije mediante la siguiente función:
  ```bash
 Math.floor((Math.random() * TotalNum) + 1);
 ```
  > > La aplicación concluye cuando se pulsan los numeros "correctos" en este momento Aparece un mensaje en pantalla < Se acabo! > Y ya no se podra elegir ningun otro numero, ( para volver a empezar pulsar F5 ).
  #
  #
  #

*Created by Ra1NuX*   
  > > Raimundo Martínez Nuñez.

