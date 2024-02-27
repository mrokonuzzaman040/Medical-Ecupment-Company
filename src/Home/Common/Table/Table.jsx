import React from 'react';

const Table = ( { name, pksize, test, brand, index } ) => {
    return (
        <div className="overflow-x-auto ">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Reagent Name</th>
                        <th>Pack Size</th>
                        <th>Test</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{ index + 1 }</th>
                        <td>{ name }</td>
                        <td>{ pksize }</td>
                        <td>{ test }</td>
                        <td>{ brand }</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Reagent Name</th>
                        <th>Pack Size</th>
                        <th>Test</th>
                        <th>Brand</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;