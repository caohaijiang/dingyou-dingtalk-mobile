import user from './user';

export const resources = Object.assign( {} ,
    user, 
);

export const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    credentials: 'omit'
};