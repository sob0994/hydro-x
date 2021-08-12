import React from "react";
import { Grid, Segment, Header, Input } from "semantic-ui-react";
import { MyLabel } from "../../../components/core";
import LoginC from "./LoginC";

const Login = () => {
  const { isLoading, isError, data, handleLogin, handleChange } = LoginC();
  return (
    <Grid
      centered
      verticalAlign="middle"
      style={{
        height: "100vh",
        margin: 0,
        background: "rgba(213, 236, 238,0.3)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "40%",
          zIndex: 0,
        }}
        className="my-bg-2i"
      />
      <Grid.Column style={{ width: "99%", maxWidth: "25rem" }}>
        <Segment>
          <Segment basic style={{ margin: 0, paddingBottom: 0 }}>
            <Header as="header" textAlign="center">
              <Header.Content>Sign In</Header.Content>
            </Header>
          </Segment>
          <Segment basic style={{ margin: 0, paddingBottom: "3rem" }}>
            <MyLabel strong>Username</MyLabel>
            <Input
              type="text"
              fluid
              name='username'
              error={Boolean(isError.username)}
              placeholder="Username..."
              icon="user"
              onChange={handleChange}
              value={data.username}
              iconPosition="left"
            />
            {isError.username && (
              <MyLabel error top>
                {isError.username}
              </MyLabel>
            )}
            <MyLabel strong error={false}>
              Password
            </MyLabel>
            <Input
              type="password"
              fluid
              name='password'
              error={Boolean(isError.password)}
              // value={data.password}
              placeholder="Password..."
              icon="key"
              iconPosition="left"
              onChange={handleChange}
            />
            {isError.password && (
              <MyLabel error top>
                {isError.password}
              </MyLabel>
            )}
          </Segment>
        </Segment>
        <Segment
          textAlign="center"
          basic
          style={{ padding: "0rem 2rem", marginTop: -40 }}
        >
          <button
            onClick={handleLogin}
            style={{ transition: "2s" }}
            className={`blue fluid ui button my-bg-2i ${
              isLoading && "loading"
            }`}
          >
            Log In
          </button>
          <MyLabel btn>Forgot Password?</MyLabel>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
