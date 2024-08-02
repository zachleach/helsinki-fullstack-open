<div class="tasks">
  <h3>Exercises 1.1.-1.2.</h3>

The exercises are submitted via GitHub, and by marking the exercises as done in the "my submissions" tab of the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

The exercises are submitted **one part at a time**. When you have submitted the exercises for a part of the course you can no longer submit undone exercises for the same part.

Note that in this part, there are [more exercises](/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14) besides those found below. <i>Do not submit your work</i> until you have completed all of the exercises you want to submit for the part.

You may submit all the exercises of this course into the same repository, or use multiple repositories. If you submit exercises of different parts into the same repository, please use a sensible naming scheme for the directories.

One very functional file  structure for the submission repository is as follows:

```text
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
```

See this [example submission repository](https://github.com/fullstack-hy2020/example-submission-repository)!

For each part of the course, there is a directory, which further branches into directories containing a series of exercises, like "unicafe" for part 1.

Most of the exercises of the course build a larger application, eg. courseinfo, unicafe and anecdotes in this part, bit by bit. It is enough to submit the completed application. You can make a commit after each exercise, but that is not compulsory. For example the course info app is built in exercises 1.1.-1.5. It is just the end result after 1.5 that you need to submit!

For each web application for a series of exercises, it is recommended to submit all files relating to that application, except for the directory <i>node\_modules</i>.

  <h4>1.1: Course Information, step 1</h4>

<i>The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.</i>

Use Vite to initialize a new application. Modify <i>main.jsx</i> to match the following

```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

and <i>App.jsx</i> to match the following

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

and remove the extra files <i>App.css</i> and <i>index.css</i>, also remove the directory <i>assets</i>.

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: <i>Header</i>, <i>Content</i>, and <i>Total</i>. All data still resides in the <i>App</i> component, which passes the necessary data to each component using <i>props</i>. <i>Header</i> takes care of rendering the name of the course, <i>Content</i> renders the parts and their number of exercises and <i>Total</i> renders the total number of exercises.

Define the new components in the file <i>App.jsx</i>.

The <i>App</i> component's body will approximately be as follows:

```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

**WARNING** Don't try to program all the components concurrently, because that will almost certainly break down the whole app. Proceed in small steps, first make e.g. the component <i>Header</i> and only when it works for sure, you could proceed to the next component.

Careful, small-step progress may seem slow, but it is actually <i> by far the fastest</i> way to progress. Famous software developer Robert "Uncle Bob" Martin has stated

> <i>"The only way to go fast, is to go well"</i>

that is, according to Martin, careful progress with small steps is even the only way to be fast.

<h4>1.2: Course Information, step 2</h4>

Refactor the <i>Content</i> component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three <i>Part</i> components of which each renders the name and number of exercises of one part.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. We shall fix that in [part 2](/en/part2), but before that, let's go to part1b to learn about JavaScript.

</div>

<div class="tasks">

  <h3>Exercises 1.3.-1.5.</h3>

<i>We continue building the application that we started working on in the previous exercises. You can write the code into the same project since we are only interested in the final state of the submitted application.</i>

**Pro-tip:** you may run into issues when it comes to the structure of the <i>props</i> that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:

```js
const Header = (props) => {
  console.log(props) // highlight-line
  return <h1>{props.course}</h1>
}
```

If and <i>when</i> you encounter an error message

> <i>Objects are not valid as a React child</i>

keep in mind the things told [here](/en/part1/introduction_to_react#do-not-render-objects).

  <h4>1.3: Course Information step 3</h4>

Let's move forward to using objects in our application. Modify the variable definitions of the <i>App</i> component as follows and also refactor the application so that it still works:

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

  <h4>1.4: Course Information step 4</h4>

Place the objects into an array. Modify the variable definitions of <i>App</i> into the following form and modify the other parts of the application accordingly:

```js
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

**NB** at this point <i>you can assume that there are always three items</i>, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the [next part of the course](../part2).

However, do not pass different objects as separate props from the <i>App</i> component to the components <i>Content</i> and <i>Total</i>. Instead, pass them directly as an array:

```js
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

  <h4>1.5: Course Information step 5</h4>

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```js
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```

</div>
