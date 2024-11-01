export class DatabaseEntity<T> {
  id: string;
  collection: string;
  data: T;

  constructor(id: string, collection: string, data: T) {
    this.id = id;
    this.collection = collection;
    this.data = data;
  }
}
