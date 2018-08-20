/**
 * Calculate the max distance between a city and a space station
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 * @param {Number} n Number of cities
 * @param {Array<Number>} c Indexes of cities with Space Stations
 */
export default function flatlandSpaceStations(n, c) {
  const numStations = c.length;
  const stations = [...c.sort((a, b) => a - b)];
  let maxDist = 0;

  // calc max distance between stations
  for (let i = 1; i < numStations; i++) {
    let dist = Math.floor((stations[i] - stations[i - 1]) / 2);

    if (dist > maxDist) {
      maxDist = dist;
    }
  }

  // check whether the first city is too far away from first station
  // or the last city is too far away from last city
  const distToFirstStation = stations[0];
  const distToLastStation = n - 1 - stations[numStations - 1];

  // return the biggest distance
  return Math.max(maxDist, distToFirstStation, distToLastStation) || 0;
}
