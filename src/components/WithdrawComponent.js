import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import {
    Link
} from "react-router-dom";


function WithdrawComponent({handleWithdraw,accountBalance}) {
    const schema = yup.object().shape({
        withdrawAmount: yup.number().typeError('must be a number')
            .required('required')
            .max(Number(accountBalance),'total amount must not exceed account balance')
            .positive('must be positive')
            .integer('must be an integer'),
            
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ withdrawAmount: '' }}
                onSubmit={values => {
                    console.log(values);
                    handleWithdraw(values.withdrawAmount); 
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched }) => (
                    <Form>
                        {/* <Field name="withdrawAmount" /> */}
                        <InputGroup className="d-flex justify-content-center">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field name="withdrawAmount" style={{maxWidth:'80px',textAlign:'end'}}/>
                            <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className="row w-100 mb-2">
                            {errors.withdrawAmount && touched.withdrawAmount ? (

                                <div className="col text-danger d-flex justify-content-center">{errors.withdrawAmount}</div>

                            ) : <div className="col">&nbsp;</div>}
                        </div>
                        <div className="row w-100">
                            <div className="col-lg-6 py-1 d-flex justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Withdraw
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

export default WithdrawComponent

