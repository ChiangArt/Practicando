import { User } from "../models/users";


/**
 * 
 * @param {ArrayLike<User>} localHostUser 
 * @returns {User}
 */
export const localHostUserToModel = (localhostUser) => {

    const { 
        id, 
        isActive, 
        balance, 
        avatar, 
        first_name, 
        last_name, 
        gender
    } = localhostUser;

    return new User({
        id, 
        isActive, 
        balance, 
        avatar, 
        firstName: first_name, 
        lastName: last_name, 
        gender,
    });

}