import React from 'react'

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
        setBusiness(false);
        setContact(true);
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
                        <option 
                            value="Condici&oacute;n de venta"
                        >Condici&oacute;n de venta
                        </option>

                        <option 
                            value="Second Choice"
                        >Second Choice
                        </option>                
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

                        <select 
                            className="select form-control"
                            id="rubro"
                            name="rubro"
                            value = { rubro }
                            onChange = { setFormNegocio }
                        >
                        <option 
                            value="Ingrese un rubro"
                        >Ingrese un rubro
                        </option>

                        <option 
                            value="Second Choice"
                        >Second Choice
                        </option>                
                        </select>
                    </div>           

                    <div 
                        className="form-group col-lg-6"
                    >
                        
                        <button 
                            className="btn btn-danger btn-block" 
                            name="submit"
                            type="submit"
                            value = "Siguiente"
                        >Siguiente
                        </button>
                        
                    </div>

                </form>
            </div>
        </div>

    )
}

export default FormNegocio
