import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import '../GenerateForm/GenerateForm.css'
import axios from 'axios';


const Generateform = () => {


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/generatevalue', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully')
                    reset()

                }
            })
    }



    console.log(errors)
    return (
        <div className='container' style={{ marginTop: '5rem' }}>
            {/* start generate form  */}
            <div className='generate__form'>
                <div style={{ width: '300px' }}>
                    <form onSubmit={handleSubmit(onSubmit)} className='Input__form'>
                        <input type="text" placeholder="Form Name"  {...register("FormName", { required: true })} /> <br />



                        <input type="text" placeholder="Number" {...register("Number", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Text" {...register("Text", { required: true, maxLength: 100 })} />


                        <br />

                        <input type="text" placeholder="Date" {...register("Date", { required: true, maxLength: 100 })} /> <br />
                        <input type="textarea" placeholder="Text Area" {...register("TextArea", { required: true, maxLength: 100 })} /> <br />



                        <button class="btn btn-success" type='submit' >Generate</button>

                    </form>
                </div>
                {/* end generate form  */}
                <div style={{ textAlign: 'left' }}>
                    {/* start input field generate button  */}
                    <div className='Form__button'>


                        <button type="button" class="btn btn-success">Number</button> <br />

                        <button type="button" class="btn btn-success">Text</button> <br />

                        <button type="button" class="btn btn-success">Date</button> <br />

                        <button type="button" class="btn btn-success">Textarea</button> <br />




                    </div>
                    {/* end input field generate button  */}
                </div>
            </div>
        </div>
    );
};

export default Generateform;