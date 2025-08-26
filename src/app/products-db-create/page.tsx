import SubmitButton from "@/components/submit";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";


export default function AddProductPage(){

    async function createProduct(formData: FormData) {
        "use server";

        const title = formData.get("title") as string
        const price = formData.get("price") as string
        const description = formData.get("description") as string

        await addProduct( title, parseInt(price), description )
        redirect("/products-db");
    }

    return (
        <form action={createProduct} className="bg-pink-300 p-4 space-y-4 max-w-96 my-10 m-auto rounded-lg">
            <label className="text-white">
                Title
                <input
                    type="text"
                    className="block w-full p-2 text-black border rounded"
                    name="title"
                />
            </label>
            <label className="text-white">
                Price
                <input
                    type="number"
                    className="block w-full p-2 text-black border rounded"
                    name="price"
                />
            </label>
            <label className="text-white">
                Description
                <textarea
                    className="block w-full p-2 text-black border rounded"
                    name="description"
                />
            </label>
            <SubmitButton />
        </form>
    )
}