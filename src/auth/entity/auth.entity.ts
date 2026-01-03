import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class AuthEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;
}
