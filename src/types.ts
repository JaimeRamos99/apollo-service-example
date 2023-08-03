export interface Context {
    user: {
      brand_id: string;
    };
}

interface BaseEntity {
  id: string;
}

// Define a generic repository interface
export interface Repository<T extends BaseEntity> {
  //findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(entity: Partial<T>): Promise<T>;
  //update(id: string, entity: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}