module.exports.models = {
  datastore: "default",

  attributes: {
    createdAt: { type: "number", autoCreatedAt: true },
    updatedAt: { type: "number", autoUpdatedAt: true },
    id: { type: "number", autoIncrement: true },
  },

  dataEncryptionKeys: {
    default: "iK62XuQ2N1nJwHpgpBOb+08XhWxY33lJdXrzlj4WUGI=",
  },

  cascadeOnDestroy: true,
};
