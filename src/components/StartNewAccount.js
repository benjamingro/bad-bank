import React from 'react';
import Button from 'react-bootstrap/Button';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(8,'password must be at least 8 charachters long').required(),
});

function StartNewAccount({handleNewAccount,setStartNewAccount}){

    const handleSubmit = (values) => {
        handleNewAccount({name:values.name,email:values.email,password:values.password}); 
    }

    const cancel = () =>{
        setStartNewAccount(false);
    }

    


    return(
        <>
            <div className="card">
                <div className="card-header" style={{fontWeight:"bold"}}>
                    Create a new account
                </div>
                <div className="card-body">
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            name: '',
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
                                <Field type="name" name="name" placeholder="Enter name" />
                                <div className="row w-100 mb-2">
                                    {errors.name && touched.name ? (

                                        <div className="col text-danger ">{errors.name}</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>

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

                                <div className="row w-100">
                                    <div className="col">
                                        <Button type="submit">Create account</Button>
                                    </div>
                                    <div className="col">
                                        <Button variant="secondary" onClick={cancel}>Cancel</Button>
                                    </div>
                                </div>

                                

                                
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default StartNewAccount