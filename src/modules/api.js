export const auth = async (params, values) => {
  // const params = new URLSearchParams({ q: search });
  // const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}${params}`);
  const response = await fetch(`https://loft-taxi.glitch.me/${params}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
export const route = async (params) => {
  const response = await fetch(`https://loft-taxi.glitch.me/${params}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
