import { Box, Button, ButtonBase, Checkbox, Container, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import "./login.css"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const LoginForm = ({ loginType }) => {
    const [firstCheck, setFirstCheck] = useState(false)
    const [secondCheck, setsecondCheck] = useState(false)
    // First Form  
    const [MobileNumber, setMobileNumber] = useState("");
    const [BirthDate, setBirthDate] = useState("2000-01-01");
    const handleCustomerForm = (e) => {
        e.preventDefault()
        console.log(MobileNumber, BirthDate)
    };
    // Second Form
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState('');
    const handleSuppliersForm = (e) => {
        e.preventDefault()
        console.log(Email, Password)
    };
    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };

    return (
        <>
            { loginType === "customer" ? (
                <form onSubmit={handleCustomerForm}>
                    <div className="form__feilds">
                        <Box p={1}>
                            <h5 id="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>LOGIN VIA VIPPS ID</font></font></h5>
                        </Box>
                        <Box pt={3}>
                            <TextField className="form__feild" value={MobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} type="tel" label="MOBILE NUMBER" variant="outlined" fullWidth required />
                            <TextField className="form__feild" value={BirthDate} onChange={(e) => { setBirthDate(e.target.value) }} label="Birthday" variant="outlined" type="date" defaultValue="2000-01-01" fullWidth required />
                            <FormControlLabel
                                control={<Checkbox checked={firstCheck} onChange={(e) => { setFirstCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                label="Confirm none earlier payment remarks"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={secondCheck} onChange={(e) => { setsecondCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                label="Accept privacy and terms"
                            />
                            <div className="form__button">
                                <Button type={'submit'} variant="contained" color="primary" fullWidth>
                                    BANKID ON MOBILE
                                </Button>
                            </div>
                        </Box>
                    </div>
                </form>
            ) : (
                    <form onSubmit={handleSuppliersForm}>
                        <div className="form__feilds">
                            <Box p={1}>
                                <h5 id="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>LOGIN VIA EMAIL</font></font></h5>
                            </Box>
                            <Box pt={3}>
                                <TextField className="form__feild" label="EMAIL" type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} variant="outlined" fullWidth />
                                <FormControl className="form__feild" variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={Password} onChange={(e) => { setPassword(e.target.value) }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                                <FormControlLabel
                                    control={<Checkbox checked={firstCheck} onChange={(e) => { setFirstCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                    label="Confirm none earlier payment remarks"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={secondCheck} onChange={(e) => { setsecondCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                    label="Accept privacy and terms"
                                />
                                <div className="form__button">
                                    <Button type={'submit'} variant="contained" color="primary" fullWidth>
                                        BANKID ON MOBILE
                                    </Button>
                                </div>
                            </Box>
                        </div>
                    </form>)}
        </>
    )
}


const Login = () => {
    const [imgSrc, setImgSrc] = useState(process.env.PUBLIC_URL)
    const [loginType, setloginType] = useState("customer")


    return (
        <div className="login__main">
            <Container>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={1} bgcolor={"unset"}>
                    <Box p={3}>
                        <div className="login__header">
                            <img src={`${imgSrc}logo.png`} width="300px" />
                            <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>DEALMAKR,</font></font></h1>
                            <h4><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Vipps for private finances. Get quotes right on your appointments. </font></font><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                please fill in below</font></font></h4>
                        </div>
                    </Box>
                    <Box p={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" bgcolor="background.paper">
                        <div className="login__form">
                            <div className="lg_fm_heading">
                                <ButtonBase className="login-form-link" onClick={() => { setloginType("customer") }}>
                                    <div className={`lg_fm_tab ${loginType === "customer" ? "active" : ""}`}>
                                        <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>customers login</font></font>
                                    </div>
                                </ButtonBase>
                                <ButtonBase className="login-form-link" onClick={() => { setloginType("suppliers") }}>
                                    <div className={`lg_fm_tab ${loginType === "customer" ? "" : "active"}`}>
                                        <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>SUPPLIERS login</font></font>
                                    </div>
                                </ButtonBase>
                            </div>
                            <div className="login__form__body">
                                <Box p={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                    <LoginForm loginType={loginType} />
                                </Box>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>

        </div>
    )
}

export default Login
