import { useEffect, useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import PatientSidebar from "./Components/PatientSidebar";
import DiagnosisHistory from "./Components/DiagnosisHistory";
import DiagnosticList from "./Components/DiagnosticList";
import PatientProfile from "./Components/PatientProfile";
import LabResults from "./Components/LabResults";

import { getPatients } from "./services/patientApi";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function loadPatientData() {
      try {
        setLoading(true);
        setError("");

        const data = await getPatients({
          signal: controller.signal,
        });

        const jessica = data.find(
          (item) =>
            item.name?.trim().toLowerCase() ===
            "jessica taylor"
        );

        if (!jessica) {
          throw new Error(
            "Jessica Taylor was not found in the API response."
          );
        }

        if (isMounted) {
          setPatients(data);
          setPatient(jessica);
        }
      } catch (err) {
        if (
          !isMounted ||
          err.name === "AbortError"
        ) {
          return;
        }

        setError(
          err.message ||
            "Something went wrong while loading patient data."
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPatientData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <main className="status-screen">
        <div className="loading-spinner" />
        <p>Loading patient information...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="status-screen">
        <div className="error-box">
          <h1>Unable to load patient data</h1>
          <p>{error}</p>
          <p>
            Check the browser Network tab and make sure
            the API request returns status 200.
          </p>
        </div>
      </main>
    );
  }

  if (!patient) {
    return null;
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="dashboard">
        <PatientSidebar
          patients={patients}
          selectedName={patient.name}
        />

        <section className="dashboard-center">
          <DiagnosisHistory
            diagnosisHistory={
              patient.diagnosis_history || []
            }
          />

          <DiagnosticList
            diagnostics={
              patient.diagnostic_list || []
            }
          />
        </section>

        <aside className="dashboard-right">
          <PatientProfile patient={patient} />

          <LabResults
            results={patient.lab_results || []}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;