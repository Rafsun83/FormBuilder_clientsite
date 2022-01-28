import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hometable = ({ formname }) => {


    return (
        <div>
            <Table style={{ padding: '10px' }} striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th colSpan={2}>Name</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        formname.map(row => <tr>
                            <td>1</td>
                            <td colSpan={2}>
                                <Link to={`/formmake/${row._id}`} style={{ textDecoration: 'none' }} >
                                    {row.FormName}
                                </Link>


                            </td>




                            <td>
                                <button type="button" class="btn btn-success"  >
                                    <Link to={`/formview/${row._id}`} style={{ color: 'white', textDecoration: 'none' }} >
                                        Reports
                                    </Link>
                                </button>
                            </td>
                        </tr>)
                    }



                </tbody>
            </Table>


        </div>
    );
};

export default Hometable;