import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: []
    };

    handleSubmit = (event) => {
      event.preventDefault();

      const { tarefas } = this.state;
      let { novaTarefa } = this.state;

      novaTarefa = novaTarefa.trim();
      if(tarefas.indexOf(novaTarefa) == -1) {
        const novasTarefas = [...tarefas, novaTarefa];

        this.setState({
          tarefas: [...novasTarefas],
          novaTarefa: '',
        });
      }
      else {
        // Criar ação de texto já existente
      }
    }

    handleChange = (event)=> {
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    handleEdit = (event, index) => {

    }

    handleDelete = (event, index) => {
      const { tarefas } = this.state;

      const novasTarefas = [...tarefas];

      novasTarefas.splice(index, 1);

      this.setState({
        tarefas: [...novasTarefas],
      });
    }

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1>Lista de tarefas</h1>
                <form onSubmit={this.handleSubmit} action='#' className='form'>
                    <input onChange={this.handleChange} type='text' value={novaTarefa} />
                    <button type='submit' title='Adicionar nova tarefa'>
                      <FaPlus />
                    </button>
                </form>

                <ul className='tarefas'>
                    {tarefas.map((value, index) => (
                      <li key={value}>
                        {value}
                        <div>
                          <FaEdit onClick={(event) => this.handleEdit(event, index)} className='edit' />
                          <FaWindowClose onClick={(event) => this.handleDelete(event, index)} className='delete' />
                        </div>
                      </li>
                    ))}
                </ul>
            </div>
        );
    }
}
