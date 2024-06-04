// This file uses components from Material-UI (MUI).
// MUI is licensed under the MIT License. See https://mui.com/ for more details.
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2';
import '../styles/material.css';
import Copyright from './Copyright';

const defaultTheme = createTheme();

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            middleName: '',
            birthDate: '',
            phoneNumber: '+7',
            email: '',
            login: '',
            password: '',
            confirmPassword: '',
            acceptPrivacyPolicy: false,
            errors: {},
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
            errors: {
                ...this.state.errors,
                [name]: '',
            },
        });
    };

    handleClick = (event) => {
        const { name } = event.target;
        this.setState({
            errors: {
                ...this.state.errors,
                [name]: '',
            },
        });
    };

    handlePhoneChange = (phoneNumber) => {
        this.setState({
            phoneNumber,
            errors: {
                ...this.state.errors,
                phoneNumber: '',
            },
        });
        if (!phoneNumber || phoneNumber === '+7') {
            const specialLabel = document.querySelector('.special-label');
            if (specialLabel) {
                specialLabel.className = specialLabel.className.replace('special-label', 'special-label-error');
            }
        }
    };

    handlePhoneInputFocus = () => {
        const specialLabel = document.querySelector('.special-label, .special-label-error');
        if (specialLabel && specialLabel.className === 'special-label') {
            specialLabel.className = specialLabel.className.replace('special-label', 'special-label-focused');
        }
        else if (specialLabel && specialLabel.className === 'special-label-error') {
            specialLabel.className = specialLabel.className.replace('special-label-error', 'special-label-focused');
        }
    };

    handlePhoneInputBlur = () => {
        const specialLabel = document.querySelector('.special-label-focused');
        if (specialLabel) {
            specialLabel.className = specialLabel.className.replace('special-label-focused', 'special-label');
        }
    };

    getMinBirthDate() {
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 75, today.getMonth(), today.getDate());
        return minDate.toISOString().split('T')[0];
    }

    getMaxBirthDate() {
        const today = new Date();
        const maxDate = new Date(today.getFullYear() - 14, today.getMonth(), today.getDate() + 1);
        return maxDate.toISOString().split('T')[0];
    }

    validateForm = () => {
        const { lastName, firstName, birthDate, phoneNumber, email, login, password, confirmPassword, acceptPrivacyPolicy } = this.state;
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!lastName) errors.lastName = 'Пожалуйста, введите фамилию';
        if (!firstName) errors.firstName = 'Пожалуйста, введите имя';
        if (!birthDate) errors.birthDate = 'Пожалуйста, введите дату рождения';
        if (!phoneNumber || phoneNumber === '+7') {
            errors.phoneNumber = 'Пожалуйста, введите номер телефона';
            const specialLabel = document.querySelector('.special-label');
            if (specialLabel) {
                specialLabel.className = specialLabel.className.replace('special-label', 'special-label-error');
            }
        }
        if (!email) {
            errors.email = 'Пожалуйста, введите электронную почту';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Некорректный адрес электронной почты';
        }
        if (!login) errors.login = 'Пожалуйста, введите логин';
        if (!password) errors.password = 'Пожалуйста, введите пароль';
        if (!confirmPassword) errors.confirmPassword = 'Пожалуйста, подтвердите пароль';
        if (password !== confirmPassword) errors.confirmPassword = 'Пароли не совпадают';
        if (!acceptPrivacyPolicy) errors.acceptPrivacyPolicy = 'Необходимо принять политику конфиденциальности';

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            const { lastName, firstName, middleName, birthDate, phoneNumber, email, login, password, confirmPassword, acceptPrivacyPolicy } = this.state;
            console.log({
                lastName,
                firstName,
                middleName,
                birthDate,
                phoneNumber,
                email,
                login,
                password,
                confirmPassword,
                acceptPrivacyPolicy,
            });

            // Clear the fields after submission
            this.setState({
                lastName: '',
                firstName: '',
                middleName: '',
                birthDate: '',
                phoneNumber: '+7',
                email: '',
                login: '',
                password: '',
                confirmPassword: '',
                acceptPrivacyPolicy: false,
                errors: {},
            });
        }
    };

    render() {
        const { lastName, firstName, middleName, birthDate, phoneNumber, email, login, password, confirmPassword, acceptPrivacyPolicy, errors } = this.state;

        return (
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="sm" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="family-name"
                                        name="lastName"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Фамилия"
                                        autoFocus
                                        value={lastName}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Имя"
                                        value={firstName}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="additional-name"
                                        name="middleName"
                                        fullWidth
                                        id="middleName"
                                        label="Отчество"
                                        value={middleName}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.middleName}
                                        helperText={errors.middleName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="bday"
                                        name="birthDate"
                                        required
                                        fullWidth
                                        id="birthDate"
                                        label="Дата рождения"
                                        type="date"
                                        value={birthDate}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            min: this.getMinBirthDate(),
                                            max: this.getMaxBirthDate(),
                                            onKeyDown: (e) => {
                                                e.preventDefault();
                                            },
                                        }}
                                        error={!!errors.birthDate}
                                        helperText={errors.birthDate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <PhoneInput
                                        country={'ru'}
                                        value={phoneNumber}
                                        onChange={this.handlePhoneChange}
                                        inputProps={{
                                            autoComplete: 'tel',
                                            name: 'phoneNumber',
                                            required: true,
                                            id: 'phoneNumber',
                                            type: 'tel',
                                            onFocus: this.handlePhoneInputFocus,
                                            onBlur: this.handlePhoneInputBlur,
                                            onClick: this.handleClick,
                                        }}
                                        containerStyle={{ width: '100%' }}
                                        inputStyle={{ width: '100%' }}
                                        specialLabel='Номер телефона *'
                                        isValid={!errors.phoneNumber}
                                    />
                                    {errors.phoneNumber && (
                                        <Typography color="error" variant="caption" component="div">
                                            {errors.phoneNumber}
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="email"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Электронная почта"
                                        value={email}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="login"
                                        name="login"
                                        required
                                        fullWidth
                                        id="login"
                                        label="Логин"
                                        value={login}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.login}
                                        helperText={errors.login}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="new-password"
                                        name="password"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Пароль"
                                        type="password"
                                        value={password}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="new-password"
                                        name="confirmPassword"
                                        required
                                        fullWidth
                                        id="confirmPassword"
                                        label="Подтвердите пароль"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={this.handleChange}
                                        onClick={this.handleClick}
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="acceptPrivacyPolicy"
                                                color="primary"
                                                checked={acceptPrivacyPolicy}
                                                onChange={this.handleChange}
                                                onClick={this.handleClick}
                                                required
                                            />
                                        }
                                        label={
                                            <span>
                                                Я принимаю{' '}
                                                <Link href="#" target="_blank" rel="noopener noreferrer" className="link-gray">
                                                    политику конфиденциальности
                                                </Link>.
                                            </span>
                                        }
                                    />
                                    {errors.acceptPrivacyPolicy && (
                                        <Typography color="error" variant="caption" component="div">
                                            {errors.acceptPrivacyPolicy}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, height: '45px', borderRadius: '20px' }}
                            >
                                Зарегистрироваться
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        У вас уже есть учетная запись? Авторизуйтесь
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright value="КиТ - Качество и транспорт" sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default SignUp;