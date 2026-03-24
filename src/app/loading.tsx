
export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: 'var(--color-primary)'
        }}>
            <div style={{
                width: '50px',
                height: '50px',
                border: '5px solid var(--color-bg-alt)',
                borderTop: '5px solid var(--color-primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
            <span style={{ marginLeft: '1rem', fontSize: '1.2rem', fontWeight: '500' }}>Se încarcă...</span>
        </div>
    );
}
