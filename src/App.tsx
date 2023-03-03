import React, { Component } from 'react';
import UserList from "./components/UserList/UserList"
import { IUser } from './types';

interface IApp {
  users: IUser[]
}

export default class App extends Component<{},IApp> {
  state = {
    users: [
      { id: 1, name: 'Alibi', status: 'very busy', avatar: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'},
      { id: 2, name: 'Askar', status: 'free', avatar: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.webp'},
    ]
  }

  render() {
    
    return (
      <div className='flex justify-around w-screen'>
        {this.state.users.map(el => {
          return (
            <UserList user={el} key={el.id}/>
          )
        })}
      </div>
    )
  }
}