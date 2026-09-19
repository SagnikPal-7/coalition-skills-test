const API_URL =
  "https://fedskillstest.coalitiontechnologies.workers.dev/";

const API_USERNAME = "coalition";
const API_PASSWORD = "skills-test";

export async function getPatients({ signal } = {}) {
  const credentials = btoa(
    `${API_USERNAME}:${API_PASSWORD}`
  );

  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${credentials}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `Patient API request failed: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error(
      "The Patient Data API returned an unexpected response."
    );
  }

  return data;
}