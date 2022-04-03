# cv04-p-grafika-i-svg-australia
website: https://jendahorak.github.io/cv04-p-grafika-i-svg-australia/

Mapa byla vytvořna pomocí mapshaper (https://github.com/mbloch/mapshaper).

Nejdříve geometrie dat byla výrazně zjednodušena pro optimalizaci a to pomocí webového rozhraní díky jeho interaktivitě (https://mapshaper.org/).
Následně pak lokálně pomocí CLI bylo vytvořeno svg s požadovanými sloupci.

`mapshaper teritories.json -each 'name=STE_NAME21' -o teritories-svg-test.svg format=svg id-field=name svg-data=population `


**Pozn.:**
Vhodnější by bylo asi na nějakém souboru, který má větší počet ploch. Možná také upravit rozpětí intenzity barvy. Každopádně kód je adaptovatelný na libovolné SVG. Při připojení SVG s větší variabilitou populace by byla i větší variabilita barevných kateogorií. Ačkoliv se v zadání píše min. množství kateogorií 4, které na této konkrétní mapě reálně nejsou, ale kód by zvládl takové množství kategorií jaké má nastavení rozpětí variability barvy. 

Legenda vytvořená lineargradientem záhadně neodpovídá odstínům vygenerovaným v kódu i přestože rozpětí je stejné jako je rozpětí možných dostínů generovaných barev.

Zdroj dat: https://www.abs.gov.au/
