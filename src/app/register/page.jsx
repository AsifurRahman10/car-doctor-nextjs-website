import Image from "next/image";
import loginImg from "../../../public/assets/images/login/login.svg";
import RegisterForm from "./component/RegisterForm";

export default function page() {
  return (
    <div className="my-20 flex items-center gap-6">
      <div className="flex-1">
        <Image src={loginImg} width={500} height={300} alt="loginImg" />
      </div>
      <div className="flex-1">
        <RegisterForm />
      </div>
    </div>
  );
}
