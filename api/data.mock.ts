export interface ToDo {
  id: number;
  title: string;
  descr?: string;
}

export const TODOS: ToDo[] = [
  {
    id: new Date().valueOf(),
    title: "Titolo 1",
    descr: "Descrizione 1",
  },
  {
    id: new Date().valueOf(),
    title: "Titolo 2",
    descr:  "",
  }
];
