import React ,{useState} from 'react';

function FormSample(){  

const [data, setData] = useState([]);


  const changeFunction = (e) => {
    const dataName = e.target.name;
    const dataValue = e.target.value;
    
    setData((prevData) => ({
        ...prevData,[dataName]: dataValue,
    }));
  }

  const radioChangeFunction = (e) => {
    const dataName = e.target.name;
    const dataValue = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [dataName]: dataValue,
    }));
  }
  const fileChangeFunction = (e) => {
    const dataName = e.target.name;
    // console.log(e.target.files[0].name);
    const dataValue = e.target.files[0].name;
    setData((prevData) => ({
      ...prevData,
      [dataName]: dataValue,
    }));
  }
  
  const submitFunction = (e) => {
    e.preventDefault();
    console.log('Form Values:', data);
  }

    return (
    <div>
      <form onSubmit={submitFunction}>
        <h2><u>Application Form</u></h2>
        Name: <input type="text" name="name" onChange={changeFunction}/><br/><br/>
        Password: <input type="password" name="pwd" onChange={changeFunction}/><br/><br/>
        Age: <input type="number" name="age" onChange={changeFunction}/><br/><br/>
        email: <input type="email" name="email" onChange={changeFunction}/><br/><br/>
        Mobile no: <input type="number" name="mob" onChange={changeFunction}/><br/><br/>

        Choose Favorate color: <select name="color" onChange={changeFunction} multiple>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Violet">Violet</option>
       </select><br/><br/>

       Pick the Color <input type="color" name="color" value={toString("#ffffff")} onChange={changeFunction}/><br/><b/>
       Address:<textarea  name="address" cols="20" rows="20" placeholder="Address here" onChange={changeFunction}/><br/><br/>

       <p>Currently you are residing at:</p>
       Hyderabad <input type="radio" name="city" value="hyderabad" onChange={radioChangeFunction}/><br/>
       Chennai <input type="radio" name="city" value="Chennai" onChange={radioChangeFunction}/><br/>
       Bangrlore <input type="radio" name="city" value="Bangelore" onChange={radioChangeFunction}/><br/><br/>

         Choose the file: <input type="file" name="file" onChange={fileChangeFunction}/><br/><br/>
       {/* Which Vehicles do you have:<br/>
       <label for="bike">Bike</label>
       <input type="checkbox"  id="Bike" value="bike" name="vehicle1" onChange={checkChangeFunction}/><br/>
       <label for="car">Car</label>
       <input type="checkbox"  id="car" value="car" name="vehicle2" onChange={checkChangeFunction}/><br/>
       <label for="Bicycle">Bicycle</label>
       <input type="checkbox"  id="Bicycle" value="Bicycle" name="vehicle3" onChange={checkChangeFunction}/><br/> */}



    <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default FormSample
