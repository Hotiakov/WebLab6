import { List } from "immutable";

const brokersReducer = (state = List(), action) => {
    switch (action.type) {
        case "BUY_STOCKS":
            console.log(state);
            return state.map((broker)=>{
                broker[action.transaction.stock] += action.transaction.amount;
                broker.budget -= action.transaction.price;
                return broker;
            });
        case "UPDATE_BROKERS":
            return action.brokers;
        case "SET_BROKER":
            return state.set(0, action.broker);
        default:
            return state;
    }
}
export default brokersReducer;