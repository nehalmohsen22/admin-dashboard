import "./featuredInfo.css";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { Doughnut } from "react-chartjs-2";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            -11.4 <BiDownArrowAlt className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4.415</span>
          <span className="featuredMoneyRate">
            -1.4 <BiDownArrowAlt className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.45</span>
          <span className="featuredMoneyRate">
            +1.4 <BiUpArrowAlt className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub"> Compared to last month</span>
      </div>
    </div>
  );
}
