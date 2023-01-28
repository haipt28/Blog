import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled,
  Stack
} from '@mui/material';
import Head from 'next/head';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import HttpsIcon from '@mui/icons-material/Https';
import { ReactElement, useState } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';
import { useAuth } from '../hooks';
import { useRouter } from 'next/router';
import PersonIcon from '@mui/icons-material/Person';
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

const ButtonSearch = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

function Login() {
  const route = useRouter();

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState('');
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const { login } = useAuth();
  const handleLogin = async () => {
    const payload = {
      Email: email,
      password: password
    };
    await login(payload)
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
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h2" sx={{ my: 2 }}>
                Login
              </Typography>
            </Box>
            <Container maxWidth="sm">
              <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                <Stack spacing={2}>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInputWrapper
                      type="text"
                      placeholder="UserName"
                      value={email}
                      onChange={handleChangeEmail}
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInputWrapper
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChangePassword}
                      startAdornment={
                        <InputAdornment position="start">
                          <HttpsIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Stack>

                <Divider sx={{ my: 4 }}></Divider>
                <Stack
                  direction={'row'}
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <Button
                    href="register"
                    variant="outlined"
                    onClick={handleLogin}
                  >
                    Register
                  </Button>
                  <Button variant="outlined" onClick={handleLogin}>
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

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
