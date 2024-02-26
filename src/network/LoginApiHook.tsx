import instance from '../network/api'; 
 
interface LogInUserProp {
  email: string;
  password: string;
}
 
interface loginResp{
  message:string;
  token:string;
  userid:string;
}
interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: loginResp;
}
 
export async function loginUser({
  email,
  password,
}: LogInUserProp): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;
 
  const logInPayload = {
    email: email,
    password: password,
  };
 try {
 const logInResponse = await instance.post(
      '/api/v1/userLogin',
      logInPayload,
    );
    statusCode = logInResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = logInResponse.data;
   
   } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }
 
  return {success, statusCode, loginResp, errorMessage};
}