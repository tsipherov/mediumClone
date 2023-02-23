import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../contexts/userContext";
import SettingsForm from "../../components/SettingsForm/SettingsForm";

const Settings = () => {
  const submitURL = `/user`;
  const [{ error, response }, createFetchOptions] = useFetch(submitURL);
  const navigate = useNavigate();
  const [edited, setEdited] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userState] = useContext(UserContext);
  console.log("userState >>> ", userState);

  let initialValues = {};
  useEffect(() => {
    if (!userState.isLogedIn) navigate("/login");
  }, [userState]);

  if (userState.currentUser) {
    const { image, bio, email, username } = userState.currentUser;

    initialValues = {
      avatar: image,
      userName: username,
      about: bio,
      email: email,
    };
  }

  useEffect(() => {
    console.log("useEffect on error >>> ", error);
    setIsError(true);
  }, [error]);

  const onSubmit = (user) => {
    createFetchOptions({
      method: "PUT",
      data: { user },
    });
    setEdited(true);
  };

  useEffect(() => {
    if (!error && edited && response?.user) {
      console.log("second useEffect");
      navigate(`/`);
    }
  }, [response]);

  return (
    <div>
      <SettingsForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={isError && error}
      />
    </div>
  );
};

export default Settings;
