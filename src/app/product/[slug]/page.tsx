interface Props {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  return <div>{params.slug} 제품 설명 페이지</div>;
}
