function DiagnosticList() {
  return (
    <section className="diagnostic-list">

      <h2>Diagnostic List</h2>

      <table>

        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Hypertension</td>
            <td>Chronic high blood pressure</td>
            <td>Under Observation</td>
          </tr>
        </tbody>

      </table>

    </section>
  );
}

export default DiagnosticList;