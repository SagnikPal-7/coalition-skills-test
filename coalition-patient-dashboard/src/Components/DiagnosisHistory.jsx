import BloodPressureChart from "./BloodPressureChart";
import VitalCard from "./VitalCard";

function DiagnosisHistory({
  diagnosisHistory,
}) {
  if (!diagnosisHistory.length) {
    return (
      <section className="panel diagnosis-panel">
        <h2 className="section-title">
          Diagnosis History
        </h2>

        <p className="empty-state">
          No diagnosis history available.
        </p>
      </section>
    );
  }

  const latestDiagnosis =
    diagnosisHistory[0];

  return (
    <section className="panel diagnosis-panel">
      <h2 className="section-title">
        Diagnosis History
      </h2>

      <BloodPressureChart
        diagnosisHistory={diagnosisHistory}
      />

      <div className="vitals-grid">
        <VitalCard
          type="respiratory"
          title="Respiratory Rate"
          value={
            latestDiagnosis.respiratory_rate
              ?.value
          }
          unit="bpm"
          status={
            latestDiagnosis.respiratory_rate
              ?.levels
          }
        />

        <VitalCard
          type="temperature"
          title="Temperature"
          value={
            latestDiagnosis.temperature?.value
          }
          unit="°F"
          status={
            latestDiagnosis.temperature?.levels
          }
        />

        <VitalCard
          type="heart"
          title="Heart Rate"
          value={
            latestDiagnosis.heart_rate?.value
          }
          unit="bpm"
          status={
            latestDiagnosis.heart_rate?.levels
          }
        />
      </div>
    </section>
  );
}

export default DiagnosisHistory;