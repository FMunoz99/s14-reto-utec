import Api from "../api"; // Ajusta la ruta de acuerdo con tu estructura de proyecto

class Paginacion {
  // Método que obtiene los productos con paginación
  async obtenerItemsConPaginacion(limit: number, lastKey: string | null) {
    try {
      // Obtener la instancia de la API
      const api = await Api.getInstance();

      // Configuración para la solicitud GET
      const config = {
        url: `/items`,  // Ajusta la URL de la API según la que necesites
        params: {
          limit,
          lastKey,
        },
      };

      // Realizamos la solicitud GET a la API
      const response = await api.get<any, { items: any[]; lastKey: string }>(config);

      // Depuración: Verifica la respuesta
      console.log("Respuesta de la API:", response.data);

      // Retornamos los datos de la respuesta
      return response.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw new Error('Hubo un error al cargar los productos.');
    }
  }
}

export default Paginacion;
