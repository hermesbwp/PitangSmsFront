import React from 'react';
import './Registro.css'

export default () => {
    return(
        <div className="Center-box-registro">
            <form>
                <h2>SIGN UP</h2>
                <label>Username</label><br/>
                <input type="text" class="form-control" ></input>
                <label>Email</label><br/>
                <input type="email" class="form-control" ></input>
                <label>Password</label><br/>
                <input type="password" class="form-control"></input>
                <label>Confirm Password</label><br/>
                <input type="password" class="form-control"></input>
                {/*meu checkbox nao aceita um nome.
                esse check vai aceitar os termos de uso
                */}
                <input  type="checkbox"></input><br/>
                <button type="button" class="btn btn-success btn-block" ><strong>REGISTER</strong></button>
            </form>
        </div>
    )
}