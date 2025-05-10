import LinkButton from "@/components/LinkButton";

function NotFoundPage() {
  return (
    <section>
      <h1>Strona nie istnieje (404)</h1>

      <LinkButton to="/products">Przejdź do listy produktów</LinkButton>
    </section>
  );
}

export default NotFoundPage;
