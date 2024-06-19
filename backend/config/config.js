module.exports = {
  development: {
    dialect: "postgres",
    protocol: "postgres",
    host: "dpg-cpp9mmeehbks73bu38f0-a.frankfurt-postgres.render.com",
    username: "projetweb_user",
    password: "vmONe9svEdUzV6DtvGCMbFBsMQND9Ynk",
    database: "projetweb",
    dialectOptions: {
      ssl: true,
      native: true,
    },
    define: {
      timestamps: false,
    },
  },
};
