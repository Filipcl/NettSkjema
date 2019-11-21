
import React from "react";
import useForm from './useForm';
import validate from './FormValidation';
import '../css/main.css';
import '../css/normalize.css';
import '../css/style.css';

const Form = () => {
  const{handleChange, handleSubmit, data, errors} = useForm (submit , validate); 

    function submit(){

    };
  
      return (
    <section >
      <div className="container">

      <form noValidate action="https://heksemel.no/case/submit.php" method="post" onsubmit={handleSubmit}>
        <fieldset>
          <legend>Informasjon</legend>
          <label className="hidden">applicant:</label>
          <textarea className="hidden" type ='hidden' id="applicant" name="applicant" value='Filip Larsen'>Filip Larsen</textarea>
          
          <div className="form-row">
            <input
              className={`${errors.name && "inputError"}`}
              name="name"
              type="name"
              id="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
            />
           
        </div>
        <div> {errors.name && <p className="error">{errors.name}</p>}</div>

        <div className="form-row">
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
        </div>
        <div>{errors.email && <p className="error">{errors.email}</p>}</div> 
        

        <div className="form-row">
            <input
              className={`${errors.phone && "inputError"}`}
              name="phone"
              type="phone"
              id="phone"
              placeholder="Phone"
              value={data.phone}
              onChange={handleChange}
            />     
        </div>
        <div>{errors.phone && <p className="error">{errors.phone}</p>}</div>

        <div className="form-row">
            <input
              className={`${errors.areacode && "inputError"}`}
              name="areacode"
              type="areacode"
              id="areacode"
              placeholder="Areacode"
              value={data.areacode}
              onChange={handleChange}
            />
            
        </div>
        <div>{errors.areacode && <p className="error">{errors.areacode}</p>}</div>

        <div className="form-row">
          <textarea type="text" id="comment" name="comment" placeholder= "Comment" value={data.comment} onChange={e => handleChange(e)}></textarea>
        </div>
          
          <div className="form-row">
          <button id="submit" type="submit">Send inn!</button>
          </div>
        </fieldset>
      </form>
      </div>
    </section>
     );
    };
export default Form;