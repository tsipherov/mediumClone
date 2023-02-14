import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Article() {
  const context = useContext(UserContext);
  console.log(context.leng);
  return (
    // <LengContext.Consumer>
    <h2>Article page Leng={context.leng}</h2>
    // </LengContext.Consumer>
  );
}

export default Article;
