export const convertUnit = (value, fromUnit, toUnit) => {
  return fetch(
    `https://randomapi.dev/api/units/convert?from=${fromUnit}&to=${toUnit}&value=${value}`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  });
};
