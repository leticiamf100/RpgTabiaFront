import { useState } from 'react';
import CardInicial from './components/CardInicial';
//import { Card } from './components/card.tsx';
import { ResultCard } from './components/ResultCard';
import './App.css';
import { useLootData } from './hooks/useLootData';
import { useEventData } from './hooks/useEventData'
import { LootData } from './interface/LootData';
import { EventData } from './interface/EventData';


function App() {
  const [value, setValue] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<'recompensa' | 'evento' | null>(null);
  const { data: lootData } = useLootData();
  const { data: eventData } = useEventData();

  const handleGenerateClick = (type: 'recompensa' | 'evento') => {
    setSelectedType(type);
    
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue ? Number(inputValue) : null);
  };

  const result = selectedType === 'recompensa' 
    ? lootData?.find((item: LootData) => item.valor === value) 
    : eventData?.find((item: EventData) => item.valor === value);

  return (
    <div className='container'>
      <h1>Forge RPG</h1>
      <CardInicial 
        logo="/src/assets/logoRpg.jpeg"
        description="Olá aventureiros, nesse projeto inicial da nossa aplicação estamos com duas funções disponíveis o 'Gerador de Recompensas' e o 'Gerador de Eventos', você pode escolher qualquer um para usar, mas tenha em mente que para o 'Gerador de Recompensas' você rodará 1d20 e para o 'Gerador de Eventos' você rodará 1d10, colocando o respectivo valor no campo de preenchimento. "
      />
      <div className='button-container'>
      <button className={selectedType === 'recompensa' ? 'selected' : ''} onClick={() => handleGenerateClick('recompensa')}>Gerador de Recompensas</button>
      <button className={selectedType === 'evento' ? 'selected' : ''} onClick={() => handleGenerateClick('evento')}>Gerador de Eventos</button>
    </div>

      {selectedType && (
        <div className='generator-card'>
          {/*<h2>{selectedType === 'recompensa' ? 'Gerador de Recompensas' : 'Gerador de Eventos'}</h2>*/}
          <input 
            type="number" 
            placeholder="Insira um valor"
            onChange={handleValueChange}
          />
          {result && (
            <ResultCard 
            title={selectedType === 'recompensa' 
              ? (result as LootData).recompensa 
              : (result as EventData).evento}
            imagem={selectedType === 'recompensa' 
              ? (result as LootData).image 
              : (result as EventData).image}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;