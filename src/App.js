import React, { useState } from 'react'
import FormContacto from './components/FormContacto'
import FormEntrega from './components/FormEntrega'
import FormNegocio from './components/FormNegocio'
import { useForm } from './hooks/useForm'


const App = () => {
                      
    //formulario de negocio
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
    
    console.log(rubro.rubro)

    const updateRubro = ({ value }) => {
        setRubro({...rubro, rubro:value})
    }    
    
    //formulario de contacto
    const [contact, setContact] = useState(false)
    const [formContacto, setFormContacto] = useForm({
        email: '',
        telefono: ''
    });

    const { email, telefono } = formContacto;
    
    //formulario de entrega
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
    }
     //formulario completo
    
    const handleForm = () => {
       const  completedForm = { ...formNegocio, 
                                ...rubro, 
                                ...localidad,
                                ...formContacto,
                                ...formEntrega,                                                              
                                };

       console.log(completedForm)
       
    }
    
    return (
        <>
            <h3 className="base__MainTittle">Completá tus datos</h3>
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
                         updateLocalidad = { updateLocalidad }
                         setDelivery = { setDelivery }
                         setContact = { setContact }
                         handleForm = { handleForm }
                         
                     />
                }              
                               
            </div>
        </>
    )
}

export default App
