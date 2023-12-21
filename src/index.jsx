import AuthStack from "./authStack";
import useAuthentication from "./hooks/useAuthentication";
import UserStack from "./userStack";

const RootNavigation = () => {
  const { user } = useAuthentication();
  return user ? <UserStack /> : <AuthStack />;
};

export default RootNavigation;
