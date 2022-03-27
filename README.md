# cv04-p-grafika-i-svg-australia
website: https://jendahorak.github.io/cv04-p-grafika-i-svg-australia/

Mapa byla vytvořna pomocí mapshaper (https://github.com/mbloch/mapshaper).

Nejdříve data byla výrazně zjednodušena pro optimalizaci a to pomocí webového rozhraní díky jeho interaktivitě (https://mapshaper.org/).
Následně pak lokálně pomocí CLI bylo vytvořeno svg s požadovanými sloupci.

`mapshaper teritories.json -each 'name=STE_NAME21' -o teritories-svg-test.svg format=svg id-field=name svg-data=population `


Pozn.:
Vhodnější by bylo asi na nějakém souboru, který má větší počet ploch. Možná také upravit rozpětí intenzity barvy. Každopádně kód je adaptovatelný na libovolné SVG. 

Zdroj dat: https://www.abs.gov.au/
