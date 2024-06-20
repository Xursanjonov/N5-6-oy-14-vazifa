import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetValue } from '../../hooks/useGetValue'
import { useLoginUserMutation } from '../../context/api/users'

const initialState = {
    UserName: "",
    password: ""
}

const Login = () => {
    let navigate = useNavigate();
    const { formData, handleChange } = useGetValue(initialState)
    const [signIn, { data, isLoading, isSuccess, isError, error }] = useLoginUserMutation()

    useEffect(() => {
        if (isError) {
            alert(error?.data.message)
        }
        if (isSuccess) {
            localStorage.setItem('x-auth-token', data?.data?.token);
            navigate('/admin/create')
        }
    }, [isSuccess, isError])

    const handleCreateUser = e => {
        e.preventDefault()
        signIn(formData);
    }

    return (
        <div className="login-div w-[100%] h-[80vh] py-32">
            <div className="login w-[550px] h-[400px] mx-auto py-5 flex flex-col items-center justify-center gap-8 rounded-lg bg-transparent">
                <h2 className='text-4xl font-bold text-black'>Login</h2>
                <form onSubmit={handleCreateUser} className="w-[350px] grid grid-cols-1 gap-3">
                    <input value={formData.UserName} onChange={handleChange} type="text" name="UserName" placeholder='UserName'
                        className="input input-secondary font-semibold text-lg bg-white" />
                    <input value={formData.password} onChange={handleChange} type="password" name="password" placeholder='password'
                        className="input input-secondary font-semibold text-lg bg-white" />
                    <div className="w-full mt-5 flex items-center justify-between gap-4">
                        <button type='button' onClick={() => navigate("/")} className='btn font-bold w-[100px] btn-info'>Go Home</button>
                        <button type='button' onClick={() => navigate(-1)} className='btn font-bold w-[100px] btn-info'>Go Back</button>
                        <button disabled={isLoading} type='submit' className='w-28 btn btn-success font-bold text-lg text-black'>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(Login)