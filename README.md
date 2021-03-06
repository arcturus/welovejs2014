welovejs2014: Firefox Workshop
==============================

##Intro

Este repositorio contiene el código usado para el workshop: **Tus primeros pasos con Firefox OS**

##Qué vamos a hacer?
Vamos a crear una aplicación desde 0, pasando por los conceptos básicos del desarrollo de Firefox OS.

En concreto vamos a desarrollar una _lista de contactos_ del sistema, una mini aplicación de contacts.

## Cuáles son los pasos que vamos a seguir?
  * Mini install party: nos aseguramos que todos tengamos instaldo Firefox Nightly y el simulador de Firefox OS: https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/ también jugaremos un poco con el simulador para ver algunas de las caracteristicas de Firefox OS.
  * Primer paso: definir un manifest para nuestra web app y entender los permisos y distribucion. Empezar a usar el simulador e instalar el esqueleto de nuestra app.
  * Segundo paso: uso de algunas APIs nuevas en Firefox OS, como mozContacts.
  * Tercer paso: interacción con otras aplicaciones, Web Activities.
  * Cuarto paso: aplicación de building blocks (Firefox OS Look & Feel).

## Cómo funciona este repo?
Para cada uno de los pasos vamos a tagear una versión, así si quieres saltarte algunos pasos o ver como es un paso específico puedes descargartelo

## Pasos

### Paso 1: Definiendo el manifest
Puedes encontrar más información relativa  a los campos que puedes usar en el manaifest de tu webapp aquí:

https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Otra lectura recomendable es el siguiente enlace que habla sobre las distintas APIs en FirefoxOS y los permisos requereidos:

https://developer.mozilla.org/en-US/docs/WebAPI

Puedes descargar este paso aquí:

https://github.com/arcturus/welovejs2014/releases/tag/paso-1

### Paso 2: Usando la API de contactos
En este segundo paso utilizarmos la API de contactos para traernos la lista de contactos que hay en el sistema y pintarlos en pantalla.

Podeis obtener más información de cómo se usa la API de contactos aquí:

https://developer.mozilla.org/en-US/docs/WebAPI/Contacts

También podeis consultar la referencia de un objeto mozContact que representa los datos que se almacena por contacto:

https://developer.mozilla.org/en-US/docs/Web/API/mozContact

De nuevo puedes descargar el progreso de este paso en el siguiente link:

https://github.com/arcturus/welovejs2014/releases/tag/paso-2


### Paso 3: Interacción con otras apps
Ahora llega el momento de hacer que nuestra aplicación interactue con el resto de aplicaciones del sistema.

Esto se realiza mediante el uso de Web Activities, puedes aprender más sobre web activities aqui:

https://developer.mozilla.org/en-US/docs/WebAPI/Web_Activities

En nuestro caso vamos a usar 2 web activities, una para realizar llamadas a los contactos que tengan número de teléfono y
otra para cambiar la foto al contacto.

De nuevo puedes descargar el progreso de este paso en el siguiente link:

https://github.com/arcturus/welovejs2014/releases/tag/paso-3
