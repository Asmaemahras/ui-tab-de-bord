import "./Main.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";

import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Sub";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";


const Main = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />
            <Transactions />
            <Report />
        </div>
        <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Savings />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
       
    </div>
  )
}

export default Main