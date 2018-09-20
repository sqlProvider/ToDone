export interface IToDoneProperty {
	userId: number;
    id?: number; // id is not required
    title: string;
    completed: boolean
}

export interface IToDonePropertyWithIndex extends IToDoneProperty{
	index: number;
}
