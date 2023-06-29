import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

function App() {
  //useState
  const [count, setCount] = useState(1);
  const [paragraph, setParagraph] = useState([]);

  // FUNCTION submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let number = Number(count);
    let eachParagraph = data.slice(0, number);
    setParagraph(eachParagraph);
  };

  //RETURN
  return (
    <main className='section-center'>
      {/* TITLE */}
      <h4>TIRED OF BORING LOREM IPSUM?</h4>

      {/* FORM */}
      <form action='' className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='count'>Paragraphs:</label>
        <input
          type='number'
          id='count'
          name='count'
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min='1'
          max='8'
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>

      {/* PARAGRAPH */}
      <article className='lorem-text'>
        {paragraph.map((el) => {
          return <p key={nanoid()}>{el}</p>;
        })}
      </article>
    </main>
  );
}

export default App;
