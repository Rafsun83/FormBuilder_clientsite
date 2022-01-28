import React, { useEffect, useState } from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Formview = () => {
    const { generateId } = useParams()
    const [generate, setGenerate] = useState({})
    const [submit, setSubmitvalue] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/generatevalue/${generateId}`)
            .then(res => res.json())
            .then(data => setGenerate(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/submitvalue`)
            .then(res => res.json())
            .then(data => setSubmitvalue(data))
    }, [])
    return (
        <div className='container' style={{ marginTop: '5rem' }}>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    {generate.FormName}
                </ListGroup.Item>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> {generate.Text}</th>
                            <th> {generate.Number}</th>
                            <th> {generate.Date}</th>
                            <th> {generate.TextArea}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            submit.map(sub => <tr>
                                <td>{sub.Name}</td>
                            </tr>)
                        } */}
                        <tr>
                            <td>bu</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>


                    </tbody>
                </Table>
            </ListGroup>
        </div>
    );
};

export default Formview;