import React from 'react';
import Jumbotron from './components/jumbotron/index';
import jumboData from './fixtures/jumbo.json';

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        <Jumbotron key={item.id} direction={item.direction}>
          <p>Hello</p>
          aa
        </Jumbotron>;
      })}
    </Jumbotron.Container>
  );
}
