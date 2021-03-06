import React from 'react'
import condicionVenta from '../data/condicionVenta';
import rubros from '../data/rubro';
import localidades from '../data/localidades';
import Select from 'react-select'

const FormNegocio = ({ razon_social, 
                       condicion_venta,
                       cuit, 
                       rubro,
                       setFormNegocio,
                       setBusiness, 
                       setContact
                    }) => {

                        
    const handleNext = ( e ) => {
        e.preventDefault();       
        if( isFormValid() )
        {
            setBusiness(false);
            setContact(true);
        }
        return;
        
    }  

    const isFormValid = () => {

        if(razon_social.trim().length === 0){
            return false;
        }

        if(condicion_venta.trim().length === 0 || condicion_venta === "Condición de venta"){
            return false;
        }

        if(cuit === 0){
            return false;
        }

        if(rubro.trim().length === 0 || rubro === "Selecionar Rubro"){
            return false;
        }
        return true;
    }   

    const test = ( e ) => {
        console.log(e)
        const target = {
            name: "rubro",
            value: e.value
        }
        setFormNegocio (target);
    }
    
    return (

        <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
            <div className="col-md-12 col-sm-12 col-xs-12">
                
                <form onSubmit = { handleNext }>                
                    <h3 className="base__formTittle">Datos del negocio</h3>
                    <hr className="base__hr" /> 

                    <div className="form-group col-lg-6">

                        <label 
                            className="control-label requiredField"                            
                        > Raz&oacute;n social
                            <span 
                                className="base__asteriskField"
                            >*
                            </span>
                        </label>

                        <input 
                            className="form-control"
                            id="razon_social" 
                            name="razon_social" 
                            placeholder="Ingrese el nombre de su negocio" 
                            type="text"
                            value = { razon_social }
                            onChange = { setFormNegocio }
                        />
                    
                    </div>                

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField"                           
                        >Seleccione una opci&oacute;n

                        <span 
                            className="base__asteriskField"
                        >*
                        </span>
                        </label>

                    <select 
                        className="select form-control" 
                        id="condicion_venta"
                        name="condicion_venta"
                        value = { condicion_venta }
                        onChange = { setFormNegocio }
                    >
                        {
                           condicionVenta.map(condicion => (                           
                               <option value = 
                               { condicion === "Condición de venta" ? 
                                                '' :
                                                 condicion 
                                                 }>
                                   { condicion }
                               </option>
                           )) 
                        }
                                      
                    </select>
                    </div>         

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField"
                           
                        >Cuit

                            <span 
                                className="base__asteriskField"
                            >*
                            </span>
                        </label>

                        <input 
                            className="form-control" 
                            id="cuit" 
                            name="cuit" 
                            placeholder="99999999999"
                            type="number"
                            value = { cuit }
                            onChange = { setFormNegocio }                            
                        />

                        <span 
                            className="help-block" 
                            id="hint_number"
                        > Ingrese los once d&iacute;gitos sin espacios ni guiones
                        </span>
                    </div>

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField" 
                            for="rubro"
                        >Seleccione una opci&oacute;n
                        <span 
                            className="base__asteriskField"
                        >*
                        </span>
                        </label>
                       
                        
                         <Select
                          isLoading={true}
                          placeholder = "Seleccione un rubro"
                          options={ rubros }                           
                          id="rubro" 
                          name="rubro"
                          value = { rubro }
                          onChange = { test }
                        />
                        

                    {/*<select 
                        className="select form-control" 
                        id="rubro"
                        name="rubro"
                        value = { rubro }
                        onChange = { setFormNegocio }
                    >
                        {
                           rubros.map(({value,label}) => (                           
                               <option value = 
                               { label
                                                 }>
                                   { value }
                               </option>
                           )) 
                        }                                      
                    </select>*/}
                        
                    </div>           

                    <div 
                        className="form-group col-lg-6"
                    >                        
                        <button 
                            className="btn btn-danger btn-block" 
                            name="submit"
                            type="submit"
                            value = "Siguiente"
                            disabled = { isFormValid }
                        >Siguiente
                        </button>
                        
                    </div>

                </form>
            </div>
        </div>

    )
}

export default FormNegocio
