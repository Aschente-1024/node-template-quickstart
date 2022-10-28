import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js";

class Company extends Model {
    static associate = () => {
        this.hasMany();
    };
}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "company",
        timestamps: false,
    }
);

Company.sync();

export default Company;
