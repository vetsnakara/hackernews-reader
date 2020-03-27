<a href="https://codesandbox.io/s/github/vetsnakara/hackernews-reader/tree/master/?fontsize=14&hidenavigation=1&theme=dark">
  <img height="20" alt="Edit hackernews-reader" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

<a href="https://standardjs.com">
  <img height="20" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
</a>

<h2>
  <a href="https://modest-wescoff-ef0e02.netlify.com/" target="_blank">Hackernews Reader</a>
</h2>

> Yet another (soft) Hacker News clone w/ some advanced UI features. Uses React, Redux, Styled Components and so on.

### 📺 Preview
  <table style="width: 100%; background-color: white">
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hackernews-reader/master/preview/list-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hackernews-reader/master/preview/list-dark.png"/></td>
  </tr>
  </table>

<details>
<summary>other views 👀</summary>
  <table style="width: 100%; background-color: white">
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hackernews-reader/master/preview/grid-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hackernews-reader/master/preview/grid-dark.png"/></td>
  </tr>
  </table>
</details>

### ✨ Features
* Use [Hacker News API](https://hacker-news.firebaseio.com/v0)
* Theme toggle button (light/dark)
* Layout toggle button (grid/list)
* Go up button
* Custom Tooltips (based on render props pattern)
* Persisting app state w/ localStorage (custom hook)
* Infinite scroll (custom hook)
* Sticky header (custom hook)
* Loading indicator

### 🛠️ Technologies
* __React__ for UI rendering
* __Redux__ for state management
* __Redux Thunk__ for side effetcts
* __Reselect__ for memoized selectors
* __Styled Components__ for styles and theming
* __React Scroll__ for animating vertical scrolling
* __Create React App__ to bootstrap a project
* __Axios__ for network requests
* __CSS grid & flexbox__ for layout
* __CSS animations__ for custom loader
* __lodash__ for throttling and debouncing in hooks

### 🚀 Setup
``` sh
$ git clone https://github.com/vetsnakara/hackernews-reader.git
$ cd hackernews-reader
$ npm install
$ npm start
```

### 👷 Author
**Konstantin Arakantsev**
- Github: [@vetsnakara](https://github.com/vetsnakara)