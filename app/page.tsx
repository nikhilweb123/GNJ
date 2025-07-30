export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Welcome to GNJ</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
        We are currently experiencing an issue. Please try again later.
      </p>
      <div style={{
        backgroundColor: '#ffe0e0',
        border: '1px solid #ffaaaa',
        padding: '15px',
        borderRadius: '8px',
        color: '#cc0000',
        fontWeight: 'bold'
      }}>
        Error: Service Unavailable
      </div>
    </div>
  );
}