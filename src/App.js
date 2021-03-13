//#region Imports
import React, { useState } from 'react'
import axios from 'axios';

import { useForm } from './hooks/useForm'

import FormContacto from './components/FormContacto'
import FormEntrega from './components/FormEntrega'
import FormNegocio from './components/FormNegocio'
import EndForm from './components/EndForm'

import { titles } from './strings/titles'
import { endPoints } from './endPoints/endPoints';
import { succMsg } from './strings/succMsg';

//#endregion

/*
LIBRERIAS
select 2 npm i --save react-select
validator npm i --save react-select
input  npm install react-input-mask --save
saas npm i sass
Axios npm i axios
*/
const App = () => {

    const [mainTitle, setMainTitle] = useState(titles.completa);
             
    //#region Formulario de negocio
    const [business, setBusiness ] = useState(true);
    const [formNegocio, setFormNegocio] = useForm({
        razon_social: '',
        condicion_venta: '',
        cuit: ''
    });
        
    const {razon_social, condicion_venta, cuit } = formNegocio; 

    const [rubro, setRubro] = useState({
        rubro:''
    });
    
    const updateRubro = ({ value }) => {
        setRubro({...rubro, rubro:value})
    }  
    
    //#endregion
    
    //#region Formulario de contacto
    const [contact, setContact] = useState(false)
    const [formContacto, setFormContacto] = useForm({
        email: '',
        telefono: ''
    });
    
    const { email, telefono } = formContacto;
    //#endregion
    
    //#region  Formulario de entrega
    const [delivery, setDelivery] = useState(false)
    const [formEntrega, setFormEntrega] = useForm({
        direccion:'',        
        entre_calles:''
    });

    const { direccion, entre_calles } = formEntrega;  

    const [localidad, setLocalidad] = useState({
        localidad:'Seleccione una Localidad'
    });

    const updateLocalidad = ( { value }) => {
        setLocalidad({ ...localidad, localidad: value })
    };

    //#endregion
    
    //#region Formulario Finalizar registro
    const [endForm, setEndForm] = useState({
            status: false,
            title: titles.NoEnviado,
            msg: 'Hubo un error y no se ha podido enviar el formulario, por favor intente de nuevo o escriba a pedidos@oxxon-cd.com',
            alertClassName: 'alert alert-danger text-center mt-5 mb-5',
            buttonClassName: 'btn btn-outline-danger',
            buttonText: 'Volver a cagar datos',
            buttonLink: 'http://oxxon-cd.com/clientes',           
    });
      
    const { title, msg, alertClassName, buttonClassName, buttonText, buttonLink, showConfirmationForm } = endForm;
    
    //#endregion

     //#region Ingresar datos via API a la base de datos
    const handleForm = async () => {
        
       const baseUrl = endPoints.INSERT_DATA_INTO_DB;

       const  completedForm = { ...formNegocio, 
                                ...rubro, 
                                ...localidad,
                                ...formContacto,
                                ...formEntrega,                                                              
                                };
        let f = new FormData();

        handleFormData(completedForm, f);      

        const response =  await axios.post(baseUrl, f);
                
        if(response.status === 200){
            setDelivery(false);
            setEndForm({...endForm, 
                status: true,
                title: titles.Enviado,
                msg: succMsg.succ_confirmacion,
                alertClassName: 'alert alert-success text-center mt-5 mb-5',
                buttonClassName: 'btn btn-outline-success',
                buttonText: 'Volver al menú principal',
                buttonLink: 'http://oxxon-cd.com/'
            });
            setMainTitle(titles.finalizado);            
        }else
        {
            setEndForm({...endForm, status: true });       
        }
       
    };

    const handleFormData = ( completedForm, f) => {

        f.append("razon_social", completedForm.razon_social);
        f.append("cuit", completedForm.cuit);
        f.append("localidad", completedForm.localidad);
        f.append("direccion", completedForm.direccion);
        f.append("entre_calles", completedForm.entre_calles);
        f.append("telefono", completedForm.telefono);
        f.append("rubro", completedForm.rubro);
        f.append("condicion_venta", completedForm.condicion_venta);
        f.append("email", completedForm.email);
        f.append("METHOD", "POST");
    };

    //#endregion
    
    return (
        <>
            <h3 className="base__MainTittle">{ mainTitle }</h3>
              <div className="base__box">
                
                { business &&                     
                   <FormNegocio 

                        razon_social = { razon_social }
                        condicion_venta = { condicion_venta }
                        cuit = { cuit }   
                        rubro = { rubro }                     
                        updateRubro = { updateRubro }
                        setFormNegocio = { setFormNegocio }                        
                        setBusiness = { setBusiness }
                        setContact = { setContact }
                   />
                }

                { contact &&  
                    <FormContacto

                         email = { email }
                         telefono = { telefono }
                         setFormContacto = { setFormContacto }         
                         setContact = { setContact }
                         setDelivery = { setDelivery }
                    />
                }                
               
                { delivery &&  
                     <FormEntrega

                         direccion = { direccion }                         
                         entre_calles = { entre_calles }
                         setFormEntrega = { setFormEntrega }
                         localidad = { localidad }
                         updateLocalidad = { updateLocalidad }                         
                         handleForm = { handleForm }
                         
                     />
                }     

                { endForm.status &&
                     <EndForm  

                        title = { title }
                        msg = { msg }
                        alertClassName = { alertClassName }
                        buttonClassName = { buttonClassName }
                        buttonText = { buttonText }
                        buttonLink = { buttonLink }
                        showConfirmationForm = { showConfirmationForm }

                     />
                }         
                               
            </div>
    </>
    )
}

export default App
