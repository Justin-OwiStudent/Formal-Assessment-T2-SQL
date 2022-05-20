import React, { useState } from 'react';
import axios from 'axios';

function App() {

const [petNames, setPetNames] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setPetNames(values => ({...values, [name]: value}))
}

const handleSubmit = (event) =>{
  event.preventDefault();
  console.log(petNames)

  axios.post('http://localhost:8888/Pets/addPet', petNames)
  .then(function(response){
      console.log(response)
  });
}

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="name" placeholder="Name of Pet" onChange={handleChange}/>
            <select name="Species" onChange={handleChange}>
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select name="Gender" onChange={handleChange}>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="Age" type="number"  placeholder="Age of Pet (years) " onChange={handleChange} />
            <input name="MicroChip" type="number"  placeholder="Pet MicroChip Id" onChange={handleChange} />
            <input name="OwnerName" type="text"  placeholder="Pet Owner Name" onChange={handleChange} />
            <input name="OwnerId" type="number"  placeholder="Pet Owner ID Number" onChange={handleChange} />
            <input name="ExportOrigin" type="text"  placeholder="Export Origin" onChange={handleChange} />
            <input name="ExportDestination" type="text"  placeholder="Export Destination" onChange={handleChange}/>

            <button onClick={handleSubmit}> Lets Export That Pet!</button>
            {/* <input type="submit" value="Lets Export That Pet!" onClick={handleSubmit}/>
             */}
          </form>

        </div>
    </div>
  );
}

export default App;
