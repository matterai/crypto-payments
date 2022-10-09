import { UserProps } from "../UserProps";

const Profile = (props: UserProps) => {
  return (
    <p>{ formatEvmAddress(props.evmAddress, 5, 38) }</p>
  );
}

const formatEvmAddress = (
  evmAddress: string, 
  from: number, 
  to: number, 
  replacement: string = "...")
  : string => {
    return evmAddress.substring(0, from) + 
      replacement + 
      evmAddress.substring(to, evmAddress.length);
}

export default Profile;