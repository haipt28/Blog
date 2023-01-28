import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';
import { authApi } from '../api-client';
import { useAuth } from '../hooks';
const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

function Register() {
  const route = useRouter();
  const [userName, setUserName] = useState('');
  const handleChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const [email, setEmail] = useState('');
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState('');
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const { login } = useAuth();
  const handleRegister = async () => {
    const payload: any = {
      Email: email,
      Name: userName,
      Password: password
    };
    authApi.register(payload).then(async (res) => {
      await login({
        Email: res.data.Email,
        password: password
      })
        .then(() => {
          if (typeof window !== 'undefined') {
            setTimeout(() => {
              route.push('dashboards');
            }, 500);
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
  };
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h2" sx={{ my: 2 }}>
                Register
              </Typography>
            </Box>
            <Container maxWidth="sm">
              <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                <Stack spacing={2}>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInputWrapper
                      type="text"
                      placeholder="UserName"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                      value={userName}
                      onChange={handleChangeUserName}
                    />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInputWrapper
                      type="email"
                      placeholder="Email"
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      }
                      value={email}
                      onChange={handleChangeEmail}
                    />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInputWrapper
                      type="password"
                      placeholder="Password"
                      startAdornment={
                        <InputAdornment position="start">
                          <HttpsIcon />
                        </InputAdornment>
                      }
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </FormControl>
                </Stack>

                <Divider sx={{ my: 2 }}></Divider>
                <Stack
                  direction={'row'}
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <Button variant="outlined" onClick={handleRegister}>
                    Register
                  </Button>
                  <Button href="login" variant="outlined">
                    Login
                  </Button>
                </Stack>
              </Card>
            </Container>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
