import React, { useState, useEffect } from 'react'
import 'animate.css';
import { useNavigate } from 'react-router-dom';


const initialForm = {
    "id": null,
    "name": "",
    "username": "",
    "website": "",
    "email": "",
}

const FormUser = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm);
    let history = useNavigate();

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.username || !form.website || !form.email) {
            alert("Datos incompletos");
            return;
        }
        if (dataToEdit) {
            updateData({ ...form });
        } else {
            createData({ ...form });
        }
        handleReset();
    };


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
        history(`/`);
    };


    return (
        <>
            <h4 className='d-flex justify-content-center mb-2 mt-3'>{dataToEdit ? "Edit User" : "Agregar User"}</h4>
            <div className="d-flex justify-content-center animate__animated animate__lightSpeedInLeft">
                {/* Formulario */}
                <hr />
                <div className='shadow-sm p-3'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" placeholder='Name' onChange={handleChange} value={form.name} name="name" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User name:</label>
                            <input type="text" placeholder='User name' onChange={handleChange} value={form.username} name="username" className="form-control" required />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Email:</label>
                            <input type="text" placeholder='Email' onChange={handleChange} value={form.email} name="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Web site:</label>
                            <input type="text" placeholder='Web site' onChange={handleChange} value={form.website} name="website" className="form-control" required />
                        </div>

                        {dataToEdit ?
                            <div><button className="btn btn-warning" type='submit' >Edit</button> <button onClick={handleReset} className="btn btn-dark" >Cancel</button></div>
                            :
                            <button className="btn btn-primary" type='submit' >Send</button>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormUser