import { Box, Button, ButtonBase, Checkbox, Container, FormControlLabel, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import "./login.css"
const Login = () => {
    const [imgSrc, setImgSrc] = useState(process.env.PUBLIC_URL)
    const [firstCheck, setFirstCheck] = useState(false)
    const [secondCheck, setsecondCheck] = useState(false)

    return (
        <div className="login__main">
            <Container>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={1} bgcolor={"unset"}>
                    <Box p={3}>
                        <div className="login__header">
                            <img src={`${imgSrc}logo.png`} width="300px" />
                            <h1><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Welcome,</font></font></h1>
                            <h4><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>we need some information about you before you log in. </font></font><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                please fill in below</font></font></h4>
                        </div>
                    </Box>
                    <Box p={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" bgcolor="background.paper">
                        <div className="login__form">
                            <div className="lg_fm_heading">
                                <ButtonBase className="login-form-link">
                                    <div className="lg_fm_tab active">
                                        <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>customers login</font></font>
                                    </div>
                                </ButtonBase>
                                <ButtonBase className="login-form-link">
                                    <div className="lg_fm_tab ">
                                        <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>SUPPLIERS login</font></font>
                                    </div>
                                </ButtonBase>

                            </div>
                            <div className="login__form__body">
                                <Box p={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                    <form >
                                        <div className="form__feilds">
                                            <Box p={1}>
                                                <h5 id="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>LOGIN VIA VIPPS ID</font></font></h5>
                                            </Box>
                                            <Box pt={3}>
                                                <TextField className="form__feild" label="MOBILE NUMBER" variant="outlined" fullWidth />
                                                <TextField className="form__feild" label="Birthday" variant="outlined" type="date" defaultValue="2000-01-01" fullWidth />
                                                <FormControlLabel
                                                    control={<Checkbox checked={firstCheck} onChange={(e) => { setFirstCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                                    label="Confirm none earlier payment remarks"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox checked={secondCheck} onChange={(e) => { setsecondCheck(e.target.checked) }} name="checkedA" color="primary" />}
                                                    label="Accept privacy and terms"
                                                />
                                                <div className="form__button">
                                                    <Button variant="contained" color="primary" fullWidth>
                                                        BANKID ON MOBILE
                                                    </Button>
                                                </div>
                                            </Box>
                                        </div>

                                    </form>
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
