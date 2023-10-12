import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";
import url from 'url'
import 'dotenv/config'

import process from "process";
const {CONNECTION_STRING} = process.env
const dbURI = CONNECTION_STRING;

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

class Audition extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Audition.init(
  {
    auditionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    expDetail: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.INTEGER,
    },
    connection: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "audition",
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

Voicing.hasMany(Audition, { foreignKey: "voicingId" });
Audition.belongsTo(Voicing, { foreignKey: "voicingId" });

Voicing.belongsToMany(Audition, {
  through: "Audition_Voicing",
  as: "audition",
  foreignKey: "voicingId",
});

Audition.belongsToMany(Voicing, {
  through: "Audition_Voicing",
  as: "voicing",
  foreignKey: "AuditionId",
});


export { Member, Role, Status, Voicing, Affiliate, Event, Audition };

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing database...");
  await db.sync();
  console.log("Finished syncing database!");
}