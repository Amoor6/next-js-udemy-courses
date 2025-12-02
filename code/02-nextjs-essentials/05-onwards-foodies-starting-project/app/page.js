import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link href="/meals">
          <button>Meals</button>
        </Link>
        {' '}
        <Link href="/community">
          <button>Community</button>
        </Link>
      </div>
    </main>
  );
}
