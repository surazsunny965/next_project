import { Grid, Space, Stack, Text } from "@mantine/core";
import { useSetState, useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Router from "next/router";
import { Mail, User } from "react-feather";
import { signupStyles } from "../components/constants";
import { IMAGES } from "../components/constants/images";
import CButton from "../components/frameworks/CButton";
import CCheckBox from "../components/frameworks/CCheckBox";
import cNotification from "../components/frameworks/CNotification";
import CTextBox, { CPassBox } from "../components/frameworks/CTextBox";

export default function Signup() {
  const width = useViewportSize().width; // This is the width of the screen

  const [userData, setUserData] = useSetState({
    user_name: "",
    email: "",
    password: "",
    termsNConditions: false,
  }); // This is the state that stores the data entered by the user

  const minimize = width < 1195; // This is a boolean that is true if the screen width is less than 1195px

  const handleSignup = () => {
    // This function is called when the user clicks on the "Sign Up" button
    console.log(userData);
    if (!userData.email || !userData.password || userData.user_name) {
      cNotification("Please enter all fields.");
      return; //
    }
    if (!userData.termsNConditions) {
      cNotification("Please accept terms and conditions.");
      return;
    }
    cNotification("Account Created.", "success");
    Router.push("/dashboard"); // This is the function that redirects the user to the dashboard page
  };
  return (
    <div className={signupStyles.signupBg}>
      <div className={signupStyles.signupBoxContainer}>
        <div style={{ marginTop: -10 }}>
          <Image src={IMAGES.PHYLUM.I1} alt="logo" width={120} height={40} />
        </div>
        <Grid>
          {!minimize && (
            <Grid.Col lg={6} md={4}>
              {/** This is the image on the left side of the signup form */}
              <div>
                <Image alt="SIGNUP_IMAGE" src={IMAGES.SIGN_UP.I1} height={390} />
              </div>
            </Grid.Col>
          )}
          <Grid.Col span={minimize ? 12 : 6}>
            <div className={signupStyles.signupForm} style={{ maxWidth: minimize ? "100%" : "500px" }}>
              {/** This is the signup form */}
              <Text className={signupStyles.createAccountText}>Create your account</Text>
              <Text className={signupStyles.accountDescriptionText}>Created by developers for developers</Text>
              <Space h={24} />
              <Stack spacing={16}>
                <CTextBox
                  onChange={(e) => setUserData({ user_name: e })}
                  value={userData.user_name}
                  placeholder="User Name"
                  Icon={<User size={16} />}
                />
                <CTextBox
                  onChange={(e) => setUserData({ email: e })}
                  value={userData.email}
                  placeholder="Email"
                  Icon={<Mail size={16} />}
                />
                <CPassBox
                  onChange={(e) => setUserData({ password: e })}
                  placeholder="Password"
                  value={userData.password}
                />
                <CCheckBox
                  label="I agree to the Terms and Conditions"
                  value={userData.termsNConditions}
                  onChange={(e) => setUserData({ termsNConditions: e })}
                />
                <CButton label="Create my account" onClick={() => handleSignup()} />
              </Stack>
              <Space h={24} />
              <span className={signupStyles.alreadyhaveAccountText}>
                Already have an account? &#160;{" "}
                <a
                  onClick={() => {
                    Router.push("/login");
                  }}
                  className={signupStyles.signInText}
                >
                  Sign in
                </a>
              </span>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
