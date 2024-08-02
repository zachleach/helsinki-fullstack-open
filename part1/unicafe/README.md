<h4> 1.6: unicafe step 1</h4>

Like most companies, the student restaurant of the University of Helsinki [Unicafe](https://www.unicafe.fi) collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: <i>good</i>, <i>neutral</i>, and <i>bad</i>.

The application must display the total number of collected feedback for each category. Your final application could look like this:

![screenshot of feedback options](../../images/1/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in the material and previous exercise. File <i>main.jsx</i> is as follows:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

You can use the code below as a starting point for the <i>App.jsx</i> file:

```js
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

<h4>1.7: unicafe step 2</h4>

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

![average and percentage positive screenshot feedback](../../images/1/14e.png)

<h4>1.8: unicafe step 3</h4>

Refactor your application so that displaying the statistics is extracted into its own <i>Statistics</i> component. The state of the application should remain in the <i>App</i> root component.

Remember that components should not be defined inside other components:

```js
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

<h4>1.9: unicafe step 4</h4>

Change your application to display statistics only once feedback has been gathered.

![no feedback given text screenshot](../../images/1/15e.png)

<h4>1.10: unicafe step 5</h4>

Let's continue refactoring the application. Extract the following two components:

- <i>Button</i> handles the functionality of each feedback submission button.

- <i>StatisticLine</i> for displaying a single statistic, e.g. the average score.

To be clear: the <i>StatisticLine</i> component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}

```

The application's state should still be kept in the root <i>App</i> component.

<h4>1.11*: unicafe step 6</h4>

Display the statistics in an HTML [table](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics), so that your application looks roughly like this:

![screenshot of statistics table](../../images/1/16e.png)

Remember to keep your console open at all times. If you see this warning in your console:

![console warning](../../images/1/17a.png)

Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.

<i>Typical source of an error _Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist._ is from a Chrome extension. Try going to _chrome://extensions/_ and try disabling them one by one and refreshing React app page; the error should eventually disappear.</i>

**Make sure that from now on you don't see any warnings in your console!**

</div>
