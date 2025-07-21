import React from 'react';
import { Content, Page, Header, HeaderLabel } from '@backstage/core-components';
import { HomeComponent } from '../componentHomePage/HomeComponent';
import { makeStyles, Theme, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {});
export const HomePage = () => {
  return (
    <Page themeId="home">
      <Content>
        <Header title="Page Initial" subtitle="WellCome">
          <HeaderLabel label="Usuario" value="Voce mesmmo" />
        </Header>
        <HomeComponent />
      </Content>
    </Page>
  );
};
