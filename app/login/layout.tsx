import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Melde dich bei CloudSorted an, um deine Cloud automatisch zu sortieren.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
