import { createUser } from "../actions/creator";
import { connect } from "react-redux";
import Signup from "../components/User/signup";

const mapDispatchToProps = {
  createUser
};
export default connect(
  null,
  mapDispatchToProps
)(Signup);
