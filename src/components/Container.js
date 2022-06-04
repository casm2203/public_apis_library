import React from 'react'
//import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { helpHttp } from "../helpers/helpHttp";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import 'animate.css';
import Table from './Table/Table';
import { Routes, Route } from 'react-router-dom';
import FormUser from './Form/FormUser';




const initialForm = {
  name: "",
};


const Container = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(initialForm);
  const [dbs, setDbs] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  let api = helpHttp(),
    url = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const resp = await api.get(url);
    setUsers(resp)
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
  }

  const importData = async (e) => {
    e.preventDefault();
    if (results.length === 0) {
      alert("No se encontró el usuario, validar los datos ingresados")
    } else {
      alert("Se ha importado el usuario a la Base datos")
      const docRef = await addDoc(collection(db, "users"), results[0]);
      setDbs([...dbs, { ...results[0], id: docRef.id }]);
    }
    handleReset();
  }

  const handleReset = (e) => {
    setForm(initialForm);
  };


  //Crear
  const createData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "users"), data);
      setDbs([...dbs, { ...data, id: docRef.id }]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Actualizar
  const updateData = async (data) => {
    try {
      const updateVideo = doc(db, "users", data.id);
      await updateDoc(updateVideo, data);
      let newData = dbs.map((el) => (el.id === data.id ? data : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Eliminar
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      let newData = dbs.filter((el) => (el.id === id ? null : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <Table
          results={results}
          dbs={dbs}
            importData={importData}
            searcher={searcher}
            form={form}
            setDataToEdit={setDataToEdit}
            dataToEdit={dataToEdit}
            deleteData={deleteData}
          />} />
        <Route exact path="/addUser" element={
          <FormUser
            setDataToEdit={setDataToEdit}
            dataToEdit={dataToEdit}
            createData={createData}
            deleteData={deleteData}
            updateData={updateData}
          />} />
      </Routes>
    </>
  )
}

export default Container