import { Center, Grid, Space, Text } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { Mail } from "react-feather";
import { forgotPassStyles } from "../components/constants";
import { IMAGES } from "../components/constants/images";
import CButton from "../components/frameworks/CButton";
import cNotification from "../components/frameworks/CNotification";
import CTextBox from "../components/frameworks/CTextBox";

export default function ForgotPassword() {
  const [loginData, setLoginData] = useSetState({
    email: "",
  }); // This is the state that stores the email entered by the user
  const [emailSent, setEmailSent] = useState(false);

  const handleForgotPass = () => {
    // This function is called when the user clicks on the "Send Email" button
    if (!loginData.email) {
      cNotification("Please enter email");
      return;
    }
    setEmailSent(true);
  };

  const emailSentDiv = // This is the div that is shown when the user clicks on the "Send Email" button
    (
      <>
        <Center>
          <Image src={IMAGES.OTHER.FORGOT_EMAIL_SENT} alt="Forgot email sent" />
        </Center>
        <Space h={24} />
        <Text className={forgotPassStyles.heading}>Email instructions sent</Text>
        <Text className={forgotPassStyles.description}>Click on the below email to redirect to reset password.</Text>
        <Space h={24} />
        <Text
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => Router.push("/reset_password?email=" + loginData.email)}
          className={forgotPassStyles.heading}
        >
          {loginData.email}
        </Text>
      </>
    );

  const emailNotSentDiv = // This is the div that is shown when the user comes on this page for the first time
    (
      <>
        <Center>
          <Image src={IMAGES.OTHER.FORGOT_PASS} alt="Forgot Password" />
        </Center>
        <Space h={24} />
        <Text className={forgotPassStyles.heading}>Forgot Password?</Text>
        <Text className={forgotPassStyles.description}>
          Please enter your registered email address, we will send instructions to help your reset password.
        </Text>
        <Space h={24} />
        <CTextBox
          onChange={(e) => setLoginData({ email: e })}
          value={loginData.email}
          placeholder="Email"
          Icon={<Mail size={16} />}
        />
        <Space h={24} />
        <CButton label="Send Email Instructions" onClick={() => handleForgotPass()} />
      </>
    );

  return (
    <div className={forgotPassStyles.fpassbg}>
      <Grid>
        <Grid.Col lg={4} md={2}></Grid.Col>
        <Grid.Col lg={4}>
          <div className={forgotPassStyles.centerPageCard}>
            <Center>
              <Image src={IMAGES.PHYLUM.I1} alt="logo" width={120} height={40} />
            </Center>
            <Space h={24} />
            <div className={forgotPassStyles.forgotPassCard}>{emailSent ? emailSentDiv : emailNotSentDiv}</div>
            <Space h={24} />
          </div>
        </Grid.Col>
        <Grid.Col lg={4} md={2}></Grid.Col>
      </Grid>
    </div>
  );
}
