export async function getPatients() {

  const response = await fetch("YOUR_API_URL", {
    method: "GET",
    headers: {
      Authorization: "YOUR_AUTHORIZATION_VALUE"
    }
  });

  if (!response.ok) {
    throw new Error("Unable to fetch patient data");
  }

  return response.json();
}