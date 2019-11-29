import React, { useState } from "react";
import {
  useFirestoreConnect,
  useFirestore,
  isLoaded
} from "react-redux-firebase";
import { useSelector } from "react-redux";
import { TAppState } from "../../store/store";
import {
  FIREBASE_COLLECTION_LISTS,
  FIREBASE_COLLECTION_TODOS
} from "../../constants/firebase";
import { TTodoList } from "../../types";
import { TodoList } from "./components/todoList";
import { Container, Row, Col } from "react-grid-system";
import { Panel } from "../../common/components/panel";
import { TextArea } from "../../common/components/textArea";
import { Button } from "../../common/components/button";

export const TodoLists: React.FC = () => {
  useFirestoreConnect([
    {
      collection: "todoLists",
      orderBy: ["createdDate", "desc"]
    }
  ]);
  const firestore = useFirestore();

  const todoLists: TTodoList[] = useSelector(
    ({ firestore }: TAppState) => firestore.ordered.todoLists
  );

  const [listName, setListName] = useState("");

  const addList = async () => {
    if (listName === "") return;
    const todoList: TTodoList = {
      name: listName,
      createdDate: new Date()
    };

    setListName("");

    const created = await firestore
      .collection(FIREBASE_COLLECTION_LISTS)
      .add(todoList);

    firestore
      .collection(FIREBASE_COLLECTION_LISTS)
      .doc(created.id)
      .collection(FIREBASE_COLLECTION_TODOS)
      .add({
        content: "",
        createdDate: new Date(),
        modifiedDate: new Date(),
        done: false
      });
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12} md={6} xl={4} offset={{ xs: 0, md: 3, xl: 4 }}>
          <Panel>
            <TextArea
              value={listName}
              onChange={({ currentTarget }) => setListName(currentTarget.value)}
              placeholder="Add new list"
            />
            <Button onClick={addList} disabled={listName.length === 0}>
              Add list
            </Button>
          </Panel>
        </Col>
      </Row>

      <Row>
        {!isLoaded(todoLists) ? (
          <span>Loading...</span>
        ) : (
          todoLists.map(tl => <TodoList todoList={tl} key={tl.id} />)
        )}
      </Row>
    </Container>
  );
};
