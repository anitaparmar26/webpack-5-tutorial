
import '../styles/app.css';

import '../styles/app.scss';

import '../images/fashion-img-1.jpg';



console.log('Interesting!')


class Movie {
    name = 'squid game'
  }
  const myMovie = new Movie()
  // Create paragraph node
  const p = document.createElement('p')
  p.textContent = `I like to watch ${myMovie.name}.`

  // Create heading node
  const heading = document.createElement('h1')
  heading.textContent = 'Interesting!'

  // Append SVG and heading nodes to the DOM
  const app = document.querySelector('#root')
  app.append(heading, p)