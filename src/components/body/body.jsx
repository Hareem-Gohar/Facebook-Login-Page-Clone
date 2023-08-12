import React, { useState } from 'react';

const Body = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setUserData({ email, password });

        // Clear input fields after submission
        event.target.email.value = '';
        event.target.password.value = '';
    };

    return (
        <div style={{ backgroundColor: "#f0f2f5", height: "100vh" }}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12" style={{ paddingTop: "150px" }}>
                        <h1 className="text-primary fw-bolder display-3 mb-0">facebook</h1>
                        <p className="fs-4 fw-semibold w-75">Connect with friends and the world around you on facebook</p>
                        <div className="bg-white w-75 rounded-2">
                            <p className="text-primary text-center fs-4 mt-5 fw-bold p-2">User's Data:</p>
                            <hr />
                            <p className="fw-semibold fs-5  px-3 mb-0">Email: {userData.email}</p>
                            <p className="fw-semibold  fs-5 px-3 py-2">Password: {userData.password}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 text-center" style={{ paddingTop: "120px" }}>
                        <div className="Box rounded-2 bg-white p-3" style={{ boxShadow: "0px 3px 5px rgb(211, 211, 211)" }}>
                            <form onSubmit={handleLoginSubmit}>
                                <input type="email" name="email" placeholder="Email or phone no" className="mt-2 p-2 border form-control" style={{ outline: "none" }} />
                                <input type="password" name="password" placeholder="Password" className="mt-3 p-2 border form-control" style={{ outline: "none" }} />
                                <button type="submit" className="btn btn-primary w-100 mt-3 fw-bold">Login</button>
                                <p className="text-primary text-center mt-2">Forgot password?</p>
                                <hr />
                                <button className="btn text-white m-auto" style={{ backgroundColor: "#32cd32" }}>Create new account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
