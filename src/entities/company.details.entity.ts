import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt, HasMany, } from 'sequelize-typescript';
import { COMPANY_TYPE } from '../config/index';
import { address } from './address.details.entity';
import { profile_Details } from './profile.details.entity';

@Table({
    tableName: 'company',
    timestamps: true,
    paranoid: true,
})
export class company extends Model<company> {

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
    company_name: string; // company_name

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    catchparse: string; // catchparse

    @Column({
        type: DataType.STRING,
    })
    bs: string; // bs

    @Column({
        type: DataType.STRING,
    })
    company_type: COMPANY_TYPE; // company_type

    @CreatedAt
    created_date: Date;

    @UpdatedAt
    updated_date: Date;

    @DeletedAt
    deleted_date: Date;

    rows:any;
    // @HasMany(() => company)
    // company: company[];
}