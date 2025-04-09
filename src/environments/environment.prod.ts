import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44337/',
  redirectUri: baseUrl,
  clientId: 'test8_App',
  responseType: 'code',
  scope: 'offline_access test8',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'test8',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44337',
      rootNamespace: 'test8',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
