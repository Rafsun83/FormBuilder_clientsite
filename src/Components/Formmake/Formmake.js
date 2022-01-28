import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import '../Formmake/Formmake.css'

const Formmake = () => {


    const { generateId } = useParams()
    const [generate, setGenerate] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/generatevalue/${generateId}`)
            .then(res => res.json())
            .then(data => setGenerate(data))
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post('http://localhost:5000/submitvalue', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully')

                    reset()


                }

            })
    }
    console.log(errors)
    return (
        <div className='container make__form'>

            <form onSubmit={handleSubmit(onSubmit)} className='Input__makeform'>
                <label className='heading__form'>{generate.FormName}</label>
                <label htmlFor="">{generate.Text} <br />
                    <input type="text"  {...register("Name", { required: true, maxLength: 80 })} />
                </label> <br />

                <label>
                    {generate.Number} <br />
                    <input type="number"  {...register("Amount", { required: true, maxLength: 100 })} />
                </label> <br />

                <label>
                    {generate.Date} <br />
                    <input type="date"  {...register("Date", { required: true, maxLength: 100 })} />
                </label> <br />
                <label>
                    {generate.TextArea} <br />
                    <textarea type="textarea"  {...register("About", { required: true, maxLength: 100 })} />
                </label> <br />


                <button class="btn btn-success" type='submit' >Submit</button>

                {/* <Link to={`/formview/${generate._id}`}>
                   
                </Link> */}
            </form>
        </div>
    );
};

export default Formmake;