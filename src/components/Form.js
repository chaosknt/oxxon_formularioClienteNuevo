import React from 'react'

const Form = () => {
    return (
        
  <div className="container-fluid row">
   <div className="col-md-12 col-sm-12 col-xs-12">
    <form>
       
     <h3>Datos de l negocio</h3>
     <hr className="base__hr"></hr>
        
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
    
     <h3>Datos de Contacto</h3>
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
         
     <h3>Datos de Entrega</h3>
     <hr className="base__hr"></hr>
     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="text1">
       Direcci&oacute;n
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <input className="form-control" id="text1" name="text1" placeholder="Calle, altura, piso, dpto" type="text"/>
      <span className="help-block" id="hint_text1">
       Ingrese s&uacute; direccion completa.
      </span>
     </div>

     <div className="form-group col-lg-6">
      <label className="control-label requiredField" for="localidad">
       Seleccione una opci&oacute;n
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <select className="select form-control" id="localidad" name="localidad">
       <option value="Ingrese su localidad">
        Ingrese su localidad
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>

     <div className="form-group col-lg-12">
      <label className="control-label requiredField" for="entre_calles">
       Entre calles
       <span className="base__asteriskField">
        *
       </span>
      </label>
      <input className="form-control" id="entre_calles" name="entre_calles" placeholder="Entre calles" type="text"/>
      <span className="help-block" id="hint_entre_calles">
       Ingrese las entre calles y/o  una referencia.
      </span>
     </div>
    
    
     <div className="form-group col-lg-12">
      
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" checked/>
        <label class="form-check-label" for="exampleCheck1">Acepto los <a href="#"> Términos y Condiciones </a>
        y autorizo el uso de mis datos de acuerdo a la 
        <a href="#"> Declaración de Privacidad.</a>
        
        </label>
        </div>
      
     </div>
     

     <div className="form-group col-lg-6">
      <div>
       <button className="btn btn-danger  btn-block" name="submit" type="submit">
        Enviar
       </button>
      </div>
     </div>

    </form>
   </div>
  </div>


    )
}

export default Form
