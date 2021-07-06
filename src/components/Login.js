import React from 'react';

// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required(),
    // password: yup.string().required(),
});

function Login({validateLogin}) {
    // const handleSubmit = () =>{
    //     alert('handleSubmit');
    // }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                    >
                        {({
                            handleSubmit,
                            // handleChange,
                            // handleBlur,
                            // values,
                            touched,
                            // isValid,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    {/* <Form.Control type="email" name="email" placeholder="Enter email" /> */}
                                    <Field type="email" name="email" placeholder="Enter email" />

                                </Form.Group>
                                <div className="row w-100 mb-2">
                                    {errors.email && touched.email ? (

                                        <div className="col text-danger ">{errors.email}</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <div className="row w-100 mb-2">
                                    {errors.password && touched.password ? (

                                        <div className="col text-danger ">{errors.password}</div>

                                    ) : <div className="col">&nbsp;</div>}
                                </div>

                                <Button type="submit">Submit form</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login

