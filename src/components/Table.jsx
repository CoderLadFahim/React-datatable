import React from 'react'
import './Table.css';

export default function Table() {
    return (
        <table class="content-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Team</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Domenic</td>
                    <td>88,110</td>
                    <td>dcode</td>
                    <td>...</td>
                </tr>
                <tr class="active-row">
                    <td>2</td>
                    <td>Sally</td>
                    <td>72,400</td>
                    <td>Students</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nick</td>
                    <td>52,300</td>
                    <td>dcode</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    )
}

