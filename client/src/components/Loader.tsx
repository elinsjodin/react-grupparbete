import {
  LoaderContainer,
  LoaderStyle,
  SpinnerOne,
  SpinnerThree,
  SpinnerTwo,
} from "./styledComponents/LoaderStyle";

interface ILoaderProps {
  loading: boolean;
}

export const Loader = (props: ILoaderProps) => {
  return props.loading ? (
    <LoaderContainer>
      <LoaderStyle>
        <SpinnerOne />
        <SpinnerTwo />
        <SpinnerThree />
      </LoaderStyle>
    </LoaderContainer>
  ) : (
    <></>
  );
};
