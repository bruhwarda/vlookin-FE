import React from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { apiRoutes, routePaths } from '../../routes/config';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const TenateForm = ({title }) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = React.useState({
        name : '',
        email: '',
        buildingNo:'',
        flatNo:'',
        mobileNo:'',
        officeNo:'',
        nationality: '',
        buildingName:''
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
      };

      const handleSave =  (event) => {
        event.preventDefault();
        // if(inputs.name && inputs.email  && inputs.buildingName && inputs.buildingName && inputs.flatNo && inputs.mobileNo
        //     && inputs.nationality && inputs.officeNo){
                const createVisit = postVisit(inputs);
        // }else{
        //     console.log('else block');
        //     // dispatch(showNotification({
        //     //     type:'error',
        //     //     message:"All fields are required"
        //     // }));
        // }
    }

    const postVisit = async (inputs) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let url = apiRoutes.postTenant;
        try {
            await axios
            .post( url,
                {
                    tenantName: inputs.name,
                    email: inputs.email,
                    buildingNo: inputs.buildingNo,
                    buildingName:inputs.buildingName,
                    flatNo:inputs.flatNo,
                    contact: inputs.mobileNo,
                    nationality: inputs.nationality,
                    officeNo: inputs.officeNo
                }
                ,config)
            .then((response) => {
                console.log(response.data);
            });                
        } catch (error) {
            console.log('errrrrr', error);
        }
    }    
    
    return (
        <>
            <div>
                <Header title = {'Add Tenant'} subtitle={'welcome to admin panel'} route = {routePaths.Tenant.login}/>
            </div>
            <div className="body">
                <h2>{title}</h2>
                <Row >
                    <Col span={10}>
                        <Input
                            placeholder="Full name"
                            className="form_input"
                            name = 'name'
                            value = {inputs.name}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                            name = 'email'
                            type = 'email'
                            value = {inputs.email}
                            onChange={handleChange}

                        />
                        <div>
                        <Input
                            placeholder="Mobile No."
                            className="form_input" 
                            name = 'mobileNo'
                            value = {inputs.mobileNo}
                            onChange={handleChange}
                            />


                            <Input
                                placeholder="Nationality"
                                className="form_input" 
                                name = 'nationality'
                                value = {inputs.nationality}
                                onChange={handleChange}
                                />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Building Name"
                            className="form_input"
                            name = 'buildingName'
                            value={inputs.buildingName}
                            onChange={handleChange}
                             />
                        <Input
                            placeholder="Building Code"
                            className="form_input"
                            name = 'buildingNo'
                            value={inputs.buildingNo}
                            onChange={handleChange}
                             />
                        <Input
                            placeholder="Flat no"
                            className="form_input" 
                            name = 'flatNo'
                            value = {inputs.flatNo}
                            onChange={handleChange}
                            />
                        <Input
                            placeholder="Office No. "
                            className="form_input" 
                            name = 'officeNo'
                            value = {inputs.officeNo}
                            onChange={handleChange}
                            />
                    </Col>
                </Row>
                <div>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                </div>
            </div>
        </>
    )
}

export default TenateForm
