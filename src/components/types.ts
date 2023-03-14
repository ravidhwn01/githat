export interface Gituser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserActivity {
  id: string;
  type: Type;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
}

export interface Actor {
  id: number;
  login: Login;
  display_login: Login;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export enum Login {
  Ravidhwn01 = "ravidhwn01",
}

export interface Payload {
  repository_id?: number;
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref: Ref | null;
  head?: string;
  before?: string;
  commits?: Commit[];
  ref_type?: RefType;
  master_branch?: MasterBranch;
  description?: null;
  pusher_type?: PusherType;
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: Email;
  name: Name;
}

export enum Email {
  Ravidhawan8899GmailCOM = "ravidhawan8899@gmail.com",
}

export enum Name {
  RaviKumarDhawan = "ravi kumar dhawan",
}

export enum MasterBranch {
  Main = "main",
  Master = "master",
}

export enum PusherType {
  User = "user",
}

export enum Ref {
  Master = "master",
  RefsHeadsMain = "refs/heads/main",
  RefsHeadsMaster = "refs/heads/master",
}

export enum RefType {
  Branch = "branch",
  Repository = "repository",
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}

export enum Type {
  CreateEvent = "CreateEvent",
  PushEvent = "PushEvent",
}
