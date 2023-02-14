export const maxLength = length => value =>
	value && value.length > length ? `max length ${length}` : undefined;

export const minLength = length => value =>
	value && value.length < length ? `min length ${length}` : undefined;

export const emailValidator = value => {
	const regex = new RegExp('^[a-zA-Z0-9#!?`~]+@[a-zA-Z]+[.a-zA-Z]');
	return value && !value.search(regex) && 'Invalid email address'
};
export const passwordValidator = value => {
	console.log(value)
	const regex = new RegExp('^[a-zA-Z0-9.,!]+[a-zA-Z0-9.,!]');
	const upCase = new RegExp('[A-Z]');
	const hasNumber = new RegExp('[0-9]');
	if (value && !value.match(upCase)) return 'Enter a capital letter';
	if (value && !value.match(hasNumber)) return 'Enter numbers';
	if (value && value.search(regex)) return 'Invalid password';
	return undefined
};


