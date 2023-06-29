import CountUI from "../../components/Count";
import { createIncrementAction } from "../../redux/count_action";

import { connect } from "react-redux";

// function mapStateToProps(state) {
//   return { Count: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//   };
// }

export default connect((state) => ({ Count: state }), {
  jia: createIncrementAction,
})(CountUI);
