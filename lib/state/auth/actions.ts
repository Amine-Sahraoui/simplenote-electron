import { Action, ActionTypes, AUTH_SET } from '../action-types';

import {
  Authorized,
  Authorizing,
  InvalidCredentials,
  LoginError,
  NotAuthorized,
  AuthState,
} from './constants';

export const reset = () => ({
  type: AUTH_SET,
  status: NotAuthorized,
});

export const setInvalidCredentials = () => ({
  type: AUTH_SET,
  status: InvalidCredentials,
});

export const setLoginError = () => ({
  type: AUTH_SET,
  status: LoginError,
});

export const setPending = () => ({
  type: AUTH_SET,
  status: Authorizing,
});

export const setAuthorized = () => ({
  type: AUTH_SET,
  status: Authorized,
});

export type AuthAction = Action<'AUTH_SET', { status: AuthState }>;
