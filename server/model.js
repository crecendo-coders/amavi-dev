import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import dotenv from "dotenv";
import util from "util";
import url from 'url'
dotenv.config();

import process from "process";
// local db
const dbURI = "postgresql:///amavi";
// remote db
// if (process.env.ENV === "production") {
//   const dbName = process.env.DB_NAME;
//   const dbPwd = process.env.DB_PWD;
//   const dbUser = process.env.DB_USER;
//   const dbPort = process.env.DB_PORT;
//   const dbIp = process.env.DB_IP;
//   const dbAuth = `${dbUser}:${dbPwd}@${dbIp}:${dbPort}:`
//   // postgres://user:password@IPAddress:5432/dbname
//   const dbURI = `postgresql://${dbAuth}/${dbName}`;
// }
console.log("dbURI", dbURI);
const db = await connectToDB(dbURI);

class Member extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Member.init(
  {
    memberId: {
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
    modelName: "member",
    sequelize: db,
  }
);

class Role extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Role.init(
  {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "roles",
    sequelize: db,
  }
);

class Status extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Status.init(
  {
    statusId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "status",
    sequelize: db,
  }
);

class Voicing extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Voicing.init(
  {
    voicingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "voicing",
    sequelize: db,
  }
);

class Affiliate extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Affiliate.init(
  {
    affiliateId: {
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
    modelName: "affiliate",
    sequelize: db,
  }
);

class Event extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Event.init(
  {
    eventId: {
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
    modelName: "event",
    sequelize: db,
  }
);

Role.hasMany(Member, { foreignKey: "roleId" });
Member.belongsTo(Role, { foreignKey: "roleId" });

Status.hasMany(Member, { foreignKey: "statusId" });
Member.belongsTo(Status, { foreignKey: "statusId" });

Voicing.hasMany(Member, { foreignKey: "voicingId" });
Member.belongsTo(Voicing, { foreignKey: "voicingId" });

export { Member, Role, Status, Voicing, Affiliate, Event };

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing database...");
  await db.sync();
  console.log("Finished syncing database!");
}