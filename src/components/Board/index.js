import React, { useState } from 'react';
import produce from 'immer';
import { DragDropContext } from 'react-beautiful-dnd';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import List from '../List';

export default function Board() {
  const [lists, setLists] = useState(loadLists());

  function DoNothing() {}

  function onDragEnd(result) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceList = lists.find(e => e.id === source.droppableId);
    const destinationList = lists.find(e => e.id === destination.droppableId);

    const sourceListIndex = lists.findIndex(e => e.id === source.droppableId);
    const destinationListIndex = lists.findIndex(
      e => e.id === destination.droppableId
    );

    const draggableItem = sourceList.cards[source.index];

    const newSourceCardArray = Array.from(sourceList.cards);
    newSourceCardArray.splice(source.index, 1);

    const newDestinationCardArray =
      destination.droppableId !== source.droppableId
        ? Array.from(destinationList.cards)
        : newSourceCardArray;
    newDestinationCardArray.splice(destination.index, 0, draggableItem);

    setLists(
      produce(lists, draft => {
        draft[sourceListIndex].cards = newSourceCardArray;
        draft[destinationListIndex].cards = newDestinationCardArray;
      })
    );
  }

  return (
    <DragDropContext
      onDragStart={DoNothing}
      onDragUpdate={DoNothing}
      onDragEnd={onDragEnd}
    >
      <Container>
        {lists.map((list, index) => (
          <List key={list.id} index={index} list={list} />
        ))}
      </Container>
    </DragDropContext>
  );
}
