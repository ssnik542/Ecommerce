import { NavLink } from "react-router-dom";
import "./billingstyle.css";
function OrderPlaced() {
  return (
    <>
      <div className="jadu">
        <div class="iphone">
          <div className="dabba">
            <h1> Ordered placed successfully🎉🎉🎉</h1>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thank-you-for-your-order-design-template-d56ea122db50ee6c2fe9cef22da510a2_screen.jpg?ts=1608779634" />
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderPlaced;
