import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export async function getPokemonList(url = `${baseUrl}/pokemon`) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return null;
  }
}

export async function getPokemonById(id) {
  try {
    const response = await axios.get(`${baseUrl}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon with id ${id}:`, error);
    return null;
  }
}
