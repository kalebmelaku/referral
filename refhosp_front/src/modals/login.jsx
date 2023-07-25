import { useState } from "react";
import axios from "axios";
function LoginModal()
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault();

       const data = await axios.post('http://localhost:5000/login', {email, password})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        
        console.log(data);
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
		aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login Page</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email"
                                    aria-describedby="emailHelp" placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>
                            <button type="submit" className="mt-2 btn btn-primary btn-login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;