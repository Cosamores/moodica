# MOODICA
## A música certa para o clima que você escolher


A aplicação gera cards com dados consumidos de 2 APIs  Antes de testar, será necessário adicionar suas respectivas chaves. O passo a passo para a criação de uma nova chave pode ser encontrado nas documentações oficiais:

- Accuweather: https://developer.accuweather.com/apis
- Youtube V.3: https://developers.google.com/youtube/v3/docs

Através da função assíncrona fetchWeatherAndVideoData , o parâmetro WeatherText é utilizado para realizar uma busca por vídeos no YouTube referentes à condição do tempo da cidade escolhida, que preencherão o card junto a uma estilização personalizada.

```
async function fetchWeatherAndVideoData(locationKey, city) {
    const WEATHER_API_URL = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${WEATHER_API_KEY}`;

    try {
        let response = await fetch(WEATHER_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let weatherData = await response.json();
        const mood = `music for ${weatherData[0].WeatherText} weather`;
        const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=${mood}&type=video&videoDefinition=high&key=${YOUTUBE_API_KEY}`;

        response = await fetch(YOUTUBE_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let youtubeData = await response.json();
        createCard(city, weatherData, youtubeData);
        return { weatherData, youtubeData };
    } catch (error) {
        console.log('There was a problem with the fetch operation: ' + error.message);
    }
}

```

A função inclui manipulação de erros e retorna os dados necessários para que os cards possam ser posteriormente editados pelo usuário.

A adição de um novo card pode ser realizada através do formulário que é mostrado com um clique no botão "Adicionar nova sugestão".

Ao passar o mouse sobre um card, os botões "Editar cidade" e "Excluir" aparecem e permitem ao usuário editar o card ou excluí-lo.
Ao retirar o mouse de um card, os botões desaparecem.

Diego Soares
Caraguatatuba, junho de 2023