import { onMounted, watch } from "vue";
import { Storage } from "@ionic/storage";

const storage = new Storage();
storage.create();

export interface Game {
  name: string;
  price: string;
}

export function UserGame() {
  const USER_STORAGE = "game";
  let game = {
    name: "",
    price: "",
  };

  const cacheGame = () => {
    storage.set(USER_STORAGE, JSON.stringify(game));
  };

  const saveGame = async (game: Game): Promise<Game> => {
    storage.set(USER_STORAGE, JSON.stringify(game));
    return game;
  };

  const loadSaved = async () => {
    const gameInStorage = await storage.get(USER_STORAGE);
    game = gameInStorage.value
      ? JSON.parse(gameInStorage.value)
      : {
          name: "",
          price: "",
        };
  };

  onMounted(loadSaved);
  watch(game, cacheGame);
  return {
    game,
    saveGame,
  };
}
