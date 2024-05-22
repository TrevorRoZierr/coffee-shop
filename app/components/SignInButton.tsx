import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

const SignInButton = () => {
  return (
    <div>
      <Button
        className="mr-4 text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black"
        asChild
      >
        <LoginLink className="lg:text-md text-sm md:text-md">Login</LoginLink>
      </Button>
    </div>
  );
};

export default SignInButton;
