import React from "react";
import { TTodoList, TTodo } from "../../../../types";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import {
  FIREBASE_COLLECTION_LISTS,
  FIREBASE_COLLECTION_TODOS
} from "../../../../constants/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Todo } from "../todo";
import { useSelector } from "react-redux";
import { TAppState } from "../../../../store/store";
import { Col } from "react-grid-system";
import styled from "styled-components";
import { Panel } from "../../../../common/components/panel";
import { Button } from "../../../../common/components/button";
import partition from "lodash.partition";

interface props {
  todoList: TTodoList;
}

export const TodoList: React.FC<props> = ({ todoList }) => {
  const { id, name } = todoList;

  useFirestoreConnect([
    {
      collection: "todoLists",
      doc: id,
      subcollections: [
        {
          collection: FIREBASE_COLLECTION_TODOS
        }
      ],
      orderBy: [["createdDate", "desc"]],
      storeAs: `${FIREBASE_COLLECTION_TODOS}_${id}`
    }
  ]);

  const firestore = useFirestore();

  const todos: TTodo[] = useSelector(
    ({ firestore }: TAppState) =>
      firestore.ordered[`${FIREBASE_COLLECTION_TODOS}_${id}`]
  );

  const [done, todo] = partition(todos, { done: true });

  const deleteTodoList = () => {
    firestore.delete(`${FIREBASE_COLLECTION_LISTS}/${id}`);
  };

  const addTodo = () => {
    firestore
      .collection(FIREBASE_COLLECTION_LISTS)
      .doc(id)
      .collection(FIREBASE_COLLECTION_TODOS)
      .add({
        content: "",
        createdDate: new Date(),
        modifiedDate: new Date(),
        done: false
      });
  };

  return (
    <Col xs={12} lg={6} xl={4}>
      <Panel>
        <ListHeader>
          <Title>{name}</Title>
          <Actions>
            <Button onClick={addTodo}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Actions>
        </ListHeader>
        <>
          {todos && (
            <>
              {todo.map(todo => (
                <Todo key={todo.id} todo={todo} parentId={id!} />
              ))}
              {done.map(todo => (
                <Todo key={todo.id} todo={todo} parentId={id!} />
              ))}
            </>
          )}

          {todos && todos.length === 0 && (
            <Delete>
              This list is Empty delete it?{" "}
              <Button onClick={deleteTodoList}>Delete</Button>
            </Delete>
          )}
        </>
      </Panel>
    </Col>
  );
};

const ListHeader = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  margin: 0;
  display: flex;
  flex: 5;
`;

const Actions = styled.div`
  display: flex;
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
