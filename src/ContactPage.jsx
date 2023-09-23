import React from 'react';
 import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';


export default function ContactPage() {
      // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div id="contactpage">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
  }    