import Header from "../Header";
function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
export default DefaultTemplate;
