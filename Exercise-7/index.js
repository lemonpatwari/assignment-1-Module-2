const getAddressCity =(address) => address?.city || 'Unknown';

const address = { street: '123 Main St', country: 'USA' };

console.log(getAddressCity(address));