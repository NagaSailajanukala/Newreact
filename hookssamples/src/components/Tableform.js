import React ,{useState} from 'react';

const Tableform = () => {
  
    const [formEnabled, setFormEnabled] = useState(false);
    const [tableData, setTableData] = useState([]);

    const [formData, setFormData] = useState({
      firstname:'',
      lastname:'',
      username: '',
      email: '',
      password: '',
      usertype:'',
      phonenumber:'',
      active:'Yes',
      startdate:'',
      enddate:'',
      Streetline1:'',
      Streetline2:'',
      city:'',
      State:'',
      Postal:'',
      country:'',
    });
    const handleInputChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;
      console.log(name,value);
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
  
            
      setTableData([...tableData, formData]);
      // setFormEnabled(false);
  
        }



    return (
      
    <div>
      <div><button class="buttonclass" onClick={() => setFormEnabled(true)}>Add User</button></div>
      {/* <div class="container"> */}
      {/* <div><h2>New User Registration</h2></div> */}
      <div class="div1" style={{width:"80vw",border:"1px solid black", padding:"2rem",margin:"0 auto" ,height:"40vh"}}>
    <table className="mytable">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Lastname </th>
            <th>Username </th>
            <th>Email </th>
            <th>Password </th>
            <th>usertype</th>
            <th>phonenumber </th>
            <th>active</th>
            <th>startdate </th>
            <th>enddate </th>
            <th>Streetline1 </th>
            <th>Streetline2 </th>
            <th>city </th>
            <th>State </th>
            <th>Postal </th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.usertype}</td>
              <td>{item.phonenumber}</td>
              <td>{item.active}</td>
              <td>{item.startdate}</td>
              <td>{item.enddate}</td>
              <td>{item.Streetline1}</td>
              <td>{item.Streetline2}</td>
              <td>{item.city}</td>
              <td>{item.State}</td>
              <td>{item.Postal}</td> 
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {formEnabled && 
       <div class="div2" style={{width:"80vw",border:"1px solid black",padding:"2rem",margin:"0 auto"}}>
        <form class=".form"  onSubmit={handleFormSubmit} >
        <div id="item">
            <div class="inner-item">
                <label for="firstname">First Name*</label>
                <input type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        placeholder="Enter First Name" 
                        onChange={handleInputChange} required/></div>
            <div class="inner-item">
                <label for="lastname">Last name*</label>
                <input type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        placeholder="Enter Last Name"
                        onChange={handleInputChange} required/>
            </div>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="username">User name*</label>
                <input type="text"
                        id="username"
                        name="username"
                        value={formData.username}                        
                        placeholder="Enter User name" 
                        onChange={handleInputChange} required/>
            </div>
            <div class="inner-item">
                <label for="password">Password*</label>
                <input type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter Password" 
                        onChange={handleInputChange} required/>
            </div>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="phonenumber">Phone Number*</label>
                <input type="tel" id="phonenumber" name="phonenumber" 
                value={formData.phonenumber}
                placeholder="(000)000-0000" 
                onChange={handleInputChange} required/>
            </div>
            <div class="inner-item">
                <label for="email">E-Mail*</label>
                <input type="email" id="email" name="email" placeholder="ex:email@yahoo.com" 
                value={formData.email}
                onChange={handleInputChange} required/>
            </div>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="usertype">User Type*
                <select id="usertype" name="usertype" placeholder="Select User Type" value={formData.usertype} onChange={handleInputChange}>
                    <option value="">--Select--</option>
                    <option value="Doctor">Doctor</option>
                    <option value="HosUsr">HosUsr</option>
                    <option value="HosAdm">HosAdm</option>
                    <option value="Admin">Admin</option>
                </select>
                </label>
            </div>
            <div class="inner-item">Active
                <label for="Yes"><input type="radio" name="active" checked={formData.active === 'Yes'} value="Yes" onChange={handleInputChange} />   yes</label>
                <label for="No"><input type="radio" name="active" checked={formData.active === 'No'} value="No" onChange={handleInputChange} />    No</label></div>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="startdate">Start Date*</label>
                <input type="date" id="startdate" name="startdate" 
                value={formData.startdate}
                onChange={handleInputChange} required/>
            </div>
            <div class="inner-item">
                <label for="enddate">End Date*</label>
                <input type="date" id="enddate" name="enddate" 
                value={formData.enddate}
                onChange={handleInputChange} required/>
            </div>
        </div>
        <div id="item">
                   <label for="Streetline1">Address: Street Line1</label>
                     <input type="text"
                        id="street-Address"
                        name="Streetline1" placeholder="Street Line1" 
                        value={formData.Streetline1}
                        onChange={handleInputChange} required/>
        </div>
        <div id="item">
                   <label for="Streetline2">Street Line2</label>
                     <input type="text"
                        id="street-Address"
                        name="Streetline2" placeholder="Street Line2"
                        value={formData.Streetline2}
                        onChange={handleInputChange} required/>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="city">City</label>
                <input type="text"
                        id="City"
                        name="city" 
                        value={formData.city}
                        onChange={handleInputChange} />
            </div>
            <div class="inner-item">
                <label for="State">State/Province</label>
                <input type="text"
                        id="State"
                        name="State" 
                        value={formData.State}
                        onChange={handleInputChange} required/>
            </div>
        </div>
        <div id="item">
            <div class="inner-item">
                <label for="Postal">Postal / Zip Code</label>
                <input type="text"
                        id="Postal"
                        name="Postal" 
                        value={formData.Postal}
                        onChange={handleInputChange} required/>
            </div>
            <div class="inner-item">
                <label for="Country">Country </label>
                <select class="form-select" id="country" name="country" value={formData.country} onChange={handleInputChange}>
                    <option>select country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and Mcdonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                </select>
            </div>
        </div>
        <div id="item">
            <input type="submit" value="SUBMIT" />
        </div>
    </form>
    </div>

}
    
    {/* </div> */}


      
    </div>
      
    
    );
};

export default Tableform
