import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';
import BoardContext from '../Board/context';

import Card from '../Card';
import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',

    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;

      if (draggedListIndex === targetListIndex) return;

      move(draggedListIndex, targetListIndex, draggedIndex, 0);
      item.index = 0;
      item.listIndex = targetListIndex;
    },
  });

  return (
    <Container ref={dropRef} done={data.done}>
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
