import React, { useEffect, useState } from 'react';
import { HeroListContainer, SearchInput, HeroesContainer } from './ListHeroes.styles';
import { HeroCard } from '../HeroCard';

interface Hero {
  id: number;
  name: string;
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

function ListHeroes(){
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        const data = await response.json();
        setHeroes(data);
        setLoading(false);
      } catch (error) {
        setError('error');
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <HeroListContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <HeroesContainer>
        {filteredHeroes.map(hero => (
          <HeroCard key={hero.id} name={hero.name} image={hero.images.lg} />
        ))}
      </HeroesContainer>
    </HeroListContainer>
  );
};

export default ListHeroes;