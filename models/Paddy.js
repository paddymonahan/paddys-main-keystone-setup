var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Paddy Model
 * ==========
 */
var Paddy = new keystone.List('Paddy');

Paddy.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Paddy.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Paddy.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Paddy.defaultColumns = 'name, email, isAdmin';
Paddy.register();
