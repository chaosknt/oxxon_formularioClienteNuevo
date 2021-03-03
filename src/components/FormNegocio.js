import React from 'react'

const FormNegocio = () => {
    return (
        <div className="container-fluid row">
   <div className="col-md-12 col-sm-12 col-xs-12">
    <form>
       
     <h3 className="base__formTittle">Datos del negocio</h3>
     <hr className="base__hr" />
        
     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="razon_social">
       Raz&oacute;n social
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <input className="form-control" id="razon_social" name="razon_social" placeholder="Ingrese el nombre de su negocio" type="text"/>
      
     </div>

     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="condicion_venta">
       Seleccione una opci&oacute;n
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <select className="select form-control" id="condicion_venta" name="condicion_venta">
       <option value="Condici&oacute;n de venta">
        Condici&oacute;n de venta
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>         

     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="number">
       Cuit
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <input className="form-control" id="number" name="number" placeholder="99999999999" type="text"/>
      <span className="help-block" id="hint_number">
       Ingrese los once d&iacute;gitos sin espacios ni guiones
      </span>
     </div>

     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="rubro">
       Seleccione una opci&oacute;n
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <select className="select form-control" id="rubro" name="rubro">
       <option value="Ingrese un rubro">
        Ingrese un rubro
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>           

     <div className="form-group col-lg-6">
      <div>
       <button className="btn btn-danger  btn-block" name="submit" type="submit">
        Siguiente
       </button>
      </div>
     </div>

    </form>
   </div>
  </div>

    )
}

export default FormNegocio
