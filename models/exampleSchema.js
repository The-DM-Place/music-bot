const { Schema, model } = require('synz-db');

const exampleSchema = new Schema({
    field1: { type: String, required: true, unique: true },
    field2: { type: Object, default: {} },
    field3: { type: Date, default: null },
    field4: { type: Array, default: [] },
});

// example statics

exampleSchema.statics.findByField1 = function (field1Value) {
    return this.findOne({ field1: field1Value });
};

module.exports = model('Example', exampleSchema);
