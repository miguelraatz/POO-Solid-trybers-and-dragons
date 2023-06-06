import SimpleFighter from './SimpleFighter';
import Energy from '../Energy';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

// Aqui vamos precisar que os métodos de Fighter que recebiam um inimigo do tipo Fighter agora possam receber um SimpleFighter. Assim um Fighter pode atacar um Monster smile.

export default Fighter;
