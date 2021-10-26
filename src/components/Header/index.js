import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

import { Context } from "../../context";
import userEvent from "@testing-library/user-event";

const Header = () => {

    const [user] = useContext(Context)
    console.log("user details ", user)

    return (
      <Wrapper>
        <Content>
          <Link to="/">
            <LogoImg src={RMDBLogo} alt="rmdb-logo" />
          </Link>
          {user ? (
            <span>Logged in as: {user.username}</span>
          ) : (
            <Link to="/Login">
              <span>Login here</span>
            </Link>
          )}
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
      </Wrapper>
    );
};

export default Header;
