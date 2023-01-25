import android from "public/assets/techs/android.svg";
import apolloClient from "public/assets/techs/apollo-client.svg";
import bootstrap from "public/assets/techs/bootstrap.svg";
import css from "public/assets/techs/css.svg";
import cypress from "public/assets/techs/cypress.svg";
import django from "public/assets/techs/django.svg";
import docker from "public/assets/techs/docker.svg";
import express from "public/assets/techs/express.svg";
import figma from "public/assets/techs/figma.svg";
import firebase from "public/assets/techs/firebase.svg";
import framerMotion from "public/assets/techs/framer-motion.svg";
import git from "public/assets/techs/git.svg";
import githubActions from "public/assets/techs/github-actions.svg";
import graphql from "public/assets/techs/graphql.svg";
import html from "public/assets/techs/html.svg";
import javascript from "public/assets/techs/javascript.svg";
import jest from "public/assets/techs/jest.svg";
import kubernetes from "public/assets/techs/kubernetes.svg";
import linux from "public/assets/techs/linux.svg";
import mocha from "public/assets/techs/mocha.svg";
import mongodb from "public/assets/techs/mongodb.svg";
import mongoose from "public/assets/techs/mongoose.svg";
import mysql from "public/assets/techs/mysql.svg";
import nextjs from "public/assets/techs/nextjs.svg";
import nodejs from "public/assets/techs/nodejs.svg";
import php from "public/assets/techs/php.svg";
import postcss from "public/assets/techs/postcss.svg";
import postgresql from "public/assets/techs/postgresql.svg";
import python from "public/assets/techs/python.svg";
import reactQuery from "public/assets/techs/react-query.svg";
import react from "public/assets/techs/react.svg";
import redux from "public/assets/techs/redux.svg";
import sass from "public/assets/techs/sass.svg";
import sequelize from "public/assets/techs/sequelize.svg";
import socketIo from "public/assets/techs/socket-io.svg";
import styledComponents from "public/assets/techs/styled-components.svg";
import tailwind from "public/assets/techs/tailwind.svg";
import typescript from "public/assets/techs/typescript.svg";

interface IconTypes<TValue> {
  [id: string]: TValue;
}

const iconTypes: IconTypes<string> = {
  android,
  apolloClient,
  bootstrap,
  css,
  cypress,
  django,
  docker,
  express,
  figma,
  firebase,
  framerMotion,
  git,
  githubActions,
  graphql,
  html,
  javascript,
  jest,
  kubernetes,
  linux,
  mocha,
  mongodb,
  mongoose,
  mysql,
  nextjs,
  nodejs,
  php,
  postcss,
  postgresql,
  python,
  reactQuery,
  react,
  redux,
  sass,
  sequelize,
  socketIo,
  styledComponents,
  tailwind,
  typescript,
};

interface Props {
  name: string;
}

export const IconComponent = ({ name }: Props) => {
  let nameToSearch = name.toLowerCase();

  if (name.includes("-")) {
    let parts = name.toLowerCase().split("-");
    parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    nameToSearch = parts.join("");
  }

  let Icon = iconTypes[nameToSearch];

  if (Icon) return <Icon />;
  else return <></>;
};
