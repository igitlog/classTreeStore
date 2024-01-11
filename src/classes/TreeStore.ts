export type TreeNode = {
    id: string | number;
    parent: string | number;
    type?: string | null;
};

export class TreeStore {
    private readonly items: TreeNode[];

    constructor(items: TreeNode[]) {
        this.items = items;
    }

    getAll(): TreeNode[] {
        return this.items;
    }

    getItem(id: string | number): TreeNode | undefined {
        return this.items.find((item) => item.id === id);
    }

    getChildren(id: string | number): TreeNode[] {
        return this.items.filter((item) => item.parent === id);
    }

    getAllChildren(id: string | number): TreeNode[] {
        const result: TreeNode[] = [];
        const queue: (string | number)[] = [id];

        while (queue.length > 0) {
            const currentId = queue.shift()!;
            const children = this.getChildren(currentId);
            result.push(...children);
            queue.push(...children.map((child) => child.id));
        }

        return result;
    }

    getAllParents(id: string | number): TreeNode[] {
        const result: TreeNode[] = [];
        let currentId: string | number = id;

        while (true) {
            const parent = this.items.find((item) => item.id === currentId);
            if (!parent) break;
            result.unshift(parent);
            currentId = parent.parent;
        }

        return result;
    }
}