# cv04-p-grafika-i-svg-australia

Mapa byla vytvořna pomocí mapshaper (https://github.com/mbloch/mapshaper).

Nejdříve data byla výrazně zjednodušena pro optimalizaci a to pomocí webového rozhraní díky jeho interaktivitě (https://mapshaper.org/).
Následně pak lokálně pomocí CLI bylo vytvořeno svg s požadovanými sloupci.

`mapshaper teritories.json -each 'name=STE_NAME21' -o teritories-svg-test.svg format=svg id-field=name svg-data=population `

Zdroj dat: https://www.abs.gov.au/
