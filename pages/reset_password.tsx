import { Center, Grid, Space, Stack, Text } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { Key } from "react-feather";
import { resetPassStyles } from "../components/constants";
import { IMAGES } from "../components/constants/images";
import CButton from "../components/frameworks/CButton";
import cNotification from "../components/frameworks/CNotification";
import { CPassBox } from "../components/frameworks/CTextBox";

export default function ResetPassword() {
  const [resetData, setResetData] = useSetState({
    password: "",
    confirmPassword: "",
  }); // This is the state that stores the password and confirm password entered by the user

  const email = useRouter().query.email; // This is the email that is passed in the query string

  return (
    <div className={resetPassStyles.resetPageBg}>
      <Grid>
        <Grid.Col lg={4} md={2}></Grid.Col> {/* This is an empty column to center the card */}
        <Grid.Col lg={4}>
          <div className={resetPassStyles.centerCard}>
            <Center>
              <Image src={IMAGES.PHYLUM.I1} alt="logo" width={120} height={40} />
            </Center>
            <Space h={24} />
            <div className={resetPassStyles.resetCard}>
              <Center>
                <Image src={IMAGES.OTHER.RESET_PASS} alt="Reset Password" />
              </Center>
              <Space h={24} />
              <Text className={resetPassStyles.heading}>Reset Password</Text>

              <Space h={24} />
              <Stack spacing={16}>
                <CPassBox
                  onChange={(e) => setResetData({ password: e })}
                  value={resetData.password}
                  placeholder="Password"
                  Icon={<Key size={16} />}
                />
                <CPassBox
                  onChange={(e) => setResetData({ confirmPassword: e })}
                  value={resetData.confirmPassword}
                  placeholder="Confirm Password"
                  Icon={<Key size={16} />}
                />
              </Stack>
              <Space h={24} />
              <Text className={resetPassStyles.description}>
                Minimum 10 characters, must contain an uppercase, a lowercase, a number and a special character.
              </Text>
              <Space h={24} />
              <CButton
                label="Reset Password"
                onClick={() => handleResetPass(resetData.password, resetData.confirmPassword)}
              />
            </div>
          </div>
        </Grid.Col>
        <Grid.Col lg={4} md={2}></Grid.Col> {/* This is an empty column to center the card */}
      </Grid>
    </div>
  );
}

// This is the function that handles the reset password
const handleResetPass = (password: string, confirmPassword: string) => {
  if (!password || !confirmPassword) {
    cNotification("Please enter password and confirm password");
    return;
  } else if (password !== confirmPassword) {
    cNotification("Password and confirm password are not same");
    return;
  }
  //check whether password has 10 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
  //if not, show error message
  //if yes, call api to reset password
  if (password.length < 10) {
    cNotification("Password must be at least 10 characters");
    return;
  } else if (!password.match(/[A-Z]/)) {
    cNotification("Password must have at least 1 uppercase");
    return;
  } else if (!password.match(/[a-z]/)) {
    cNotification("Password must have at least 1 lowercase");
    return;
  } else if (!password.match(/[0-9]/)) {
    cNotification("Password must have at least 1 number");
    return;
  } else if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
    cNotification("Password must have at least 1 special character");
    return;
  }

  //call api to reset password
  Router.push("/login");
  cNotification("Password has been reset successfully.", "success");
};
