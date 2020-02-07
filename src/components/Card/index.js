import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

export default function Card({ card, index }) {
  useEffect(() => {
    const { id } = card;
    console.log(`Card data: ${id} - index ${index}`);
  }, []); // eslint-disable-line

  return (
    <Draggable draggableId={card.id} index={index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <header>
            {card.labels.map(label => (
              <Label key={label} color={label} />
            ))}
          </header>
          <p>{card.content}</p>
          {card.user && <img src={card.user} alt="" />}
        </Container>
      )}
    </Draggable>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    labels: PropTypes.array,
    content: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
