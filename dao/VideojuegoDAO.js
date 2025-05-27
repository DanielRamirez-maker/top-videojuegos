class VideojuegoDAO {
  constructor(rutaJson) {
    this.rutaJson = rutaJson;
  }

  async obtenerRanking() {
    try {
      const response = await fetch(this.rutaJson);
      const data = await response.json();
      return data.sort((a, b) => b.ventas - a.ventas);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      return [];
    }
  }
}