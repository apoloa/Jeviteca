# Jeviteca

Esta web representa una wiki para Jevis.

Se ha empleado **Angular** para realizarla y **Bootsrap** con **Bootrap-Angular** para el diseño.

La aplicación parte de 3 vistas:

* Albums
	* Contiene una lista de albumes y al hacer click se abre una ventana con información más detallada.
* Bandas
	* Contienen una lista de Bandas y al hacer click se abre una ventana con información más detallada. En esta información se puede emplear para visualizar el contenido de los albums.
* Generos
	* Contienen una lista de Generos y al hacer click se abre una ventana con información más detallada. En esta información se puede ver los albums y se puede mostrar otra nueva ventana con más información.

Controladores
------------
Se han definido 3 controladores para cada una de las posibles ventanas que se pueden mostrar. Como se han hecho vistas de detalles, dichas vistas también se les ha añadido una controlador. Por último se ha generado un nuevo controlador para mostrar logica en la navegación de usuario.

Directivas
-----------
Se han creado 3 directivas para mostrar el contenido de cada linea de los 3 controladores para que sea más facil imporarlo en otra parte del proyecto. Se ha creado una nueva directiva para la tabla de Albums ya que se emplea en las tres vistas.

Factorias
----------
Se han realizado dos factorias. Dichas factorias nos permite conseguir enlaces a los elementos externos como Wikipedia o Youtube.

Providers
----------
Los providers al ser un tipo de objeto que permite una configuración inicial se ha empleado para añadir la logica de acceso desde el servidor (ficheros json). 

Services
-------------
Se han creado 2 Servicios, dichos servicios muestran una herencia. El primer servició es el que tiene la logica de acceso al localStorage del navegador, el segundo es el que implementa las funciones que se requerian y implementan el localStorage para su funcionamiento. 


