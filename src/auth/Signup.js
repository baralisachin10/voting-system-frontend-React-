import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`http://localhost:8000/api/signup`, {
                username,
                password
            })
            toast.success('Registration Successful')
            setUsername('')
            setPassword('')
        }
        catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (
        <>
        <ToastContainer position='top-center' theme='colored'/>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 shadow-lg mt-5 p-5 rounded-5">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="staticEmail"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={submitHandler}>SignUp</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup