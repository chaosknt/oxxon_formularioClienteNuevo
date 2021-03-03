import React from 'react'
import Form from './components/Form'
import FormContacto from './components/FormContacto'
import FormEntrega from './components/FormEntrega'
import FormNegocio from './components/FormNegocio'


const App = () => {
    return (
        <>
            <h3 className="base__MainTittle">Completá tus datos</h3>
            <div className="base__box">
                
                <FormNegocio />
                <FormContacto />
                <FormEntrega />
            </div>
        </>
    )
}

export default App
