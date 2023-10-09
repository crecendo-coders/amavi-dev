import { DataTypes, Model } from 'sequelize';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///personal-project');

class Member extends Model {}
Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
    },
    statusId: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.TEXT,
    },
    voicingId: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'member',
    sequelize: db,
  }
);

class Role extends Model {}
Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'role',
    sequelize: db,
  }
);

class Status extends Model {}
Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'status',
    sequelize: db,
  }
);

class Voicing extends Model {}
Voicing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'voicing',
    sequelize: db,
  }
);

class Affiliate extends Model {}
Affiliate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.STRING,
    },
    end_date: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'affiliate',
    sequelize: db,
  }
);

class Event extends Model {}
Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    programme: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    start_time: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: 'event',
    sequelize: db,
  }
);

Member.belongsTo(Role, { foreignKey: 'roleId' });
Member.belongsTo(Status, { foreignKey: 'statusId' });
Member.belongsTo(Voicing, { foreignKey: 'voicingId' });

export { Member, Role, Status, Voicing, Affiliate, Event };
