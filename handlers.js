import { fetchJoke } from './index.js';
import { jokeHolder, jokeButtonSpan } from './elements.js';
import { randomItemFromArray } from './utils.js';
import buttonText from './buttonTxt.js';

async function handleClick(e) {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}

export default handleClick;
