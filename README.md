Hermed mit projekt til faget internetteknologier.

Det lykkedes mig ikke at få tilføjet cors således at front- og backend rent faktisk kan kommunikere med hinanden. Jeg forsøgte at følge nedenstående vejledning, som du ville kunne se, hvis du kigger i koden:
https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-2.1

Jeg besluttede mig til sidst for at lave begge dele færdig uden CORS og brugte derfor PostMan til at verificere at API'et fungerer som det skal.

Du kan køre programmet fra Visual Studio og gøre det samme. Ip'en er http://localhost:55567/, og de tilhørende metoder er POST- og GET metoder:
GET http://localhost:55567/api/text - returnerer den text som skal stå på about-me siden
POST http://localhost:55567/api/text/"new text" - erstatter ovennævnte tekst med "new text"
GET http://localhost:55567/api/images - returnerer et array med data urls til sitets billeder. Disse gemmes er gemt i en JSON fil på serveren
POST http://localhost:55567/api/images/"new image" - tilføjer data url'en "new image" til ovennævnte fil.

Der er i javascript skrevet kode, som kalder de nævnte metoder, men som nævnt virker det ikke.