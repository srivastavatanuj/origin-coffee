import React, { useState } from "react";
import useApi from "../../APIs/useApi";
import { useMutation } from "react-query";
import { useStore } from "../../store/store";

function loginLogic() {
  const { logInUser, resetPassword } = useApi();
  const { userLoggedIn } = useStore();

  const { mutate: loggedIn, isLoading } = useMutation(
    (credentials) => logInUser(credentials),
    {
      onSuccess: (res) => {
        alert("LoggedIn successfully");
        localStorage.setItem("access", res["access"]);
        localStorage.setItem("refresh", res["refresh"]);
        userLoggedIn();
        window.open("/", "_self");
      },
      onError: (error) => {
        alert("Error", error);
      },
    }
  );

  const { mutate: forgetPassword } = useMutation(
    (email) => resetPassword(email),
    {
      onSuccess: (res) => {
        alert("email sent");
      },
      onError: (error) => {
        alert("Error", error);
      },
    }
  );

  return {
    loggedIn,
    forgetPassword,
    isLoading,
  };
}

export default loginLogic;
