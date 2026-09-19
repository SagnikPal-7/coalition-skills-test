import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="dashboard">

        <aside className="patients-column">
          Patient Area
        </aside>

        <section className="main-column">
          Diagnosis History
        </section>

        <aside className="profile-column">
          Jessica Profile
        </aside>

      </main>
    </div>
  );
}

export default App;