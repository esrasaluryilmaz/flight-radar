import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../redux/slices/detailSlice";
import { getIcon, getAirportIcon } from "../utils/geticon";
import c from "../utils/nullCheck";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { info, route } = useSelector((store) => store.detail);

  //Canli veri akisi icin her saniye basinda veriyyi cek
  //useEffect(()=> {
  //  setInterval(()=>dispatch(getFlights), 3000)

  //componentWillUnmount : map sayfasindan cikinca interval durmali
  //return()=>clearInterval(id)
  //},[])

  return (
    <MapContainer
      center={[39.148916, 35.335691]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight, key) => (
        <Marker
          key={key}
          position={[flight.lat, flight.lng]}
          icon={getIcon(
            flight.deg,
            info?.identification?.id === flight?.id,
            info?.identification?.id
          )}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => dispatch(open(flight.id))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* ucagin rotasini ciz */}
      {route?.length > 0 && (
        <Polyline positions={route} pathOptions={{ color: "red" }} />
      )}

      {/* Kalkis yaptigi hava alanini isaretle  */}
      {info?.airport?.origin?.position && (
        <Marker
          icon={getAirportIcon(true)}
          position={[
            info?.airport.origin.position?.latitude,
            info.airport.origin.position?.longitude,
          ]}
        >
          <Popup>
            <div className="popup">
              <span>Kalkis</span>
              <span>
                {c(info.airport.origin.position?.country?.name)} /{" "}
                {c(info.airport.origin.position?.region?.city)}
              </span>
            </div>
          </Popup>
        </Marker>
      )}

      {info?.airport?.destination?.position && (
        <Marker
          position={[
            info?.airport.destination.position?.latitude,
            info.airport.destination.position?.longitude,
          ]}
        >
          <Popup>
            <div className="popup">
              <span>Varış</span>
              <span>
                {c(info.airport.destination.position?.country?.name)} /
                {c(info.airport.destination.position?.region?.city)}
              </span>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
