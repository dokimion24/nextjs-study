import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

function AboutDetailPage({ params }: Props) {
  if (params.slug === "s") {
    console.log("S");
    notFound();
  }

  return <h1>{params.slug}</h1>;
}

export default AboutDetailPage;

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
