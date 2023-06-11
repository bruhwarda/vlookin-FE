import { Button } from "antd";
import React from "react";
import './style.css'


export const CustomButton = ({buttonName, handleSubmit}) =>{

    return(
        <div>
            <Button
                type="submit"
                variant='contained'
                onClick={handleSubmit}
                className = 'button'
            >
                {buttonName}
            </Button>
        </div>
    )

}