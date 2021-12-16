import React from 'react'
import '../../styles/login.css'

export const Login = () => {
    return (
        <div>
            <div class="row justify-content-center pt-5 mt-5  mr-1">
                <div class="col-md-4 formulario">
                    <form >
                        <div class="form-group text-center pt-3">
                            <h1 class="text-dark">Iniciar Sesión</h1>
                        </div>
                        <span>El
                            Usuario
                            es obligatorio</span>
                        <div class="form-group mx-sm-4 pt-3">
                            <input type="text" class="form-control" name="usuario"   placeholder="Usuario" minlength="5" required/>
                        </div>
                        <span>La
                            contraseña es obligatoria</span>
                        <div class="form-group mx-sm-4 pb-3">
                            <input type="password" class="form-control" name="password" placeholder="Contraseña" minlength="6" required/>
                        </div>
                        <div class="form-group mx-sm-4 pb-5">
                            <input type="submit" class="btn btn-primary btn-block ingresar" value="Ingresar"/>
                        </div>
                        <div>
                            <a class="txt1" routerLink="/registro">Registro</a>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="recordarmeCheck1" name="recordarmenCheck1"/>
                            <label class="form-check-label" for="recordarmenCheck1">Recordarme</label>
                        </div>
                    </form>
                </div>
             </div>
        </div>
    )
}
