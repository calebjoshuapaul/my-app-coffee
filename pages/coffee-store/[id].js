import Link from "next/link";
import { useRouter } from "next/router";
import cardData from "../../data/coffee-stores.json";

function CoffeeStore() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1></h1>
      <Link href="/" scroll={false}>
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default CoffeeStore;
