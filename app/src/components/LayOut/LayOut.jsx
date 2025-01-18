import Nav from "../../components/Nav/Nav";
export default function LayOut({ children }) {
  return (
    <div className="home-wrapper">
      <Nav />
      <div className="content-wrapper">{children}</div>
    </div>
  );
}
