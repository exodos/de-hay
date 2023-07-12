import Image from "next/image";
import loginImage from "@/public/logos/login-logo.png";

export default function LoginLayoutOld({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-full flex-1">
        {children}
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            src={loginImage}
            alt="Login Logo"
            unoptimized
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
