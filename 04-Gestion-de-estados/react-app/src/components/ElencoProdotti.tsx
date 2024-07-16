type Prodotto = {
  id: string;
  name: string;
};

type Props = {
  prodotti: Prodotto[];
};

function ElencoProdotti({ prodotti }: Props) {
  return (
    <ul>
      {prodotti.map((prodotto) => (
        <li key={prodotto.id}>{prodotto.name}</li>
      ))}
    </ul>
  );
}

export default ElencoProdotti;
