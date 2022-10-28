import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js";

class User extends Model {
    static associate = () => {
        this.belongsTo();
    };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        company_id: {
            type: DataTypes.INTEGER,
            // references
        },
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    }
);

User.sync();

export default User;
