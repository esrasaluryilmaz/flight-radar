import t from "../../utils/formatDate";
import c from "../../utils/nullCheck";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Planlanan</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gercek</span>
        <span>{c(t(data.real?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{c(t(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
