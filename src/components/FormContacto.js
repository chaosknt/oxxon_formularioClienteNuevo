import React from 'react'

const FormContacto = () => {
    return (
        <div className="container-fluid row">
   <div className="col-md-12 col-sm-12 col-xs-12">
    <form>
       
         
     <h3 className="base__formTittle">Datos de Contacto</h3>
     <hr className="base__hr"></hr>
     
     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="email">
       Email
       <span className="base__base__asteriskField">
        *
       </span>
      </label>
      <input className="form-control" id="email" name="email" placeholder="example@domain.com" type="text"/>
      
     </div>

     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="telefono">
       Tel&eacute;fono# 
       <span className="base__asteriskField">
         *
       </span>
      </label>
      <input className="form-control" id="telefono" name="telefono" placeholder="Ingrese su tel&eacute;fono de contacto" type="text"/>
     </div>
         
     <div className="form-group col-lg-6">
      <div>
       <button className="btn btn-danger  btn-block" name="submit" type="submit">
        Anterior
       </button>
      </div>
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

export default FormContacto
