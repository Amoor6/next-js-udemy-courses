import Link from 'next/link';

function page() {
  return (
    <div>
      <div>meal</div>
      <div style={{ marginTop: '20px' }}>
        <Link href="/meals/share">
          <button>Share Meal</button>
        </Link>
      </div>
    </div>
  )
}

export default page