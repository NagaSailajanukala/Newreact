import React from 'react'

function Simple() {

  const formSubmit=()=>{
    console.log("form")
  }
  return (
    <div>
    <h1>This is a changed Simple first page of React  </h1>
    
    <form onSubmit={()=>formSubmit}>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" placeholder="enter fname"/><br/><br/>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" /><br/><br/>
        <label for="pwd">Password</label>
        <input type="password" id="pwd" name="pwd"/><br/>

        <p>Currently you are residing at:</p>
        <input type="radio" id="hyderabad" name="city"/>
        <label for="hyderabad">Hyderabad</label><br/>
        <input type="radio" id="chennai" name="city"/>
        <label for="chennai">chennai</label><br/>
        <input type="radio" id="bangelore" name="city"/>
        <label for="bangelore">Bangelore</label><br/>

        <label for="color">Favorite Color:</label> 
        {/* <select id="color" name="color" size="2" multiple>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Blue" selected>Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Violet">Violet</option><br><br>
       </select><br><br> */}

       <label for="address">Address:</label>
       <textarea id="address" style={{width:"150px",height:"150px"}} placeholder="add address here"></textarea><br/><br/>
       {/* <button type="button" onClick="alert('Hello')">Click Me</button><br/><br/> */}
       
       {/* <label for="food">choose Fav Food</label>
       <input list="foods" name="food" id="food"/>
       <datalist id="foods">
        <option value="Sweets"></option>
        <option value="Snacks"></option>
        <option value="Rotis"></option>
        <option value="Biryani"></option>
        <option value="Pizza"></option>
        <option value="Ice-Cream"></option>
       </datalist><br/><br/> */}

       {/* <input type="reset" value="reset"/><br/><br/> */}
       Which Vehicles do you have:<br/>
       <label for="bike">Bike</label>
       <input type="checkbox"  id="Bike" name="vehicle1"/><br/>
       <label for="car">Car</label>
       <input type="checkbox"  id="car" name="vehicle2"/><br/>
       <label for="SUVcar">SUVcar</label>
       <input type="checkbox"  id="SUVcar" name="vehicle3"/><br/>
       
       <label for="favcolor">Choose the color</label>
       <input type="color"  id="favcolor" name="favcolor"/><br/>

        <button type="submit">Submit</button>


        </form>

    </div>
  )
}

export default Simple
