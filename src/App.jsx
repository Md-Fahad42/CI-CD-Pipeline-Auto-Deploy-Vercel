function App() {
  const buildTime = new Date().toLocaleString();
  const version = "1.1.0"; // bump this to verify CI/CD
  const env = import.meta.env.MODE;

  return (
    <div style={styles.container}>
      <h1>🚀 CI/CD Pipeline Test App</h1>

      <div style={styles.card}>
        <div style={styles.row}>
          <span style={styles.dot} />
          <strong>Service Status:</strong> Healthy
        </div>

        <p>
          <strong>Environment:</strong> {env}
        </p>

        <p>
          <strong>Version:</strong> {version}
        </p>

        <p>
          <strong>Build Time:</strong> {buildTime}
        </p>
      </div>

      <button style={styles.button} onClick={() => window.location.reload()}>
        🔄 Refresh App
      </button>

      <p style={styles.footer}>
        Auto-deployed using GitHub → Jenkins → Vercel
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0d1117",
    color: "#c9d1d9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  card: {
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "8px",
    padding: "20px 30px",
    marginTop: "20px",
    width: "340px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#3fb950",
  },
  button: {
    marginTop: "20px",
    padding: "8px 16px",
    background: "#238636",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "30px",
    fontSize: "14px",
    opacity: 0.7,
  },
};

export default App;
