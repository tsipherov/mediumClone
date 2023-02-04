import { useContext } from "react";
import LengContext from "../../LengContext";

function Article() {
  const context = useContext(LengContext);
  console.log(context.leng);
  return (
    // <LengContext.Consumer>
    <h2>Article page Leng={context.leng}</h2>
    // </LengContext.Consumer>
  );
}

export default Article;
