import { useState, useEffect } from 'module';
import * as Location from 'expo-location';

export default useLoacation = () => {
  const [location, setLocation] = useState({})

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      const lastCords = await Location.getLastKnownPositionAsync()
      if (lastCords && lastCords.coords && lastCords.coords.latitude && lastCords.coords.longitude) {
        setLocation({
          latitude: lastCords.coords.latitude,
          longitude: lastCords.coords.longitude
        })
      }
      else {
        const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync()
        setLocation({ latitude: longitude, longitude: latitude })
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location

}
