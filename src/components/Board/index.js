import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import List from '../List';

const data = loadLists();

export default function Board() {
  function DoNothing() {}

  function onDragEnd() {}

  return (
    <DragDropContext
      onDragStart={DoNothing}
      onDragUpdate={DoNothing}
      onDragEnd={onDragEnd}
    >
      <Container>
        {data.map((list, index) => (
          <List key={list.id} index={index} list={list} />
        ))}
      </Container>
    </DragDropContext>
  );
}
