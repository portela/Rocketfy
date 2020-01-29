import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    creatable: PropTypes.bool,
    done: PropTypes.bool,
    cards: PropTypes.array,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
