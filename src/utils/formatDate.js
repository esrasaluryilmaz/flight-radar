const formatDate = (unix_time) => {
  // veri gelmezse null dondur
  if (!unix_time || unix_time === 0) return null;

  //saniye formatindaki veriyi once milisaniye formatina
  // ardindan date formatina ceviriyoruz

  const formatted = new Date(unix_time * 1000);
  // tarihi okunabilir veri formatina cevirip donduruyoruz
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
export default formatDate;
