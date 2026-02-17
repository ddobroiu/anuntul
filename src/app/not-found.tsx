
import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h2 style={{ fontSize: '4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text)' }}>Pagina nu a fost găsită</p>
            <Link href="/" className="btn btn-primary">
                Înapoi la Prima Pagină
            </Link>
        </div>
    );
}
