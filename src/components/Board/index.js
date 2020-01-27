import React, { useState } from 'react';
import { loadLists } from '../../services/api';

import BoardContext from './context';

import { Container } from './styles';
import List from '../List';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to);
  }

  return (
    <BoardContext.Proviver value={{ lists, move }}>
      <Container>
        {lists.map(list => (
          <List key={list.title} data={list} />
        ))}
      </Container>
    </BoardContext.Proviver>
  );
}
