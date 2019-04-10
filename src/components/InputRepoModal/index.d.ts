export interface IInputRepoModalProps {
  showModal?: boolean;
  onClick: () => void;
  onHide?: () => void;
  sendFullName: (val: string) => void;
}

export interface IInputRepoModalState {
  userOptions: any;
  repoOptions: any;
  user: string;
  repo: string;
  repoList: string[];
}
