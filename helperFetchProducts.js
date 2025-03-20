
export async function fetchProducts() {
    try {
        const response = await fetch("data.json"); // Cargar el JSON
        const products = await response.json();
        console.log("Productos cargados:", products);
        return  products; // Convertir a objeto JS
        
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}