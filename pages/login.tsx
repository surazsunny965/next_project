import { Grid, Space, Stack, Text } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import Image from "next/image";
import Router from "next/router";
import { Key, Mail } from "react-feather";
import { loginStyles } from "../components/constants";
import { IMAGES } from "../components/constants/images";
import CButton from "../components/frameworks/CButton";
import CCheckBox from "../components/frameworks/CCheckBox";
import cNotification from "../components/frameworks/CNotification";
import CTextBox, { CPassBox } from "../components/frameworks/CTextBox";

export default function Login() {
  const [loginData, setLoginData] = useSetState({
    email: "",
    password: "",
    remember_me: true,
  }); // This is the state that stores the email and password entered by the user

  const handleLogin = () => {
    // This function is called when the user clicks on the "Login" button
    console.log(loginData);
    if (!loginData.email || !loginData.password) {
      cNotification("Please enter email and password");
      return;
    }
    cNotification("Login Success", "success");
    Router.push("/dashboard"); // This is the function that redirects the user to the dashboard page
  };

  return (
    <div className={loginStyles.loginpageBg}>
      <Grid>
        <Grid.Col lg={4} md={2}></Grid.Col>
        <Grid.Col lg={4}>
          <div className={loginStyles.centerLoginCard}>
            <div>
              <Image src={IMAGES.PHYLUM.I1} alt="logo" width={120} height={40} />
            </div>
            <Space h={24} />
            <div className={loginStyles.loginCard}>
              {/* This is login card */}
              <Text className={loginStyles.signInAccountText}>Sign In</Text>
              <Text className={loginStyles.accountDescriptionText}>Login to manage your account.</Text>
              <Space h={24} />
              <Stack spacing={16}>
                <CTextBox
                  onChange={(e) => setLoginData({ email: e })}
                  value={loginData.email}
                  placeholder="Email"
                  Icon={<Mail size={16} />}
                />
                <CPassBox
                  Icon={<Key />}
                  onChange={(e) => setLoginData({ password: e })}
                  placeholder="Password"
                  value={loginData.password}
                />
                <CCheckBox
                  label="remember me"
                  value={loginData.remember_me}
                  onChange={(e) => setLoginData({ remember_me: e })}
                />
              </Stack>
              <Space h={24} />
              <CButton label="Sign In" onClick={() => handleLogin()} />
            </div>
            <Space h={24} />
            <span className={loginStyles.noAccountText}>
              Do not have an account? &#160;
              <a
                onClick={() => {
                  Router.push("/signup");
                }}
                className={loginStyles.loginText}
              >
                Sign up
              </a>
            </span>
            <Space h={24} />
            <span
              onClick={() => {
                Router.push("/forgot_password");
              }}
              className={loginStyles.forgotPasswordLine}
            >
              Forgot Password?
            </span>
          </div>
        </Grid.Col>
        <Grid.Col lg={4} md={2}></Grid.Col>
      </Grid>
    </div>
  );
}
