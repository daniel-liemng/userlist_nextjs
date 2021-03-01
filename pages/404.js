import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>
      <Link href='/'>
        <a>Go back Homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
