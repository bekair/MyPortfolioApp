import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <Link href="/" className="text-primary-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 