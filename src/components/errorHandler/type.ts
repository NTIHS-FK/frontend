export interface ErrorState {
  hasError: boolean,
  errorMessageBoxSwitch: boolean,
  errorMessageBoxContext?: JSX.Element
};

export interface ComponentProps {
  children: JSX.Element
};
