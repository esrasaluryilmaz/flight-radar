import { useDispatch } from "react-redux";

import c from "../../utils/nullCheck";
import { close } from "../../redux/slices/detailSlice";
const Head = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className="head">
      <div>
        <h3 title="cagri isareti">{c(info?.identification?.callsign)}</h3>
        <span title="ucus numarasi">
          {c(info?.identification?.number?.default)}
        </span>
        <span title="ucak IATA/ICAO tip kodu">
          {c(info?.aircraft?.model?.code)}
        </span>
      </div>

      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;
