import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'

import "leaflet/dist/leaflet.css";

const position = [10.63960, -63.25584]

const Map = () => (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
);

export default Map;
