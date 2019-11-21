

export default function validate(data){
    let errors = {};
    //name 
    if(!data.name){
        errors.name = "Skriv inn navnet ditt";
    }else if(data.name.length < 1 || data.name.length > 999){
        errors.name = "Ugyldig navn input";
    }
    //email 
    if(!data.email){
        errors.email = "Skriv inn din E-post";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Ugyldig E-post adresse";
    }
    
    //phone 
    if(!data.phone){
        errors.phone = "Oppgi telefonnummeret";
    }else if(data.phone.length < 8 || data.phone.length > 8){
        errors.phone = "Ugyldig telefonnr";
    }
    //areacode
    if(!data.areacode){
        errors.areacode = "Oppgi postnummer";
    }else if(data.areacode.length > 4 || data.areacode.length < 4){
        errors.areacode = "Ugyldig postnummer";
    }

    return errors;
};