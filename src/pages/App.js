
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container, Search } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

 
  const handleSearchRepo = async () => {

    //verifica se o repositório foi digitado
    if(!currentRepo){
      alert('Digite o nome do repositório')
      return
    }

    // Verifica se o repositório já existe na lista
    const repoExists = repos.find(repo => repo.full_name.toLowerCase() === currentRepo.toLowerCase());
    if(repoExists){
      alert('Repositório já adicionado');
      setCurrentRepo('');
      return;
    }

  //handleSearchRepo => busca repositório
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);
      // Verifica se o repositório já existe na lista
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }



  const handleRemoveRepo = (id) => {
     //handleRemoveRepo => remove repositório
    console.log('Removendo registro', id)
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Search>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo}/>
      </Search>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
