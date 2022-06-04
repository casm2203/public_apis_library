import React from 'react'
//import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { helpHttp } from "../helpers/helpHttp";
import {
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import 'animate.css';
import Table from './Table/Table';
//import { Routes, Route } from 'react-router-dom';




const initialForm = {
  name: "",
};


const Container = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(initialForm);
  const [dbs, setDbs] = useState([]);
  let api = helpHttp(),
    url = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {

    const resp = await api.get(url);
    setUsers(resp)
    // await resp.forEach(element => {
    //   addDoc(collection(db, "testPost"), element);
    // });

  }

  //filtrado
  let results = [];
  if (!search) {
    results = users
  } else {
    results = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const array = querySnapshot.docs.map(item => (
          {
            ...item.data(), id: item.id,
          }
        ))
        setDbs(array)

      } catch (error) {
        console.log(error)
      }
    }
    getData()
    showData()
    // eslint-disable-next-line 
  }, []);


  const searcher = (e) => {
    setSearch(e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    //console.log(e.target.value)
  }

  const importData = async (e) => {
    e.preventDefault();
    console.log(results[0], "resultado final");

    if (results.length === 0) {
      alert("No se encontró el usuario, validar los datos ingresados")
    } else {
      alert("Se ha importado el usuario a la Base datos")
      const docRef = await addDoc(collection(db, "users"), results[0]);
      setDbs([...dbs, { ...results[0], id: docRef.id }]);
    }
    console.log(form.name, "name name")
    handleReset();
  }

  const handleReset = (e) => {
    setForm(initialForm);
  };

  console.log(results)
  return (
    <div >
      <Navbar />
      <Table importData={importData} searcher={searcher} form={form} results={results} dbs={dbs} />

    </div>
  )
}

export default Container