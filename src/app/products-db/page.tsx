import { getProducts } from "@/prisma-db";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDBPage(){
    const products: Product[] = await getProducts();

    return(
        <ul className="space-y-4 p-4">
            {products.map((product) => (
                <li
                    key={product.id}
                    className="p-4 bg-gray-800 text-white shadow-md rounded-lg"
                >
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className=" text-lg font-medium">${product.price}</p>
                </li>
            ))}
        </ul>
    )
}