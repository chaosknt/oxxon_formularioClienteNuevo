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
        cuit: '',
        rubro: ''
    });

    const {razon_social, condicion_venta, cuit, rubro } = formNegocio;    
    console.log(formNegocio)
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
        localidad:'',
        entre_calles:''
    });

    const { direccion, localidad, entre_calles } = formEntrega;  

     //formulario completo
    
    const handleForm = () => {
       const  completedForm = {...formNegocio, ...formContacto, ...formEntrega};
       console.log(completedForm);
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
                         setBusiness = { setBusiness }
                         setContact = { setContact }
                         setDelivery = { setDelivery }
                    />
                }
                
               
                { delivery &&  
                     <FormEntrega
                         direccion = { direccion }
                         localidad = { localidad }
                         entre_calles = { entre_calles }
                         setFormEntrega = { setFormEntrega }
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
