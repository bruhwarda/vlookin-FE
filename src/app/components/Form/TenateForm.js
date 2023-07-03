import React, { useState } from 'react'
import { Col, Input,Row, Form } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import OTPmodal from '../Modal/OTPmodal';
import { apiRoutes, routePaths } from '../../routes/config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';
import BuildingDropDown from '../DropDown';
import { useNavigate } from 'react-router';

const TenateForm = ({title }) => {
    const navigate = useNavigate();
    const[modalOpen, setModalOpen] = useState(false);

    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        buildingNo:'',
        flatNo:'',
        mobileNo:'',
        officeNo:'',
        nationality: '',
    });

    const [selectedBuilding, setSelectedBuilding] = useState('');

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });

    };

    const handleBuildingChange = (value) => {
        setSelectedBuilding(value);
      };

      const onCancel = () => {
        setModalOpen(false)
    }

    const handleSave =  (event) => {
        event.preventDefault();
        if(inputs.name && inputs.email  && selectedBuilding && inputs.flatNo && inputs.mobileNo
            && inputs.nationality && inputs.officeNo){
                const createVisit = createTenant(inputs);
        }else{
            toast.error('Complete Form')
        }
    }

    const createTenant = async (inputs) => {
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
                    buildingName:selectedBuilding,
                    flatNo:inputs.flatNo,
                    contact: inputs.mobileNo,
                    nationality: inputs.nationality,
                    officeNo: inputs.officeNo
                }
                ,config)
            .then((response) => {
                if(response.data.status == 200){
                    setModalOpen(true)
                    navigate(routePaths.Tenant.listTenant);
                }else{
                    toast.error('Something went wrong')
                }
            });                
        } catch (error) {
            toast.error(error)
        }
    }    
    
    return (
        <>
            <div>
                <Header title={'Add Tenant Details'} subtitle={'welcome to tenant panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <Row >
                    <Col span={10}>
                        <Input
                            placeholder="Full name"
                            className="form_input"
                            name='name'
                            value={inputs.name}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                            name='email'
                            type='email'
                            value={inputs.email}
                            onChange={handleChange}

                        />
                        <div>
                            <Input
                                placeholder="Mobile No."
                                className="form_input"
                                name='mobileNo'
                                value={inputs.mobileNo}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Nationality"
                                className="form_input"
                                name='nationality'
                                value={inputs.nationality}
                                onChange={handleChange}
                            />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <label style={{color:'#4A0D37'}}>Building Name</label>
                        <BuildingDropDown value={selectedBuilding} handleChange={handleBuildingChange} />
                        <Input
                            placeholder="Flat no"
                            className="form_input"
                            name='flatNo'
                            value={inputs.flatNo}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Office No. "
                            className="form_input"
                            name='officeNo'
                            value={inputs.officeNo}
                            onChange={handleChange}
                            />
                    </Col>
                </Row>
                <div className='addform_btn'>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                </div>
            </div>
            <OTPmodal open={modalOpen} onCancel={onCancel} />
            <CustomAlert/>
        </>
    )
}

export default TenateForm;
