export default function App() {
  const buildTime = new Date().toLocaleString();

  return (
    <div style={styles.container}>
      <h1>🚀 CI/CD Pipeline Test App</h1>

      <div style={styles.card}>
        <p>
          <strong>Status:</strong>{" "}
          <span style={{ color: "#3fb950" }}>Running Successfully</span>
        </p>

        <p>
          <strong>Build Time:</strong> {buildTime}
        </p>

        <p>
          <strong>Environment:</strong>{" "}
          {import.meta.env.MODE}
        </p>
      </div>

      <p style={styles.footer}>
        Deployed automatically using GitHub → Jenkins → Vercel
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
    width: "320px",
  },
  footer: {
    marginTop: "30px",
    fontSize: "14px",
    opacity: 0.7,
  },
};
