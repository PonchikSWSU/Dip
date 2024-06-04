// This file uses components from Material-UI (MUI).
// MUI is licensed under the MIT License. See https://mui.com/ for more details.
import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';

const defaultTheme = createTheme();

class SignInSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      rememberMe: false,
      loginError: false,
      passwordError: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, password, rememberMe } = this.state;

    // Check if fields are empty
    this.setState({
      loginError: !login,
      passwordError: !password,
    });

    if (login && password) {
      console.log({
        login,
        password,
        rememberMe,
      });

      // Clear the fields
      this.setState({
        login: '',
        password: '',
        rememberMe: false,
      });
    }
  };

  handleFocus = (field) => {
    this.setState({ [`${field}Error`]: false });
  };

  render() {
    const { login, password, rememberMe, loginError, passwordError } = this.state;

    return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://storage.myseldon.com/news-pict-ad/ADC1E4CC66E2D9A100A01761C4033649)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 25,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Вход в систему
              </Typography>
              <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  autoComplete="login"
                  autoFocus
                  value={login}
                  onChange={this.handleChange}
                  error={loginError}
                  helperText={loginError ? 'Пожалуйста, введите логин' : ''}
                  onFocus={() => this.handleFocus('login')}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.handleChange}
                  error={passwordError}
                  helperText={passwordError ? 'Пожалуйста, введите пароль' : ''}
                  onFocus={() => this.handleFocus('password')}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={this.handleChange}
                      name="rememberMe"
                      color="primary"
                    />
                  }
                  label="Запомнить вход"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Войти
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Забыли пароль?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Зарегистрироваться"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright value='КиТ - Качество и транспорт' sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default SignInSide;