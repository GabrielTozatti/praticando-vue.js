export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((itemlista1) => lista2.includes(itemlista1));
}