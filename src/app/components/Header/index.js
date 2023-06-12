import React from "react";
import { ExportOutlined } from '@ant-design/icons';
import './style.css'


export const Header = (props) => {
    return(
        <div className="header">
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
            <div className="logout_Btn">
                <p className="logout_heading">Logout</p>
                <ExportOutlined />
            </div>
        </div>
    )
}