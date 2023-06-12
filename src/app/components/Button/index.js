import { Button } from "antd";
import React from "react";
import './style.css'


export const CustomButton = ({ buttonName, handleSubmit, bgColor, color }) => {

    return (
        <div>
            <Button
                type="submit"
                variant='contained'
                onClick={handleSubmit}
                style={{ backgroundColor: bgColor, color, color }}
                className='button'
            >
                {buttonName}
            </Button>
        </div>
    )

}