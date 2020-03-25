import React from 'react';
import './Login.css';

export default () =>{
    return(
        <div className="Center-box-login">
            <form>
                <h2>SIGN IN</h2>
                <label>Username</label><br/>
                <input type="text" className="form-control" ></input>
                <label>Password</label><br/>
                <input type="password" className="form-control"></input>
                {/*meu checkbox nao aceita um nome*/}
                <input  type="checkbox"></input><br/>
                <button type="button" className="btn btn-success btn-block" ><strong>SIGN IN</strong></button>
                <button type="button" className="btn btn-light btn-block btn-outline-dark"><strong>SIGN UP</strong></button><br/>
            </form>
        </div>
    )
}