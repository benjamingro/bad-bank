import React from 'react';

import Button from 'react-bootstrap/Button';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

function Login({ validateLogin,setStartNewAccount }) {

    const [invalidLogin,setInvalidLogin] = React.useState(false); 
    const handleSubmit = (values) =>{
        // alert('handleSubmit');
        
        // alert(values.email);
        if(!validateLogin(values.email,values.password)){
            setInvalidLogin(true); 
        }
        else{
            setInvalidLogin(false); 
        }
    }

    const startNewAccount = () =>{
        setStartNewAccount(true);
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({
                            // handleSubmit,
                            // handleChange,
                            // handleBlur,
                            // values,
                            touched,
                            // isValid,
                            errors,
                        }) => (
                            <Form noValidate >
                                <Field type="email" name="email" placeholder="Enter email" />
                                <div className="row w-100 mb-2">
                                    {errors.email && touched.email ? (

                                        <div className="col text-danger ">{errors.email}</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>
                                
                                
                                <Field type="password" name="password" placeholder="Enter password" />

                                <div className="row w-100 mb-2">
                                    {errors.password && touched.password ? (

                                        <div className="col text-danger ">{errors.password}</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>

                                <Button type="submit" className={touched.email?'':'disabled'} name="submit">Log_in</Button>

                                <div className="row w-100 mb-2">
                                    {invalidLogin ? (

                                        <div className="col text-danger ">Account not found. Try again or create a new account.</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="row w-100">
                <div className="col">
                    <Button variant="link" onClick={startNewAccount}>Create a new account</Button>
                    {/* <a onClick={startNewAccount}>Create</a> a new account. */}
                </div>
            </div>
        </>
    )
}

export default Login

