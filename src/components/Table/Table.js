import React from 'react'

const Table = ({importData, searcher, form, results, dbs}) => {
  return (
    <div className="container-fluid animate__animated animate__zoomIn">
    <div className="row mt-3">
      <div className="row shadow-sm ">
        <div className="col  animate__animated animate__zoomIn" >
          <form  className="input-group mb-3 w-75 p-3 container-fluid" onSubmit={importData}>
            <input onChange={searcher} name='name' value={form.name} type="text" className="form-control" placeholder="Search users" aria-label="Recipient's username" aria-describedby="basic-addon2" required />
            {/* <button onClick={searcher} className="input-group-text" id="basic-addon2">Search</button> */}
            <button type='submit' className="input-group-text" id="basic-addon2">Import</button>
          </form>
        </div>
        <div className="col" >
        </div>
      </div>
      <div className="col shadow-sm " >
        <h5 className='mt-2'>Usuarios API</h5>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Web Site</th>
            </tr>
          </thead>
          {results.map(({ id, name, username, email, website }, index) => (
            <tbody key={id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="col shadow-sm " >
        <h5 className='mt-2' >Usuarios Base de datos</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Web Site</th>
            </tr>
          </thead>
          {dbs.map(({ id, name, username, email, website }, index) => (
            <tbody key={id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  </div>
  )
}

export default Table