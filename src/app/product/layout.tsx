export default function ProductLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <li>남자옷</li>
        <li>여자옷</li>
      </nav>
      <section>{children}</section>
    </>
  );
}
