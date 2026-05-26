import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Melde dich bei CloudSorted an, um Google Drive und OneDrive automatisch aufzuräumen.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
