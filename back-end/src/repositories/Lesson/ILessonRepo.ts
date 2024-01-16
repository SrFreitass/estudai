export interface ILessonRepo<T> {
  find(lecture_id: string): Promise<T[]>;

  findOne(id: string): Promise<T>;

  create(item: T): Promise<T>;

  update(item: T): Promise<T>;

  delete(id: string): Promise<T>;
}
