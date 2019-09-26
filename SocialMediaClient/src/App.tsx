import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List } from "semantic-ui-react";

import './App.css';
import {CarItem} from "./demo";

interface AppProps {
  cars: CarItem[]
}

interface IValue {
  id: number;
  name: string;
}

function useFetchValues(): IValue[] {
  const [values, setValues] = useState<IValue[]>([]);

  async function fetchValues(): Promise<IValue[]> {
    const response = await axios.get('https://localhost:44349/api/values');
    return response.data;
  }

  useEffect(() => {
    fetchValues()
      .then(valuesFromResponse => {
        setValues(valuesFromResponse);
      })
  });

  return values;
}



const App: React.FC<AppProps> = ({cars}) => {
  const values: IValue[] = useFetchValues();

  return (
    <div className="App">
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Social Media Site</Header.Content>
      </Header>
      <List>
        {values.map(value => {
          return <List.Item key={value.id}>{value.name}</List.Item>
        })}
      </List>
    </div>
  );
};

export default App;
