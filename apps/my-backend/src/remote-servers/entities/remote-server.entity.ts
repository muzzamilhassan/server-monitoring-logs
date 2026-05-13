import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


enum RemoteServerStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    UNKNOWN = "unknown"
}

@Entity()
export class RemoteServer {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    ownerId!: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: "simple-json" })
    config!: Record<string, any>;

    @Column({ type: "enum", enum: RemoteServerStatus, default: RemoteServerStatus.UNKNOWN })
    status!: RemoteServerStatus;

    @CreateDateColumn()
    createdAt!: Date;

    @CreateDateColumn()
    updatedAt!: Date;
}
