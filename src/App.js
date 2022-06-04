//import './App.css';
import { useEffect, useState } from 'react';
import { helpHttp } from "./helpers/helpHttp";
// import {
//   collection,
//   addDoc,
// } from "firebase/firestore";
// import { db } from '../firebase/firebaseConfig'
// import { db } from './firebase/firebaseConfig'
// import {
//   collection,
//   addDoc,
// } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([])
  let api = helpHttp(),
    url = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {

    const resp = await api.get(url);
    setUsers(resp)
    // await resp.forEach(element => {
    //   addDoc(collection(db, "testPost"), element);
    // });

  }


  useEffect(() => {

    showData()
    // eslint-disable-next-line 
  }, [])





  return (
    <div >
      <h1>Hola gente</h1>
      <div>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
      {users.map(({ id, name, username, email }) => (
          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
            </tr>
          </tbody>
              ))}
        </table>
        </div>

    </div>
  );
}

export default App;
