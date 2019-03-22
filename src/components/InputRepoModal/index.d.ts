export interface IInputRepoModalProps {
  showModal?: boolean;
  onClick?: () => void;
  onHide?: () => void;
}

export interface IInputRepoModalState {
  userOptions: any;
  repoOptions: any;
  user: string;
  repo: string;
  repoList: string[];
}
