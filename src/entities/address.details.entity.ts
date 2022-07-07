import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt, } from 'sequelize-typescript';

@Table({
    tableName: 'address',
    timestamps: true,
    paranoid: true,
})
export class address extends Model<address> {
    @Column({
        type: DataType.UUID,
        unique: true,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string; // id

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    street: string; // street

    @Column({
        type: DataType.STRING,
    })
    city: string; // city

    @Column({
        type: DataType.STRING,
    })
    zipcode: string; // zipcode

    @Column({
        allowNull: false,
        type: DataType.JSONB,
    })
    geo: JSON[];

    @CreatedAt
    created_date: Date;

    @UpdatedAt
    updated_date: Date;

    @DeletedAt
    deleted_date: Date;

    rows:any;
    // @HasMany(() => address)
    // address: address[];
}