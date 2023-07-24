import React, { useState } from "react";
import { Select } from "antd";

const {Option} = Select;


export const RolesSelector = ({handleChange, value}) => {
    const [roles, setRoles] = useState([
        {"roleId": 1,"name":"Admin"},
        {"roleId":2,"name":"SuperAdmin"},
        {"roleId":3,"name":"Tenant"},
        {"roleId":4,"name":"Maintenance"},
        {"roleId":5,"name":"Visitor"}

    ]);

    return(
        <div>
            <Select
                placeholder="Select your role"
                onChange={handleChange}
                value={value}
                className='building_selector'
                >
                {roles?.map((role) => (
                    <Option key={role.id} value={role.name}>
                        {role.name}
                    </Option>
                ))}
            </Select>
        </div>
    )
}