import { IProduct, IProductCrud } from "./interfaces";

class ProductList implements IProductCrud {
    private productList: IProduct[] = []
    id: number = 1
    createProduct(data: { name: string, price: number }): IProduct {
        const newProduct: IProduct = {
            id: this.id,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.productList.push(newProduct);
        this.id++;
        return newProduct;
    };

    getProducts = (): IProduct[] => {
        return this.productList;
    };

    getOneProduct(id: number): IProduct | undefined {
        const index: number = this.productList.findIndex((product: IProduct) => {
            return id === product.id
        });

        if (index === -1) {
            return undefined;
        }

        return this.productList[index];
    };

    updateProduct(id: number, data: { name: string, price: number }): IProduct {
        const index: number = this.productList.findIndex((product: IProduct) => {
            return id === product.id
        });


        const updated: IProduct = {
            ...this.productList[index],
            ...data,
            updatedAt: new Date(),
        };

        this.productList.splice(index, 1, updated);

        return updated;

    };

    deleteProduct(id: number): { message: string } {
        const index: number = this.productList.findIndex((product: IProduct) => {
            return id === product.id
        });

        this.productList.splice(index, 1);

        return { message: "Product sucessfully deleted." }

    };
}

export const productList = new ProductList






