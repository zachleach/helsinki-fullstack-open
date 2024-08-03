<div class="tasks">

<h4>2.18* Data for countries, step 1</h4>

At [https://studies.cs.helsinki.fi/restcountries/](https://studies.cs.helsinki.fi/restcountries/) you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

![too many matches screenshot](../../images/2/19b1.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

![matching countries in a list screenshot](../../images/2/19b2.png)

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:

![flag and additional attributes screenshot](../../images/2/19c3.png)

**NB**: It is enough that your application works for most countries. Some countries, like <i>Sudan</i>, can be hard to support since the name of the country is part of the name of another country, <i>South Sudan</i>. You don't need to worry about these edge cases.

<h4>2.19*: Data for countries, step 2</h4>

**There is still a lot to do in this part, so don't get stuck on this exercise!**

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

![attach show buttons for each country feature](../../images/2/19b4.png)

In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like <i>Sudan</i>, can be ignored.

<h4>2.20*: Data for countries, step 3</h4>

Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is [https://openweathermap.org](https://openweathermap.org). Note that it might take some minutes until a generated API key is valid.

![weather report added feature](../../images/2/19x.png)

If you use Open weather map, [here](https://openweathermap.org/weather-conditions#Icon-list) is the description for how to get weather icons.

**NB:** In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with _http://_. This issue can be fixed by completing the exercise using Chrome.

**NB:** You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an [environment variable](https://vitejs.dev/guide/env-and-mode.html) to save the key.

Assuming the api-key is <i>54l41n3n4v41m34rv0</i>, when the application is started like so:

```bash
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.exe
```

you can access the value of the key from the _import.meta.env_ object:

```js
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup
```

Note that you will need to restart the server to apply the changes.

This was the last exercise of this part of the course. It's time to push your code to GitHub and mark all of your finished exercises to the [exercise submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

</div>
