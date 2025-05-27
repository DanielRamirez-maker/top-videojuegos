class VideojuegoDAO {
  constructor(rutaJson) {
    this.rutaJson = rutaJson;
  }

  async obtenerRanking() {
    try {
      const response = await fetch(this.rutaJson);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Datos cargados:", data); // <--- Para verificar
      return data.sort((a, b) => b.ventas - a.ventas);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      return [];
    }
  }
}