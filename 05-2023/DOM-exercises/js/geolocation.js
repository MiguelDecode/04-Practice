export default function getLocation(id) {
  const $location = document.getElementById(id);
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const accu = position.coords.accuracy;
    $location.innerHTML = `<p>Tu posición actual es:</p>
    <ul>
    <li>Latitud: ${lat.toFixed(2)}</li>
    <li>Longuitud: ${long.toFixed(2)}</li>
    <li>Precisión: ${accu.toFixed(2)} metros</li>
    <li><a href="https://www.google.com/maps/@${lat},${long},10z" rel="noopener" target="_noblank">Ver en Google Maps</a></li>
    
    </ul>
    `;
    // console.log(position);
  };

  const error = (err) => {
    $location.innerHTML = `<p>Error: ${err.code}: ${err.message}</p>`;
    console.warn(`Error: ${err.code}: ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, geoOptions);
}
