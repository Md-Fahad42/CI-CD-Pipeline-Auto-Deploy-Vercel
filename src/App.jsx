function App() {
  return (
    <div style={styles.container}>
      <h1>✅ CI/CD Working</h1>

      <p>This app is deployed automatically.</p>

      <p>
        If you can see this page, your
        <br />
        <strong>GitHub → Jenkins → Vercel</strong>
        <br />
        pipeline is working 🎉
      </p>

      <p style={styles.note}>
        Last updated: {new Date().toLocaleString()}
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0d1117",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  note: {
    marginTop: "20px",
    fontSize: "14px",
    opacity: 0.7,
  },
};

export default App;
