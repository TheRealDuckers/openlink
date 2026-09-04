import { ApiRequest, SchoolApiResponse, EdulinkApiResponse } from "./global";

export type AuthMethod =
  | "School.FromCode"
  | "Edulink.SchoolDetails"
  | "Edulink.Login"
  | "EduLink.LoginFromIDP"
  | "Edulink.Status";

type FromCodeParams = {
  code: string;
};

type SchoolDetailsParams = {
  establishment_id: string;
  from_app: boolean;
};

type LoginParams = {
  from_app: boolean;
  fcm_token_old: string;
  username: string;
  password: string;
  establishment_id: string;
};

type LoginFromIDPParams = {
  from_app: boolean;
  fcm_token_old: string;
  token: string;
};

type StatusParams = {
  last_visible: number;
  format: number;
};

export type FromCodeRequest = ApiRequest<"School.FromCode", FromCodeParams>;
export type SchoolDetailsRequest = ApiRequest<
  "EduLink.SchoolDetails",
  SchoolDetailsParams
>;
export type LoginRequest = ApiRequest<"EduLink.Login", LoginParams>;
export type LoginContextRequest = ApiRequest<"EduLink.LoginContext", {
  from_app: boolean;
}>;

export type LoginFromIDPRequest = ApiRequest<
  "EduLink.LoginFromIDP",
  LoginFromIDPParams
>;
export type StatusRequest = ApiRequest<"EduLink.Status", StatusParams>;

export type FromCodeResponse = SchoolApiResponse<{
  school: {
    school_id: number;
    server: string;
  };
}>;

export type SchoolDetailsResponse = EdulinkApiResponse<{
  establishment: {
    id: string;
    name: string;
    idp_login: {
      microsoftonline: string;
      google: string;
    };
    idp_only: boolean;
    logo?: string;
  };
}>;

export type LoginResponse = EdulinkApiResponse<any>;

export type StatusResponse = EdulinkApiResponse<{
  lessons?: {
    current?: {
      period_id: string;
      room: {
        name: string;
        id: string;
        moved: boolean;
      };
      teaching_group: {
        id: string;
        name: string;
        subject: string;
      };
      teachers: string | { id: number; title: string; forename: string; surname: string };
      teacher: string | { id: number; title: string; forename: string; surname: string };
      start_time: string;
      end_time: string;
      period_name: string;
    };
    next?: {
      period_id: string;
      room: {
        name: string;
        id: string;
        moved: boolean;
      };
      teaching_group: {
        id: string;
        name: string;
        subject: string;
      };
      teachers: string | { id: number; title: string; forename: string; surname: string };
      teacher: string | {  id: number; title: string; forename: string; surname: string };
      start_time: string;
      end_time: string;
      period_name: string;
    };
  };
  new_messages: number;
  new_forms: number;
  session: {
    expires: number;
  };
  noticeboard: {
    new_snippets: number;
    new_items: number;
  };
}>;

export type SessionData = any;
