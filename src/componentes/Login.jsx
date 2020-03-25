import React from 'react';


export default () =>{
    return(
        <div>
            <form>
                <h2>SIGN IN</h2>
                <label>Username</label><br/>
                <input type="text" class="form-control" ></input>
                <label>Password</label><br/>
                <input type="password" class="form-control"></input>
                {/*meu checkbox nao aceita um nome*/}
                <input  type="checkbox"></input><br/>
                <button type="button" class="btn btn-success btn-block" ><strong>SIGN IN</strong></button>
                <button type="button" class="btn btn-light btn-block btn-outline-dark"><strong>SIGN UP</strong></button><br/>
            </form>
        </div>
    )
}