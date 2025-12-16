export default function App() {
  const buildTime = new Date().toLocaleString();

  return (
    <div style={styles.container}>
      <h1>🚀 CI/CD Test App</h1>
      <p>Status: <span style={{ color: "lightgreen" }}>Running</span></p>
      <p>Build Time: {buildTime}</p>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        Deployed via Jenkins Pipeline
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0d1117",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
};
