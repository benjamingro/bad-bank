import React from 'react';
// import { Formik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import Form.Group from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import {
    Link
} from "react-router-dom";

function DepositComponent({ handleDeposit }) {
    const schema = yup.object().shape({
        depositAmount: yup.number().typeError('must be a number')
            .required('required')
            .positive('must be positive')
            .integer('must be an integer'),
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ depositAmount: '' }}
                onSubmit={values => {
                    console.log(values);
                    handleDeposit(values.depositAmount);
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched }) => (
                    <Form>
                        {/* <Field name="depositAmount" /> */}
                        <InputGroup className="d-flex justify-content-center">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field name="depositAmount" style={{ maxWidth: '80px', textAlign: 'end' }} />
                            <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className="row w-100 mb-2">
                            {errors.depositAmount && touched.depositAmount ? (

                                <div className="col text-danger d-flex justify-content-center">{errors.depositAmount}</div>

                            ) : <div className="col">&nbsp;</div>}
                        </div>
                        <div className="row w-100">
                            <div className="col-lg-6 py-1 d-flex justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Deposit
                                </Button>
                            </div>
                            <div className="col-lg-6 py-1 d-flex justify-content-center">
                                <Link to="/account" className="btn btn-secondary">Cancel</Link>
                            </div>
                        </div>

                    </Form>
                )}

            </Formik>
        </>
    )
}

export default DepositComponent

