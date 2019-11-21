import { useState, useEffect} from 'react';

const useForm = (callback, validate) => {
    const [data, setData] = useState({name: "" , email:"", phone:"" , areacode: "", comment:""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setisSubmitting] = useState(false);
 
 
    const handleChange = (e) => setData(
      {...data, 
        [e.target.name]: e.target.value
      });
  
    const handleSubmit = e => {
      e.preventDefault();
      
      fetch('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      });

              /*var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.bring.com/shippingguide/api/postalCode.json')
        xhr.send()
      
      console.log(xhr.responseText);*/


      setErrors(validate(data));
      setisSubmitting(true);
      callback();
    };

    useEffect(() => {
        //sjekker om det er noe errors, hvis ikke call callback
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        };
      },[errors])


    return {
        handleChange,
        handleSubmit,
        data, 
        errors
    }
};

export default useForm;