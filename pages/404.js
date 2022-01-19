import Link from "next/link";

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>
      <p>
        Return{" "}
        <Link href='/'>
          <a>home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
