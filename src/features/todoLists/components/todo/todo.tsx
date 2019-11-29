import React from "react";
import { TTodo } from "../../../../types";
import { useFirestore } from "react-redux-firebase";
import {
  FIREBASE_COLLECTION_LISTS,
  FIREBASE_COLLECTION_TODOS
} from "../../../../constants/firebase";

import { TextArea } from "../../../../common/components/textArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../../../../common/components/button";
import styled from "styled-components";

interface props {
  parentId: string;
  todo: TTodo;
}

export const Todo: React.FC<props> = ({ todo, parentId }) => {
  const { id, content, done } = todo;

  const firestore = useFirestore();

  const deleteTodo = () => {
    firestore.delete(
      `${FIREBASE_COLLECTION_LISTS}/${parentId}/${FIREBASE_COLLECTION_TODOS}/${id}`
    );
  };

  const updateTodo = (todo: TTodo) => {
    firestore.set(
      `${FIREBASE_COLLECTION_LISTS}/${parentId}/${FIREBASE_COLLECTION_TODOS}/${id}`,
      { ...todo, modifiedDate: new Date() }
    );
  };

  const toggleDone = () => updateTodo({ ...todo, done: !done });

  const updateText = (content: string) => updateTodo({ ...todo, content });

  return (
    <StyledTodo done={done}>
      <CheckboxWrapper>
        <Checkbox type="checkbox" checked={done} onChange={toggleDone} />
        <FontAwesomeIcon icon={done ? faCheckSquare : faSquare} size="2x" />
      </CheckboxWrapper>
      <TextArea
        value={content}
        onChange={({ currentTarget }) => updateText(currentTarget.value)}
        placeholder="..."
      />
      <Button onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </StyledTodo>
  );
};

interface IStyledTodoProps {
  done: boolean;
}
const StyledTodo = styled.div<IStyledTodoProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;

  &::after {
    ${({ done }) => (done ? `content:"";` : "")}
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.grey600};
    left: 35px;
    right: 50px;
  }
`;

const CheckboxWrapper = styled.span`
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  position: relative;
  width: 35px;
`;

const Checkbox = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
