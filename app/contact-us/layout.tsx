import Script from "next/script";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="/js/contact.js" strategy="afterInteractive" />
    </>
  );
}
