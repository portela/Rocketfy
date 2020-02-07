import React, { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';
import { Container } from './styles';

export default function List({ list, index }) {
  useEffect(() => {
    const { id } = list;
    console.log(`list id: ${id} - index: ${index}`);
  }, []); // eslint-disable-line

  return (
    <Droppable droppableId={list.id}>
      {provided => (
        <Container done={list.done}>
          <header>
            <h2>{list.title}</h2>
            {list.creatable && (
              <button type="button">
                <MdAdd size={24} color="#FFF" />
              </button>
            )}
          </header>
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {list.cards.map((card, cardIndex) => (
              <Card key={card.id} index={cardIndex} card={card} />
            ))}
            {provided.placeholder}
          </ul>
        </Container>
      )}
    </Droppable>
  );
}

List.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    creatable: PropTypes.bool,
    done: PropTypes.bool,
    cards: PropTypes.array,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
