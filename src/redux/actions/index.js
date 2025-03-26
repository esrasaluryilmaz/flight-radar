import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/ getFlights", async () => {
  //parametreleri belirle
  const params = {
    bl_lat: "34.457212",
    bl_lng: "24.609666",
    tr_lat: "43.610013",
    tr_lng: "46.791334",
    speed: "3",
  };
  //api istegi at
  const res = await api.get("/flights/list-in-boundary", { params });

  //apiden gelen verileri dizi icerisindeki dizileri nesnelere cevirdik
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  //aksiyonun payloadini return et
  return formatted;
});
//id uzerinden ucusun detaylarini almamizi saglayan fonk.
export const getDetail = createAsyncThunk(
  "detail/getDetails",
  async (flightId) => {
    //parametreleri belirle
    const params = {
      flight: flightId,
    };
    //api istegi at
    const res = await api.get("/flights/detail", { params });

    //aksiyonun payloadini return et
    return res.data;
  }
);
