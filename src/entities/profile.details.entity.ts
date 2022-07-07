import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { COMPANY_TYPE, REGISTRATION_STATUS, ROLE } from "src/config";
import { address } from "./address.details.entity";
import { company } from "./company.details.entity";

@Table({
    tableName: "profile_details",
    timestamps: true,
    paranoid: true,
})
export class profile_Details extends Model<profile_Details>{

    @Column({
        type: DataType.UUID,
        unique: true,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string; // id

    @ForeignKey(() => address)
    @Column({
        type: DataType.UUID,
    })
    address_id: string;

    @ForeignKey(() => company)
    @Column({
        type: DataType.UUID,
    })
    company_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string; // name

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string; // username

    @Column({
        type: DataType.STRING,
    })
    email: string; // email

    @Column({
        type: DataType.STRING,
        defaultValue: ROLE.USER,
    })
    role: ROLE; // ROLE

    @Column({
        type: DataType.STRING,
    })
    phone: string; // phone

    @CreatedAt
    created_date: Date;

    @UpdatedAt
    updated_date: Date;

    @DeletedAt
    deleted_date: Date;


    @BelongsTo(() => address)
    address: address[];

    @BelongsTo(() => company)
    company: company[];

}
