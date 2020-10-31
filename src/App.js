import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <h1>First React APP</h1>
            <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt=""/>
            <p>my first react app</p>
            <button className="button-primary">Default</button>
          </div>
        </div>
      </div>
      <hr/>
      <table className="table">
        <caption>Внесите свою информацию</caption>
        <thead>
        <tr>
          <th>ФИО человека</th>
          <th>спорт</th>
          <th>музыка</th>
          <th>игры</th>
          <th>чтение</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Пупкин Атон Дональдович</td>
          <td>&#10004;</td>
          <td> </td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <td>Быков Михась Эмануилович</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <td>Васильев Тадеуш Кандратьевич</td>
          <td>&#10004;</td>
          <td> </td>
          <td> </td>
          <td>&#10004;</td>
        </tr>
        </tbody>
      </table>
    </div>
  );

}

export default App;
