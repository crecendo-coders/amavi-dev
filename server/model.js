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
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.INTEGER,
    },
    expDetail: {
      type: DataTypes.TEXT,
    },
    connection: {
      type: DataTypes.STRING,
    },
    voicingId: {
      type: DataTypes.INTEGER,
    },
    statusId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    hasAuditioned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    modelName: "member",
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
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'Pending'
    },
  },
  {
    modelName: "status",
    sequelize: db,
  }
);

class Subscriber extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Subscriber.init(
  {
    subscriberId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subscribed: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    name: DataTypes.STRING,
    companyName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailHash: DataTypes.STRING,
  },
  {
    modelName: "subscriber",
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
    archive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name:  DataTypes.STRING,
    summary:  DataTypes.TEXT,
    image: {
      type: DataTypes.STRING,
      defaultValue: "/logo.svg"
    },
    datetime: DataTypes.DATE,
    map: {
      type: DataTypes.STRING,
      defaultValue: "St. Mark's Cathedral"
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: "https://maps.app.goo.gl/iydDRkw79hczfSQ19"
    },
  },
  {
    modelName: "event",
    sequelize: db,
  }
);


Status.hasMany(Member, { foreignKey: "statusId" });
Member.belongsTo(Status, { foreignKey: "statusId" });

Voicing.hasMany(Member, { foreignKey: "voicingId" });
Member.belongsTo(Voicing, { foreignKey: "voicingId" });

Voicing.hasMany(Member, { foreignKey: "voicingId" });
Member.belongsTo(Voicing, { foreignKey: "voicingId" });

Subscriber.hasMany(Affiliate, {foreignKey: "subscriberId"})
Affiliate.belongsTo(Subscriber, {foreignKey: "subscriberId"})

export { Member, Status, Voicing, Affiliate, Event, Subscriber };

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing database...");
  await db.sync({ force: true });
  console.log("Finished syncing database!");
}