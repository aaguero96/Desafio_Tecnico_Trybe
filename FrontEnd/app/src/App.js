import './App.css';
import React, { useEffect, useState } from 'react';
import * as apiFunctions from './api.js';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('pronto');
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);

  const InputHandler = (setter, { target: { value } }) => {
    setter(value);
  };

  const tasksData = async () => {
    const data = await apiFunctions.tasksData();
    setData(data);
  };

  const HEADERS = ['Tarefa', 'Data de Criação', 'Status'];

  useEffect(() => {
    tasksData();
  }, [update]);

  return (
    <div>
      <label htmlFor='task'>
        Nova Tarefa:
        <input
          type="text"
          id='task'
          onChange={(event) => InputHandler(setTask, event)}
          value={task}
        />
      </label>
      <label htmlFor='createdAt'>
        Data da criação:
        <input
          type="date"
          id='createdAt'
          onChange={(event) => InputHandler(setDate, event)}
          value={date}
        />
      </label>
      <label htmlFor='status'>
        Status:
        <select
          id='status'
          onChange={(event) => InputHandler(setStatus, event)}
          value={status}
        >
          <option value="pronto">Pronto</option>
          <option value="em andamento">Em andamento</option>
          <option value="pendente">Pendente</option>
        </select>
      </label>
      <button
        onClick={async () => {
          const body = { task, createdAt: date, status };
          await apiFunctions.createTask(body);
          setUpdate(!update);
        }}
      >
        Adicionar
      </button>
      <table>
        <thead>
          <tr>
            {
              HEADERS.map((header) => <th key={ header }>{ header }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((element) => {
              const {id, task, createdAt, status} = element;
              return (
                <tr key={id}>
                  <td>{ task }</td>
                  <td>{ createdAt }</td>
                  <td>{ status }</td>
                  <td>
                    <button
                      id={`Remover-${id}`}
                      onClick={async ({ target }) => {
                        const selectedId = target.id.split('-')[1];
                        await apiFunctions.deleteTask(selectedId);
                        setUpdate(!update);
                      }}
                    >
                      Remover
                    </button>
                  </td>
                  <td>
                    <button id={`Editar-${id}`}>
                      Editar
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
