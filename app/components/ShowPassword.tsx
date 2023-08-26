import { AiFillEye } from "react-icons/ai";

const ShowPassword = ({ inputId }: { inputId: string }) => (
  <div
    onClick={() => {
      const passwordInputElement = document.getElementById(
        inputId
      ) as HTMLInputElement;
      if (passwordInputElement.type === "password") {
        passwordInputElement.type = "text";
      } else {
        passwordInputElement.type = "password";
      }
    }}
    className="absolute bottom-0 right-0 w-8 h-10 flex items-center justify-center cursor-pointer"
  >
    <AiFillEye />
  </div>
);

export default ShowPassword;
