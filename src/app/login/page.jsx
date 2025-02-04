import Image from "next/image";
import loginImg from "../../../public/assets/images/login/login.svg";
import LoginForm from "./component/LoginForm";
export default function Login() {
  return (
    <div className="my-20 flex flex-col lg:flex-row items-center gap-6">
      <div className="flex-1">
        <Image src={loginImg} width={500} height={300} alt="loginImg" />
      </div>
      <div className="flex-1">
        <LoginForm />
      </div>
    </div>
  );
}
