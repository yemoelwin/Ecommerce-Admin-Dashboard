import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='py-5' style={{ background: "#FFD700", minHeight: "100vh" }}>
                <h3 className="text-center" style={{ color: "white"}}>Login</h3>
                <div className="my-3 w-25 bg-white rounded-3 mx-auto p-4">
                    
                    <p className='text-center'>Login to your account to continue.</p>
                    <form action="">
                        <CustomInput
                            type="text"
                            label="Email Address"
                            id="email"
                            name="email"
                            // onChng={formik.handleChange("email")}
                            // onBlr={formik.handleBlur("email")}
                            // val={formik.values.email}
                        />
                        {/* <div className="error mt-2">
                            {formik.touched.email && formik.errors.email}
                        </div> */}
                        <CustomInput
                            type="password"
                            label="Password"
                            id="pass"
                            name="password"
                            // onChng={formik.handleChange("password")}
                            // onBlr={formik.handleBlur("password")}
                            // val={formik.values.password}
                        />
                        {/* <div className="error mt-2">
                            {formik.touched.password && formik.errors.password}
                        </div> */}
                        <div className="mb-3 text-end mt-3">
                            <Link to="/forgot-password" className="">
                            Forgot Password?
                            </Link>
                        </div>
                        <button
                            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                            style={{ background: "#ffd333" }}
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login