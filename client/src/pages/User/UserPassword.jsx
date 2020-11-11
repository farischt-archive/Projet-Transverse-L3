import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

import UserNav from "../../components/UserNav";

const UserPassword = () => {
  let { user } = useSelector((state) => ({ ...state }));

  const [userInfo, setUserInfo] = useState({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const userInput = {
      ...userInfo,
      [event.target.name]: event.target.value,
    };
    setUserInfo(() => userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.put("/api/user/password/" + user._id, userInfo);
      setIsLoading(false);
      toast.success(" Votre mot de passe a été modifié ");
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error(" Une erreur est survenu !");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-2"
          style={{ backgroundColor: "black", borderRadius: "10px" }}
        >
          {" "}
          <UserNav />{" "}
        </div>
        <div
          className="col p-4"
          style={{ backgroundColor: "lightgrey", borderRadius: "10px" }}
        >
          <h1> Modification de mot de passe </h1>
          {!isLoading && (
            <form onSubmit={handleSubmit}>
              <div className="form-row ">
                <div className="form-group col-md-4">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    className="form-control"
                    name="currentPassword"
                    placeholder="Mot de passe actuel"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    className="form-control"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    className="form-control"
                    name="repeatPassword"
                    placeholder="Nouveau mot de passe"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <button className="btn btn-info my-2 my-sm-0" type="submit">
                    {" "}
                    Modifier le mot de passe{" "}
                  </button>
                </div>
              </div>
            </form>
          )}

          {isLoading && (
            <div className="ui active dimmer">
              <div className="ui massive text loader">Chargement...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPassword;