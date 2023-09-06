import React from "react";
import { CustomButton } from "../Button";



export const ReceiptTable = ({data, onChangeInput, handleButton, handleSave}) => {
    return (
        <div className='receipt-table'>
            <table>
                <thead>
                    <tr>
                        <th>Sr. no</th>
                        <th>Chq Date</th>
                        <th>Details</th>
                        <th>Dr A/c</th>
                        <th>Bank Name</th>
                        <th>
                            <th>Deposit Bank</th>
                            <th>Drawn</th>
                            <th>Bank</th>
                        </th>
                        <th>Cheque no</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ employeeId, name, email }) => (
                        <tr key={employeeId}>
                            <td>
                                <input
                                    name="sr. no"
                                    // value={name}
                                    type="text"
                                    onChange={onChangeInput}
                                />
                            </td>
                            <td>
                                <input
                                    name="email"
                                    // value={email}
                                    type="text"
                                    onChange={onChangeInput}
                                />
                            </td>
                            <td>
                                <input
                                    name="position"
                                    type="text"
                                    // //value={position}
                                    onChange={onChangeInput}
                                    //placeholder="Type Position"
                                />
                            </td>
                            <td>
                                <input
                                    name="position"
                                    type="text"
                                    //value={position}
                                    onChange={onChangeInput}
                                    //placeholder="Type Position"
                                />
                            </td>
                            <td>
                                <input
                                    name="position"
                                    type="text"
                                    //value={position}
                                    onChange={onChangeInput}
                                    //placeholder="Type Position"
                                />
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><input
                                                name="position"
                                                type="text"
                                                //value={position}
                                                onChange={onChangeInput}
                                                //placeholder="Type Position"
                                            /></td>
                                            <td><input
                                                name="position"
                                                type="text"
                                                //value={position}
                                                onChange={onChangeInput}
                                                //placeholder="Type Position"
                                            /></td>
                                            <td><input
                                                name="position"
                                                type="text"
                                                //value={position}
                                                onChange={onChangeInput}
                                                //placeholder="Type Position"
                                            /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <input
                                    name="position"
                                    type="text"
                                    //value={position}
                                    onChange={onChangeInput}
                                    //placeholder="Type Position"
                                />
                            </td>
                            <td>
                                <input
                                    name="position"
                                    type="text"
                                    //value={position}
                                    onChange={onChangeInput}
                                    //placeholder="Type Position"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='receipt-table-footer'>
                <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
            </div>
        </div>
    )
}